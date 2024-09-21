import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [HeroSectionComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ContactComponent, FooterComponent ],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent {

}
