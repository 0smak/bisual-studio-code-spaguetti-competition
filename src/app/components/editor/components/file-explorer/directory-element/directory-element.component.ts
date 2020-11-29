import { Component, Input, OnInit } from '@angular/core';
import { faFolder, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { OSDirTree, OSFileItem } from '@interfaces/osfile';
import { FileService } from '@services/file.service';
@Component({
  selector: 'app-directory-element',
  templateUrl: './directory-element.component.html',
  styleUrls: ['./directory-element.component.scss']
})
export class DirectoryElementComponent implements OnInit {
  @Input() tree: OSDirTree[];
  faFolder = faFolder;
  faChevronDown = faChevronDown;
  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  setFile(file: OSFileItem): void {
    this.fileService.setFile(file);
  }

}
