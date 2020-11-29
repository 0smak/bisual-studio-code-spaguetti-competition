import { Component, OnDestroy } from '@angular/core';
import { SkinService } from '@services/skin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'spaghetti';
  skinModal$: Subscription;
  showSkinModal: boolean = false;
  constructor(private skinService: SkinService) {
    this.subscribeToSkinModal();
    this.skinService.setSkin(this.skinService.skin);
  }

  ngOnDestroy(): void {
    this.skinModal$.unsubscribe();
  }

  subscribeToSkinModal() {
    this.skinModal$ = this.skinService.skinModal$.subscribe(b => this.showSkinModal = b);
  }


}
