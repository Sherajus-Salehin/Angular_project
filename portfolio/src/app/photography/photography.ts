import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-photography',
  imports: [],
  templateUrl: './photography.html',
  styleUrl: './photography.css',
})
export class Photography {
constructor(private titleService: Title) {
  this.titleService.setTitle("Photography ||Sherajus Salehin");
}
}
