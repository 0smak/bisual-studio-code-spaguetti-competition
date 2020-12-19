import { Component, Input, OnInit } from '@angular/core';
import { faFolder, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { EJSDirTree, EJSFileItem } from '@interfaces/ejsfile';
import { FileService } from '@services/file.service';
@Component({
  selector: 'app-directory-element',
  templateUrl: './directory-element.component.html',
  styleUrls: ['./directory-element.component.scss']
})
export class DirectoryElementComponent implements OnInit {
  @Input() tree: EJSDirTree[];
  faFolder = faFolder;
  faChevronDown = faChevronDown;
  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  setFile(file: EJSFileItem): void {
    this.fileService.setFile(file);
  }

}
