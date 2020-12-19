import { Component, Input, OnInit } from '@angular/core';
import { faFolder, faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { EJSDirTree, EJSFileItem } from '@interfaces/ejsfile';
@Component({
  selector: 'app-file-element',
  templateUrl: './file-element.component.html',
  styleUrls: ['./file-element.component.scss']
})
export class FileElementComponent implements OnInit {

  @Input() file: EJSFileItem;
  icon;
  constructor() { }

  ngOnInit(): void {
    this.icon = this.file.isDirectory ? faFolder : faFileAlt;

  }

  get isDirectory(): boolean {
    return this.file.isDirectory;
  }

}
