import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skin-element',
  templateUrl: './skin-element.component.html',
  styleUrls: ['./skin-element.component.scss']
})
export class SkinElementComponent implements OnInit {

  @Input() img: string;
  constructor() { }

  ngOnInit(): void {
  }

}
