import { Injectable } from '@angular/core';
import { EJSDirTree, EJSFile, EJSFileItem } from '@interfaces/ejsfile';
import { Observable, Subject } from 'rxjs';
import { } from 'electron';
import Fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private files: Subject<EJSDirTree[]> = new Subject<EJSDirTree[]>();
  public files$: Observable<EJSDirTree[]> = this.files.asObservable();

  private selectedFile: Subject<EJSFileItem> = new Subject<EJSFileItem>();
  public selectedFile$: Observable<EJSFileItem> = this.selectedFile.asObservable();
  constructor() {

  }

  public setFiles(files: EJSDirTree[]): void {
    this.files.next(files);
  }

  public setFile(file: EJSFileItem): void {
    this.selectedFile.next(file);
  }

  public saveFile(file: EJSFileItem): void {
    let fs: typeof Fs = window['require']('fs');
    const path = file.fullPath.split(/\\/g).join('/')
    fs.writeFile(path, file.ejsFile.content, function (err) {
      if (err) return console.log(err);
      console.log(`File saved on ${file.path}`);
    });
  }
}
