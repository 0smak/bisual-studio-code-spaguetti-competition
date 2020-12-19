import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { EJSFileItem } from '@interfaces/ejsfile';
import { FileService } from '@services/file.service';
import { BarsSizes } from '@utils/bars-sizes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, OnDestroy, AfterViewInit {
  public editorHeight!: string;
  public editorWidth!: string;
  public editorTop!: string;
  public editorLeft!: string;

  private file$!: Subscription;
  private files$!: Subscription;

  public selectedFile: EJSFileItem;

  private mousePosition!: number;
  constructor(
    private fileService: FileService,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  mouseupListener;
  ngAfterViewInit(): void {
    this.mouseupListener = this.renderer.listen(document, 'mouseup', (ev) => this.handleMouseup(ev));
  }

  ngOnDestroy(): void {
    this.file$.unsubscribe();
  }

  ngOnInit(): void {
    this.setBarsSize();
    this.subscribeToFile();
  }

  listener;
  public handleMousedown(e): void {
    if (e.offsetX >= e.target.offsetWidth - 5) {
      this.listener = this.renderer.listen(
        // this.el.nativeElement.querySelector('app-file-explorer'),
        document,
        'mousemove',
        (ev) => this.resize(ev)
      );
    }
  }

  public handleMouseup(e): void {
    if (this.listener) {
      this.listener();
    }
  }


  public resize(ev): void {
    const dx = -(this.mousePosition - ev.x);
    this.mousePosition = ev.x;
    this.renderer.setStyle(this.el.nativeElement.querySelector('app-file-explorer'), 'width', (parseInt(getComputedStyle(this.el.nativeElement.querySelector('app-file-explorer'), '').width) + dx) + "px");

  }


  @HostListener('window:resize', ['$event'])
  onResize(ev: any): void {
    this.setBarsSize();
  }

  private subscribeToFile(): void {
    this.file$ = this.fileService.selectedFile$.subscribe((file: EJSFileItem) => {
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
