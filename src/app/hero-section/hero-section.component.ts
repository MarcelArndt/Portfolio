import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ColorSwapService } from '../color-swap.service';
import { ScrollAnimationDirective } from '../scroll-animation.directive';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NavBarComponent, CommonModule, ScrollAnimationDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  constructor(public ThemeColor: ColorSwapService){
  }

}
