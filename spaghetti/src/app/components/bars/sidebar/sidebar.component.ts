import { Component, HostListener, OnInit } from '@angular/core';
import { faCopy, faFile } from '@fortawesome/free-regular-svg-icons';
import { faCode, faPastafarianism } from '@fortawesome/free-solid-svg-icons';
import { EJSDirTree } from '@interfaces/ejsfile';
import { FileService } from '@services/file.service';
import { ModalService } from '@services/modal.service';
import { SkinService } from '@services/skin.service';
import { BarsSizes } from '@utils/bars-sizes';
import { EJSSyntax } from '@utils/EJSSyntax';
import { ParseCode } from '@utils/parse-code';
import { } from 'electron';
import Fs from 'fs';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  faCopy = faCopy;
  faFile = faFile;
  faCode = faCode;
  faPastafarianism = faPastafarianism;

  sidebarHeight!: string;
  sidebarTop!: string;
  constructor(private skinService: SkinService, private fileService: FileService, private modal: ModalService, private ejsSyntax: EJSSyntax) {
    this.subscribeForFiles()
    const isElectron: boolean = !!window && !!window['process'] && !!window['process'].type;

    if (isElectron) {
      let fs: typeof Fs = window['require']('fs');
      let app: Electron.App = (window['require']('electron') as any).remote;
    }
  }

  files!: EJSDirTree[];
  files$!: Subscription;
  subscribeForFiles() {
    this.files$ = this.fileService.files$.subscribe(files => this.files = files);
  }

  compile() {

    let fs: typeof Fs = window['require']('fs');
    let getDirName = window['require']('path').dirname;
    let mkdirp = window['require']('mkdirp');
    const parser = new ParseCode();
    this.compileRec(fs, getDirName, mkdirp, parser, this.files);
    this.modal.fire({
      title: 'Archivos transpilados',
      message: `Se han transpilado los archivos en "${this.files[0].file.path.split('/')[0]}/out"`,
      visible: true
    });

  }

  compileRec(fs: typeof Fs, getDirName, mkdirp, parser: ParseCode, files) {
    files.forEach((file: EJSDirTree) => {
      if (file.child && file.child.length > 0) {
        this.compileRec(fs, getDirName, mkdirp, parser, file.child);
      } else {
        const relPath = file.file.path.split('/')[0];
        const path = file.file.fullPath.split(/\\/g).join('/').split(`${relPath}/`).join(`${relPath}/out/`).replace('.ejs', '.js');
        const content = file.file?.ejsFile?.content;
        if (content) {
          const tokens = this.ejsSyntax.tokenizeTokens(this.ejsSyntax.tokenizeCode(content))
          const out = parser.parseToEJS(tokens.querySelectorAll('.row, span'));
          if (!file.file.fullPath.split(/\\/g).includes('out')) {
            mkdirp(getDirName(path), function (err) {
              if (err) return console.error(err);
              fs.writeFile(path, out, _err => {
                if (_err) return console.error(_err);

              });
            });
          }
        }
      }
    })
  }

  ngOnInit(): void {
    this.setBarsHeight();
  }
  @HostListener('window:resize', ['$event'])
  onResize(ev: any): void {
    this.setBarsHeight();
  }

  setBarsHeight(): void {
    this.sidebarHeight = BarsSizes.heightWithoutBarsPX;
    this.sidebarTop = BarsSizes.titlebarHeightPX;
  }

  openSkins(): void {
    this.skinService.setModalStatus(true);
  }
}
