import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FileExplorerComponent } from '@components/editor/components/file-explorer/file-explorer.component';
import { EJSFileItem } from '@interfaces/ejsfile';
import { FileService } from '@services/file.service';
import { HotKeysService } from '@services/hot-keys.service';
import { EJSSyntax } from '@utils/EJSSyntax';
import { Subscription } from 'rxjs';
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons'
import { faWindowRestore, faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})

export class TitleBarComponent implements OnInit, OnDestroy {

  selectedFile$!: Subscription;
  selectedFile: EJSFileItem;

  faMinimize = faWindowMinimize;
  faRestore = faWindowRestore;
  faClose = faTimes;
  constructor(private fileService: FileService, private hotkeys: HotKeysService, private ejsSyntax: EJSSyntax) {
    this.selectedFileSubscription();
    this.hotkeys.addShortcut({ keys: 'control.s' }).subscribe(ev => this.save())
    this.hotkeys.addShortcut({ keys: 'control.o' }).subscribe(ev => this.openNew())
  }

  ngOnDestroy(): void {
    this.selectedFile$.unsubscribe();
  }

  ngOnInit(): void {

  }

  private selectedFileSubscription() {
    this.selectedFile$ = this.fileService.selectedFile$.subscribe(file => {
      this.selectedFile = file;
    });
  }

  public save(): void {
    if (!!this.selectedFile) {
      this.fileService.saveFile(this.selectedFile);
    }
  }

  public openNew(): void {
    this.fileService.setFile(undefined);
    this.fileService.setFiles(undefined);
    setTimeout(() => {
      document.getElementById('openFolder').click();
    }, 50);
  }

  public rehighlight(): void {
    this.ejsSyntax.setFirehighlight(true);
  }

  public openSkins(): void {
    document.getElementById('sidebar-skins').click();
  }

  get win() {
    const { remote } = (window['require']("electron") as any);
    return remote.BrowserWindow.getFocusedWindow();
  }

  closeWindow() {
    this.win.close();
  }

  minimizeWindow() {
    this.win.minimize();
  }

  maximizeWindow() {
    this.win.isMaximized() ? this.win.unmaximize() : this.win.maximize();
  }

}
