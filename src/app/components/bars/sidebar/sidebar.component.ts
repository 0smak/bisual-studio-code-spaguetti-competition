import { Component, HostListener, OnInit } from '@angular/core';
import { faCopy, faFile } from '@fortawesome/free-regular-svg-icons';
import { faCode, faPastafarianism } from '@fortawesome/free-solid-svg-icons';
import { SkinService } from '@services/skin.service';
import { BarsSizes } from '@utils/bars-sizes';
import { ParseCode } from '@utils/parse-code';

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
  constructor(private skinService: SkinService) { }

  compile() {
    const parser = new ParseCode();
    parser.parseToOS()
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
