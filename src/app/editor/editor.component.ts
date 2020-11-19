import { Component, HostListener, OnInit } from '@angular/core';
import { BarsSizes } from 'src/app/utils/bars-sizes';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  editorHeight!: string;
  editorWidth!: string;
  editorTop!: string;
  editorLeft!: string;

  constructor() {}

  ngOnInit(): void {
    this.setBarsSize();
  }
  @HostListener('window:resize', ['$event'])
  onResize(ev: any): void {
    this.setBarsSize();
  }

  setBarsSize(): void {
    this.editorHeight = BarsSizes.heightWithoutBarsPX;
    this.editorTop = BarsSizes.titlebarHeightPX;
    setTimeout(() => {
      this.editorWidth = BarsSizes.widthWithoutSidebarPX;
      this.editorLeft = BarsSizes.sidebarWidthPX;
    }, 10);
    console.log(this.editorLeft);
  }
}
