import { Injectable } from '@angular/core'; 
import { shell } from 'electron'; 
  
@Injectable({ 
  providedIn: 'root'
}) 
export class ElectronService { 
  shell: typeof shell; 
  
  constructor() {  
    this.shell = (<any>window).require("electron").shell; 
  } 
} 