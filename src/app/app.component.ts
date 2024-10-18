import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './hero-section/nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ColorSwapService } from './color-swap.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public ThemeColor: ColorSwapService){

  }

  title = 'Portfolio';
}
