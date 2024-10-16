import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';
import { ImpressumComponent } from '../impressum/impressum.component';
import { DatenschutzComponent } from '../datenschutz/datenschutz.component';
import { TranslationsService } from '../translations.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ImpressumComponent, DatenschutzComponent ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public currentTexte:string[] = [];
  private languageSubscription: Subscription;

  constructor(public ThemeColor: ColorSwapService, public texte:TranslationsService){
    this.languageSubscription = this.texte.currentLanguage.subscribe(lang => {
      this.currentTexte = this.texte.getTexts(lang).footer;
    });
  }
}
