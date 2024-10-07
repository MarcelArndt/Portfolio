import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorSwapService {

  constructor() { }
  currentColorIsBlue:boolean = true;

  fadeInElements = document.querySelectorAll('[fadeIn');
  contact = document.getElementById("contact");
  
  
  ngOnInit(){
    console.log(this.fadeInElements);
    console.log(this.contact);
  }
  
}
