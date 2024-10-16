import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../../color-swap.service';
import { TranslationsService } from '../../translations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-success-submit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-submit.component.html',
  styleUrl: './success-submit.component.scss'
})

export class SuccessSubmitComponent {

  public currentTexte:string[] = [];
  private languageSubscription: Subscription;

  constructor(public ThemeColor:ColorSwapService, public texte:TranslationsService){
    this.languageSubscription = this.texte.currentLanguage.subscribe(lang => {
      this.currentTexte = this.texte.getTexts(lang).succesEmail;
    });
  }


  currentMessage:string[] = [];


  @Input() textContent: string = '';
  isLightboxOpen: boolean = false;
  isClosingAnimation:boolean = false;


  openLightbox() {
    this.isLightboxOpen = true;
    this.isClosingAnimation = false;
  }

  closeLightbox() {
    this.isClosingAnimation = true;
    setTimeout(() => {
      this.isLightboxOpen = false;
    }, 625)
  }


  setSuccess(wasSuccess:boolean = false){
    let genTexte:string[] = [];
    this.currentMessage = [];
    if(wasSuccess){
      genTexte = [this.currentTexte[0],this.currentTexte[1],this.currentTexte[4]];
    } else {
      genTexte = [this.currentTexte[2],this.currentTexte[3],this.currentTexte[4]];
    }
    this.currentMessage.push(genTexte[0], genTexte[1], genTexte[2]);
    this.openLightbox();
  }

}
