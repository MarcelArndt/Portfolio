import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';
import { ScrollAnimationDirective } from '../scroll-animation.directive';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor(public ThemeColor:ColorSwapService){

  }
}