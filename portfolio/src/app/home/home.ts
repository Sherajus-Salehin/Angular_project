import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  constructor(private titleService: Title) {
  this.titleService.setTitle("Sherajus Salehin Portfolio");
}
}