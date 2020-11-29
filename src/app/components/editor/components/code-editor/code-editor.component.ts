import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OSFileItem } from '@interfaces/osfile';
import { OSSyntax } from '@utils/OSSyntax';
import { spawn } from 'child_process';

@Component({
	selector: 'app-code-editor',
	templateUrl: './code-editor.component.html',
	styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit, OnChanges {
	@Input() selectedFile: OSFileItem;
	savedCaret!: any;
	selection!: Selection;
	htmlCode: HTMLCode[];
	constructor(private osSyntax: OSSyntax) { }
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
		console.log(ev)
		this.saveCaret();

		if (ev.code === 'ArrowUp') {
			const rows = document.querySelectorAll('#code-editor > .row');
			if (rowIndex > 0) {
				(rows[rowIndex - 1] as HTMLElement).focus();
			}
		}
		if (ev.code === 'ArrowDown') {
			const rows = document.querySelectorAll('#code-editor > .row');
			console.log('hey');
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
		console.log(ev);
		let content;
		if (!!ev) content = (document.querySelector('code#code-editor') as any).innerText
		if (!ev) content = this.selectedFile.osFile.content
		if (!ev || (!!ev && ['Space', 'Enter'].includes(ev.code))) {
			const tokenized = this.osSyntax.tokenizeTokens(this.osSyntax.tokenizeCode(content));
			document.querySelector('code#code-editor').innerHTML = tokenized.innerHTML;
			console.log(this.savedCaret);
			if (!!this.savedCaret && !!ev) {
				if (ev.code === 'Enter') {
					let child = document.getElementById(this.savedCaret[0].parentElement.id);
					const match = child.id.match(/\d{1,}/);
					if (match) {
						const rowN = Number(child.id.match(/\d{1,}/)[0])
						const row = document.querySelector(`#row-${rowN + 1}`);
						console.warn(row);
						if (row) {
							const children = row.lastElementChild.firstChild;
							console.warn(children);
							document.getSelection().collapse(children, 0);
						}
					}
				} else {

					if (this.savedCaret[0].parentElement.id.includes('token')) {

						let child = document.getElementById(this.savedCaret[0].parentElement.id);
						console.log(this.savedCaret[0])
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
	}



	saveCaret(): void {
		this.selection = document.getSelection();
		this.savedCaret = [this.selection.focusNode, this.selection.focusOffset];
		console.log(this.savedCaret)
	}

}

interface HTMLCode {
	id: string;
	class?: string;
	innerHTML?: string;
	childs?: HTMLCode[];
}