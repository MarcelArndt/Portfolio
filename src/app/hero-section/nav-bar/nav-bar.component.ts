import { Component, Renderer2, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ColorSwapService } from '../../color-swap.service';
import { TranslationsService } from '../../translations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
  
})


export class NavBarComponent {

  public currentTexte:string[] = [];
  private languageSubscription: Subscription;

  constructor(
    public ThemeColor: ColorSwapService, 
    private renderer: Renderer2, 
    public texte:TranslationsService){
      this.languageSubscription = this.texte.currentLanguage.subscribe(lang => {
        this.currentTexte = this.texte.getTexts(lang).navigation;
      });
    }

  public currentLanguage:string = 'german';
  isColorNavOn = false;
  hideNavigation = true;
  blueColorTheme = true;
  isMobilNavOn = false;
  hideMobilNavigation = true;
  setMobilOff = true;
  isScrolled = false;
  isScrollingUpwards = false;
  latestScrollPosition:number = 0;


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

  ngOnInit(){
    this.setBodyBackground();
  }

  setBodyBackground(){
    let htmlElement = document.getElementsByTagName(`html`);
    if(this.ThemeColor.currentColorIsBlue){
      this.renderer.setStyle(document.body, 'background-color', '#040a2e');
      htmlElement[0].classList.add("blueScrollbar");
      htmlElement[0].classList.remove("orangeScrollbar");
    } else {
      this.renderer.setStyle(document.body, 'background-color', '#160302');
      htmlElement[0].classList.add("orangeScrollbar");
      htmlElement[0].classList.remove("blueScrollbar");
    }
  }

  switchLanguage(){
    this.texte.switchOnClick();
  }

  closeMenues(){
    this.isColorNavOn = false;
    this.isMobilNavOn = false;
    this.hideMobilNavigation = true;
    setTimeout(() => {
      this.setMobilOff = true
      this.hideNavigation = true
    }, 325);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const targetElement = event.target as HTMLElement;
    if (this.isColorNavOn && !targetElement.closest('.colorSwitchButton') || this.isMobilNavOn && !targetElement.closest('.mobile-menu')) {
      this.closeMenues();
    }
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
    this.isScrollingUpwards =  this.latestScrollPosition < window.scrollY;
    this.latestScrollPosition = window.scrollY;
  }
}
