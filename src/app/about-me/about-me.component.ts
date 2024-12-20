import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';
import { ScrollAnimationDirective } from '../scroll-animation.directive';
import { Subscription } from 'rxjs';
import { TranslationsService } from '../translations.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',

})
export class AboutMeComponent {
  public currentTexte:string[] = [];
  private languageSubscription: Subscription;
  constructor(public ThemeColor: ColorSwapService, public texte:TranslationsService){
    this.languageSubscription = this.texte.currentLanguage.subscribe(lang => {
      this.updateTexts(lang);
    });
    this.updateTexts('german');
    this.languageSubscription = this.texte.currentLanguage.subscribe(lang => {
      this.currentTexte = this.texte.getTexts(lang).aboutMe;
    });

  }

  updateTexts(lang: 'german' | 'english') {
    const texts = this.texte.getTexts(lang).aboutMe;
    this.text = texts;
    this.changeHeadline();
    this.displayTextBox = this.text[this.activeTextBoxIndex]; 
  }

  text:string[] = [];
  headline:string = '';
  animationClass: string = 'AboutMeText';
  displayTextBox:string = this.text[0];
  activeTextBoxIndex:number = 0;

  enbaleTextBox(index: number){
    if(this.activeTextBoxIndex != index){
      this.activeTextBoxIndex = index;
      this.changeHeadline();
      this.changeAnimation();
      this.displayTextBox = this.text[index];
    }
  }

  changeHeadline(){
    switch(this.activeTextBoxIndex){
      case 0: this.headline = this.text[4]; break;
      case 1: this.headline = this.text[5]; break;
      case 2: this.headline = this.text[6]; break;
      case 3: this.headline = this.text[7]; break;
      default: this.headline = "About Me"; break;
    }
  }

  changeAnimation(){
    this.animationClass = "noneopacity";
    setTimeout(() => {
      this.animationClass = 'AboutMeText'; 
    },10);
  }
}
