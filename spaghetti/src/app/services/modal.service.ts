import { Injectable } from '@angular/core';
import { IModal } from '@components/modal/modal.component';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modal: Subject<IModal> = new Subject<IModal>();
  public modal$: Observable<IModal> = this.modal.asObservable();
  constructor() { }

  public fire(modal: IModal): void {
    this.modal.next(modal);
  }
}
