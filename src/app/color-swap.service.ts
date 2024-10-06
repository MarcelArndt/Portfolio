import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorSwapService {

  constructor() { }
  currentColorIsBlue:boolean = true;
  
}
