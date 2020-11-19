import { Component, HostListener, OnInit } from '@angular/core';
import { faCopy, faFile } from '@fortawesome/free-regular-svg-icons';
import { faCode, faPastafarianism } from '@fortawesome/free-solid-svg-icons';
import { BarsSizes } from 'src/app/utils/bars-sizes';

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
  constructor() {}

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
}
