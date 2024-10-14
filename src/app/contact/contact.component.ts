import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';
import { TranslationsService } from '../translations.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(
    public ThemeColor: ColorSwapService,
    public Language: TranslationsService
  ){

  }
  currentContact = {
    name: "",
    email: "",
    text: "",
  };

  onSubmit(ngform: NgForm){
    if(ngform.valid && ngform.submitted){
      console.log(this.currentContact)
    }
  }


}
