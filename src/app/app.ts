import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faTrophy, faPenNib, faCode, faFaceSmileBeam, faMagnifyingGlass, faGlobe } from '@fortawesome/free-solid-svg-icons';

import { Header } from './components/header/header';

import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header, FontAwesomeModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('gravity.cv');
  protected readonly icons = {
    faCoffee, faTrophy, faPenNib, faCode, faFaceSmileBeam, faMagnifyingGlass, faGlobe
  };

  public isSubmitted = false;

  name: string = '';
  email: string = '';
  message: string = '';

  public sendEmail() {
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    emailjs.send('service_5ex3ywv', 'template_agwvogv', formData, {
      publicKey: 'q9S0tAIM5hQjDON3L',
    })
      .then(
        () => {
          console.log('SUCCESS!');
          this.isSubmitted = true;
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          // Add error handling here
        },
      );
  }
}
