import { Component, OnInit } from '@angular/core';
import { DirTreeItem } from 'src/app/interfaces/dir-tree-item';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent implements OnInit {

  projectTree!: DirTreeItem;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(ev: any): void {
    if (ev.target.files) {
      const files = ev.target.files;
      console.log(files);
      if (files.length > 0) {
        const file = files[0];
        let path = file.path;
        console.log(path);

      }
    }
  }

}
