import { Component, OnInit } from '@angular/core';
import { DirTreeItem } from '@interfaces/dir-tree-item';
import { OSDirTree, OSFile, OSFileItem, WebkitFile } from '@interfaces/osfile';
import { FileService } from '@services/file.service';

@Component({
	selector: 'app-file-explorer',
	templateUrl: './file-explorer.component.html',
	styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent implements OnInit {

	projectTree!: OSDirTree[];
	files: FileWithContent[] = [];
	constructor(private fileService: FileService) { }

	ngOnInit(): void {
	}

	onChange(ev: any): void {
		if (ev.target.files) {
			const files: any[] = ev.target.files;
			if (files.length > 0) {
				this.files = [];
				const file = files[0];
				const filesAmount = files.length;
				[...files].forEach((file, i) => {
					this.uploadDocument(file, i, filesAmount);
				})
			}
		}
	}

	uploadDocument(file: any, i: number, amount: number): void {
		let fileReader = new FileReader();
		fileReader.onload = (e) => {
			const content = fileReader.result as string;
			this.files.push({ file, content });
			if (i === amount - 1)
				this.buildTree()
		}
		fileReader.readAsText(file);
	}

	buildTree(): void {
		this.projectTree = [];
		this.files.forEach(f => {
			this.buildTreeRec(f, this.projectTree)
		})
	}

	buildTreeRec(file: FileWithContent, tree: OSDirTree[]): void {
		const path = file.file.webkitRelativePath;
		const pathSplit = path.split('/');
		pathSplit.forEach((el, i) => {
			if (!this.isElementOnTree(el, tree)) {
				this.createTreeItem(el, tree, pathSplit, i, file.content)
			} else {
				tree = this.getElementOnTree(el, tree).child;
			}
			const next = this.getElementOnTree(el, tree);
			if (next)
				tree = next.child;
		});
	}

	createTreeItem(name: string, tree: OSDirTree[], pathSplit: string[], i: number, content?: string): void {
		const isDirectory = i < pathSplit.length - 1;
		const newFile: OSDirTree = {
			file: {
				isDirectory,
				name,
				path: pathSplit.slice(0, i + 1).join('/'),
			},
			child: []
		}
		if (!isDirectory && content) newFile.file = { ...newFile.file, osFile: { content } }
		tree.push(newFile)
	}

	isElementOnTree(el: string, tree: OSDirTree[]): boolean {
		return tree.some(t => t.file.name === el);
	}

	getElementOnTree(el: string, tree: OSDirTree[]): OSDirTree | undefined {
		return tree.find(t => t.file.name === el);
	}


}

interface FileWithContent {
	file: WebkitFile;
	content: string;
}