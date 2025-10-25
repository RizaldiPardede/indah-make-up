import { Component, signal } from '@angular/core';

import { Landing } from './landing/landing';  
@Component({
  selector: 'app-root',
  imports: [ Landing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('indah-make-up');
}
