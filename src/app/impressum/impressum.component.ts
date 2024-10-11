import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  constructor(public ThemeColor:ColorSwapService){}
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
