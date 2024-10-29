import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';
import { TranslationsService } from '../translations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {

  public currentTexte:string[] = [];
  private languageSubscription: Subscription;

  constructor(public ThemeColor:ColorSwapService, public texte:TranslationsService){
    this.languageSubscription = this.texte.currentLanguage.subscribe(lang => {
      this.currentTexte = this.texte.getTexts(lang).dataprotect;
    });
  }
  
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
}
