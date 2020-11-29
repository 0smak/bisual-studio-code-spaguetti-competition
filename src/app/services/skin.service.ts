import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkinService {

  private skinModal: Subject<boolean> = new Subject<boolean>();
  public skinModal$: Observable<boolean> = this.skinModal.asObservable();

  constructor() { }

  public setModalStatus(status: boolean): void {
    this.skinModal.next(status);
  }

  public setSkin(skin: string): void {
    localStorage.setItem('skin', skin);
    this.setSkinOnDOM();
  }

  private setSkinOnDOM() {
    document.querySelector('html').className = this.skin || 'default';
  }

  public get skin(): string {
    return localStorage.getItem('skin');
  }
}
