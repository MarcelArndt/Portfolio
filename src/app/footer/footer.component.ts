import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';
import { ImpressumComponent } from '../impressum/impressum.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ImpressumComponent ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public ThemeColor: ColorSwapService){

  }
}
