import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Hero } from "./hero/hero";
import { Introduction } from "./introduction/introduction";
import { Portfolio } from "./portfolio/portfolio";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-landing',
  imports: [Header, Hero, Introduction, Portfolio, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
