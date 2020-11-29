import { Component, Input, OnInit } from '@angular/core';
import { faFolder, faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { OSDirTree, OSFileItem } from '@interfaces/osfile';
@Component({
  selector: 'app-file-element',
  templateUrl: './file-element.component.html',
  styleUrls: ['./file-element.component.scss']
})
export class FileElementComponent implements OnInit {

  @Input() file: OSFileItem;
  icon;
  constructor() { }

  ngOnInit(): void {
    this.icon = this.file.isDirectory ? faFolder : faFileAlt;
  }

  get isDirectory(): boolean {
    return this.file.isDirectory;
  }

}
