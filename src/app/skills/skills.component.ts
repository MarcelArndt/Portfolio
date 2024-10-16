import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';
import { ScrollAnimationDirective } from '../scroll-animation.directive';
import { TranslationsService } from '../translations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  public currentTexte:string[] = [];
  private languageSubscription: Subscription;

  constructor(public ThemeColor: ColorSwapService, public texte:TranslationsService){
    this.languageSubscription = this.texte.currentLanguage.subscribe(lang => {
      this.currentTexte = this.texte.getTexts(lang).skills;
    });
  }

}
