import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';
import { ScrollAnimationDirective } from '../scroll-animation.directive';
import { TranslationsService } from '../translations.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  private languageSubscription: Subscription;
  public currentTexte: string[] = [];
  public projectOne: string[] = [];
  public projectTwo: string[] = [];
  public projectThree: string[] = [];

  constructor(public ThemeColor:ColorSwapService, public texte:TranslationsService){
    this.languageSubscription = this.texte.currentLanguage.subscribe(lang => {
      this.currentTexte = this.texte.getTexts(lang).portfolio;
      this.projectOne = this.texte.getTexts(lang).projectOne;
      this.projectTwo = this.texte.getTexts(lang).projectTwo;
      this.projectThree = this.texte.getTexts(lang).projectThree;
    });
  }
}