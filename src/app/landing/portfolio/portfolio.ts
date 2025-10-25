import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {

  weddingImages = [
    'assets/img/portfolio/wedding1.jpg',
    'assets/img/portfolio/wedding2.jpg',
    'assets/img/portfolio/wedding3.jpg',
    'assets/img/portfolio/wedding4.jpg'
  ];

  photoShootImages = [
    'assets/img/portfolio/photo1.jpg',
    'assets/img/portfolio/photo2.jpg',
    'assets/img/portfolio/photo3.jpg',
    'assets/img/portfolio/photo4.jpg'
  ];

  eventImages = [
    'assets/img/portfolio/event1.jpg',
    'assets/img/portfolio/event2.jpg',
    'assets/img/portfolio/event3.jpg'
  ];

}
