import { Component, inject, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwapService } from '../color-swap.service';
import { TranslationsService } from '../translations.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ScrollAnimationDirective } from '../scroll-animation.directive';
import { SuccessSubmitComponent } from './success-submit/success-submit.component';
import { Subscription } from 'rxjs';
import { DatenschutzComponent } from '../datenschutz/datenschutz.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimationDirective, SuccessSubmitComponent, DatenschutzComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  public currentTexte:string[] = [];
  public currentError:string[] = [];
  private languageSubscription: Subscription;

  constructor(
    public ThemeColor: ColorSwapService, public texte:TranslationsService){
    this.languageSubscription = this.texte.currentLanguage.subscribe(lang => {
      this.currentTexte = this.texte.getTexts(lang).contact;
      this.currentError = this.texte.getTexts(lang).errorContact;
    });
  }

  @ViewChild('success') successComponent!: SuccessSubmitComponent;
  http = inject(HttpClient);

  @ViewChild('dataProtectionComponent') dataProtectionComponent!: DatenschutzComponent;


  post = {
    endPoint: 'https://arndt-marcel.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  dataProtect: boolean = false;
  submitted: boolean = false;

  currentContact = {
    name: "",
    email: "",
    text: "",
  };

  onSubmit(ngForm: NgForm) {
    this.submitted = true;
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.currentContact))
        .subscribe({
          next: (response) => {
            this.successComponent.setSuccess(true);
            ngForm.resetForm();
            this.submitted = false;
          },
          error: (error) => {
            this.successComponent.setSuccess(false);
          },
        });
    } else {
      this.successComponent.setSuccess(false);
    }
  }
}
