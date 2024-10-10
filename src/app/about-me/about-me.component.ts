import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';
import { ScrollAnimationDirective } from '../scroll-animation.directive';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',

})
export class AboutMeComponent {
  constructor(public ThemeColor: ColorSwapService){}
  text:string[] = [
    "Hi, I’m a german speaking Frontend Developer based near Munich. Motivated by the limitless opportunities within IT, I am excited about crafting visually captivating and intuitive websites and applications.",
    "Flexible in terms of working environments, I can work effectively both on-site in Munich and remotely.",
    "I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.",
    "In my profession, programming isn't just about writing code; it's a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life."
  ];

  animationClass: string = 'AboutMeText';
  displayTextBox:string = this.text[0];
  activeTextBoxIndex:number = 0;

  enbaleTextBox(index: number){
    if(this.activeTextBoxIndex != index){
      this.activeTextBoxIndex = index;
      this.changeAnimation();
      this.displayTextBox = this.text[index];
    }
  }

  changeAnimation(){
    this.animationClass = "noneopacity";
    setTimeout(() => {
      this.animationClass = 'AboutMeText'; 
    },10);
  }
}
