import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ColorSwapService } from '../color-swap.service';
import { ScrollAnimationDirective } from '../scroll-animation.directive';
import { TranslationsService } from '../translations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NavBarComponent, CommonModule, ScrollAnimationDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  public currentTexte:string[] = [];
  private languageSubscription: Subscription;

  constructor(public ThemeColor: ColorSwapService, public texte:TranslationsService){
    this.languageSubscription = this.texte.currentLanguage.subscribe(lang => {
      this.currentTexte = this.texte.getTexts(lang).headline;
    });
  }

}
