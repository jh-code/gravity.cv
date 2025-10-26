import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faTrophy, faPenNib, faCode, faFaceSmileBeam, faMagnifyingGlass, faGlobe } from '@fortawesome/free-solid-svg-icons';

import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('gravity.cv');
  protected readonly icons = {
    faCoffee, faTrophy, faPenNib, faCode, faFaceSmileBeam, faMagnifyingGlass, faGlobe
  };
}
