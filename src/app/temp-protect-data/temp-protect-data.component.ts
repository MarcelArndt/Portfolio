import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { ColorSwapService } from '../color-swap.service';
import { ImpressumComponent } from '../impressum/impressum.component';
import { NavBarComponent } from '../hero-section/nav-bar/nav-bar.component';

@Component({
  selector: 'app-temp-protect-data',
  standalone: true,
  imports: [HeroSectionComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ContactComponent, FooterComponent, CommonModule, ImpressumComponent, NavBarComponent ],
  templateUrl: './temp-protect-data.component.html',
  styleUrl: './temp-protect-data.component.scss'
})
export class TempProtectDataComponent {
  constructor(public ThemeColor: ColorSwapService){
  }
}
