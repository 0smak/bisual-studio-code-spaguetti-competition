import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { OSFileItem } from '@interfaces/osfile';
import { FileService } from '@services/file.service';
import { BarsSizes } from '@utils/bars-sizes';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, OnDestroy {
  public editorHeight!: string;
  public editorWidth!: string;
  public editorTop!: string;
  public editorLeft!: string;

  private file$!: Subscription;
  private files$!: Subscription;

  public selectedFile: OSFileItem;
  constructor(private fileService: FileService) { }

  ngOnDestroy(): void {
    this.file$.unsubscribe();
  }

  ngOnInit(): void {
    this.setBarsSize();
    this.subscribeToFile();
  }
  @HostListener('window:resize', ['$event'])
  onResize(ev: any): void {
    this.setBarsSize();
  }

  private subscribeToFile(): void {
    this.file$ = this.fileService.selectedFile$.subscribe((file: OSFileItem) => {
      this.selectedFile = file;
    })
  }

  private setBarsSize(): void {
    this.editorHeight = BarsSizes.heightWithoutBarsPX;
    this.editorTop = BarsSizes.titlebarHeightPX;
    setTimeout(() => {
      this.editorWidth = BarsSizes.widthWithoutSidebarPX;
      this.editorLeft = BarsSizes.sidebarWidthPX;
    }, 10);
  }
}
