import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(public ThemeColor:ColorSwapService){

  }
}
