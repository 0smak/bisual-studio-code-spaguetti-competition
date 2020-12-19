import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EJSFileItem } from '@interfaces/ejsfile';
import { HotKeysService } from '@services/hot-keys.service';
import { EJSSyntax } from '@utils/EJSSyntax';
import { spawn } from 'child_process';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-code-editor',
	templateUrl: './code-editor.component.html',
	styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit, OnChanges {
	@Input() selectedFile: EJSFileItem;
	savedCaret!: any;
	selection!: Selection;
	htmlCode: HTMLCode[];
	constructor(private ejsSyntax: EJSSyntax, private hotkeys: HotKeysService) {
		this.hotkeys.addShortcut({ keys: 'control.h' }).subscribe(ev => this.onLoadFile())
		this.subscribeForFireHighlighting();
	}

	hightlightingHandler$: Subscription;
	subscribeForFireHighlighting() {
		this.hightlightingHandler$ = this.ejsSyntax.fireHighlight$.subscribe(fired => {
			if (fired) this.onLoadFile();
		})
	}

	ngOnChanges(changes: SimpleChanges): void {
		setTimeout(() => {

			if (!!this.selectedFile && !!changes.selectedFile) {
				// this.highlight();
				this.onLoadFile()
			}
		}, 500);
	}

	ngOnInit(): void {
		this.selection = document.getSelection();
	}



	handleKeyup(ev, rowIndex) {
		this.saveCaret();

		if (ev.code === 'ArrowUp') {
			const rows = document.querySelectorAll('#code-editor > .row');
			if (rowIndex > 0) {
				(rows[rowIndex - 1] as HTMLElement).focus();
			}
		}
		if (ev.code === 'ArrowDown') {
			const rows = document.querySelectorAll('#code-editor > .row');
			if (rowIndex < (rows.length - 1)) {
				(rows[rowIndex + 1] as HTMLElement).focus();
			}
		}
		if (ev.code == 'Enter') {
			this.htmlCode = this.insert(this.htmlCode, rowIndex + 1, { id: `row-${rowIndex}`, class: 'row', childs: [{ id: `row-${rowIndex}-token-0`, innerHTML: '&nbsp;', }] })

			this.htmlCode.map((el, i) => {
				el.childs.map((child, j) => {
					return child.id = `row-${i}-token-${j}`;
				});
				return el.id = `row-${i}`;
			});

			setTimeout(() => {
				(document.querySelectorAll('#code-editor > .row')[rowIndex + 1] as HTMLElement).focus();
			}, 50);
		}
	}

	insert(arr, index, newItem: HTMLCode) {
		return [...arr.slice(0, index), newItem, ...arr.slice(index)];
	}

	onLoadFile(ev?) {
		this.saveCaret();
		let content: string;
		if (!!ev) content = (document.querySelector('code#code-editor') as any).innerText;
		if (!ev) content = this.selectedFile?.ejsFile?.content || '';
		if (!ev || (!!ev && ['Space', 'Enter'].includes(ev.code))) {
			const tokenized = this.ejsSyntax.tokenizeTokens(this.ejsSyntax.tokenizeCode(content));
			document.querySelector('code#code-editor').innerHTML = tokenized.innerHTML;
			if (!!this.savedCaret && !!ev) {
				if (ev.code === 'Enter') {
					let child = document.getElementById(this.savedCaret[0].parentElement.id);
					const match = child.id.match(/\d{1,}/);
					if (match) {
						const rowN = Number(child.id.match(/\d{1,}/)[0])
						const row = document.querySelector(`#row-${rowN + 1}`);
						if (row) {
							const children = row.lastElementChild.firstChild;
							document.getSelection().collapse(children, 0);
						}
					}
				} else {

					if (this.savedCaret[0].parentElement.id.includes('token')) {

						let child = document.getElementById(this.savedCaret[0].parentElement.id);
						if (child) {


							if (child?.nextSibling && ev.code === 'Space') {
								child = child.nextSibling as HTMLElement;
								if (child.nextSibling) {
									child = child.nextSibling as HTMLElement;
								}
							}
							const children = child.firstChild;
							const savedOffset = this.savedCaret[1];
							const childrenLength = children.nodeValue.length;
							const offset = Math.min(savedOffset, childrenLength);

							document.getSelection().collapse(children, offset);
						}

					} else {
						let parent = this.savedCaret[0].parentElement;
						if (parent.localName === 'font') parent = parent.parentElement;
						const match = parent.id.match(/\d{1,}/);
						if (match) {
							const rowN = Number(parent.id.match(/\d{1,}/)[0])
							const row = document.querySelector(`#row-${rowN}`);
							if (row) {
								const children = row.lastElementChild.firstChild;
								document.getSelection().collapse(children, 0);
							}
						}
					}
				}
			}
		}
		this.selectedFile.ejsFile.content = (document.querySelector('code#code-editor') as any).innerText;
	}

	saveCaret(): void {
		this.selection = document.getSelection();
		this.savedCaret = [this.selection.focusNode, this.selection.focusOffset];
	}

}

interface HTMLCode {
	id: string;
	class?: string;
	innerHTML?: string;
	childs?: HTMLCode[];
}