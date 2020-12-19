import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '@services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modal
  constructor(private _modal: ModalService) { }

  ngOnInit(): void {
  }

  close() {
    this._modal.fire({ ...this.modal, visible: false });
  }

}

export interface IModal {
  title: string;
  message: string;
  visible: boolean;
}