import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {
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
