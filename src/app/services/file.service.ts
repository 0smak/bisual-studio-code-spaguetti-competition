import { Injectable } from '@angular/core';
import { OSDirTree, OSFile, OSFileItem } from '@interfaces/osfile';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private files: Subject<OSDirTree[]> = new Subject<OSDirTree[]>();
  public files$: Observable<OSDirTree[]> = this.files.asObservable();

  private selectedFile: Subject<OSFileItem> = new Subject<OSFileItem>();
  public selectedFile$: Observable<OSFileItem> = this.selectedFile.asObservable();
  constructor() { }

  public setFiles(files: OSDirTree[]): void {
    this.files.next(files);
  }

  public setFile(file: OSFileItem): void {
    this.selectedFile.next(file);
  }
}
