import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ColorSwapService } from '../color-swap.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NavBarComponent, CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  constructor(public ThemeColor: ColorSwapService){
  }

}
