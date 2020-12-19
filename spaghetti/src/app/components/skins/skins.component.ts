import { Component, OnInit } from '@angular/core';
import { SkinService } from '@services/skin.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss']
})
export class SkinsComponent implements OnInit {

  faTimes = faTimes;
  constructor(private skinService: SkinService) { }

  ngOnInit(): void {
  }

  setSkin(skin): void {
    this.skinService.setSkin(skin);
  }

  get skin(): string {
    return this.skinService.skin;
  }

  closeModal(ev?) {
    if (!ev || (ev && ev.target.nodeName === 'APP-SKINS'))
      this.skinService.setModalStatus(false);
  }

}
