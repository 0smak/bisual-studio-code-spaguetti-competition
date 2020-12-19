import { Component, OnDestroy } from '@angular/core';
import { SkinService } from '@services/skin.service';
import { Subscription } from 'rxjs';
import { } from 'electron';
import Fs from 'fs';
import { IModal } from '@components/modal/modal.component';
import { ModalService } from '@services/modal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'spaghetti';
  skinModal$!: Subscription;
  showSkinModal: boolean = false;
  modal!: IModal;
  modal$!: Subscription;
  constructor(private skinService: SkinService, private modalService: ModalService) {
    this.subscribeToSkinModal();
    this.subscribeToModal();
    this.skinService.setSkin(this.skinService.skin);

    const isElectron: boolean = !!window && !!window['process'] && !!window['process'].type;

    if (isElectron) {
      let fs: typeof Fs = window['require']('fs');
      let app: Electron.App = (window['require']('electron') as any).remote;
    }
  }

  ngOnDestroy(): void {
    this.skinModal$.unsubscribe();
    this.modal$.unsubscribe();
  }

  subscribeToSkinModal() {
    this.skinModal$ = this.skinService.skinModal$.subscribe(b => this.showSkinModal = b);
  }

  subscribeToModal() {
    this.modal$ = this.modalService.modal$.subscribe(m => this.modal = m);
  }


}
