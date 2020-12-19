import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DirTreeItem } from '@interfaces/dir-tree-item';
import { EJSDirTree, EJSFile, EJSFileItem, WebkitFile } from '@interfaces/ejsfile';
import { FileService } from '@services/file.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-file-explorer',
	templateUrl: './file-explorer.component.html',
	styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent implements OnInit, AfterViewInit {

	projectTree!: EJSDirTree[];
	files: FileWithContent[] = [];
	constructor(private fileService: FileService) { }

	ngAfterViewInit(): void {

	}

	ngOnInit(): void {
		this.subscribeFileExplorer();
	}

	fileExplorer$: Subscription;
	subscribeFileExplorer() {
		this.fileExplorer$ = this.fileService.files$.subscribe(files => this.projectTree = files);
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
		const projectTree = [];
		this.files.forEach(f => {
			this.buildTreeRec(f, projectTree)
		});
		this.fileService.setFiles(projectTree);
	}

	buildTreeRec(file: FileWithContent, tree: EJSDirTree[]): void {
		const path = file.file.webkitRelativePath;
		const pathSplit = path.split('/');
		pathSplit.forEach((el, i) => {
			if (!this.isElementOnTree(el, tree)) {
				this.createTreeItem(el, tree, pathSplit, file.file.path, i, (file.content || ' '))
			} else {
				tree = this.getElementOnTree(el, tree).child;
			}
			const next = this.getElementOnTree(el, tree);
			if (next)
				tree = next.child;
		});
	}

	createTreeItem(name: string, tree: EJSDirTree[], pathSplit: string[], fullPath: string, i: number, content?: string): void {
		const isDirectory = i < pathSplit.length - 1;
		const newFile: EJSDirTree = {
			file: {
				fullPath,
				isDirectory,
				name,
				path: pathSplit.slice(0, i + 1).join('/'),
			},
			child: []
		}
		if (!isDirectory && content != undefined) newFile.file = { ...newFile.file, ejsFile: { content } }
		if (isDirectory || (!isDirectory && newFile.file.name.endsWith('.ejs'))) {
			tree.push(newFile)
		}
	}

	isElementOnTree(el: string, tree: EJSDirTree[]): boolean {
		return tree.some(t => t.file.name === el);
	}

	getElementOnTree(el: string, tree: EJSDirTree[]): EJSDirTree | undefined {
		return tree.find(t => t.file.name === el);
	}


}

interface FileWithContent {
	file: WebkitFile;
	content: string;
}