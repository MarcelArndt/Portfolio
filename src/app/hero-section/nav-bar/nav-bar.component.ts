import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isColorNavOn = false;
  hideNavigation = true;
  blueColorTheme = true;

  toggleColorNav(){
    this.isColorNavOn = !this.isColorNavOn;
    if(!this.isColorNavOn){
      setTimeout(() => {
        this.hideNavigation = true
      }, 325);
    } else {
      this.hideNavigation = false
    }
  }

  switchToOrangeTheme(){
    this.blueColorTheme = false;
    console.log(this.blueColorTheme);
  }

  switchToBlueTheme(){
    this.blueColorTheme = true;
    console.log(this.blueColorTheme);
  }
}
