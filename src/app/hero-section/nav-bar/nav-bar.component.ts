import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ColorSwapService } from '../../color-swap.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
  
})
export class NavBarComponent {
  constructor(public ThemeColor: ColorSwapService, private renderer: Renderer2){
  }

  isColorNavOn = false;
  hideNavigation = true;
  blueColorTheme = true;

  isMobilNavOn = false;
  hideMobilNavigation = true;
  setMobilOff = true;

  toogleMobilNav(){
    this.isMobilNavOn = !this.isMobilNavOn;
    if(!this.hideMobilNavigation){
      this.hideMobilNavigation = true 
      setTimeout(() => {
        this.setMobilOff = true
      }, 325);
    } else {
      this.hideMobilNavigation = false;
      this.setMobilOff = false;
    }
    this.checkForColorNavi();
  }

  checkForColorNavi(){
    if(!this.hideMobilNavigation && !this.hideNavigation){
      setTimeout(() => {
        this.hideNavigation = true
      }, 325);
      this.isColorNavOn = false;
    }
  }

  toggleColorNav(){
    this.isColorNavOn = !this.isColorNavOn;
    if(!this.isColorNavOn){
      setTimeout(() => {
        this.hideNavigation = true
      }, 325);
    } else {
      this.hideNavigation = false
    }
   this.checkForMobilNavi();
  }

  checkForMobilNavi(){
    if(!this.hideMobilNavigation && !this.hideNavigation){
      this.hideMobilNavigation = true;
      this.isMobilNavOn = false;
      setTimeout(() => {
        this.setMobilOff = true
      }, 325);
    }
  }

  switchToOrangeTheme(){
    this.ThemeColor.currentColorIsBlue = false;
    this.setBodyBackground();
  }

  switchToBlueTheme(){
    this.ThemeColor.currentColorIsBlue = true;
    this.setBodyBackground();
  }

  setBodyBackground(){
    if(this.ThemeColor.currentColorIsBlue){
      this.renderer.setStyle(document.body, 'background-color', '#040a2e');
    } else {
      this.renderer.setStyle(document.body, 'background-color', '#2d0804');
    }
  }

}
