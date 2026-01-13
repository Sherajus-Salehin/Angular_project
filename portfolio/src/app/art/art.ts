import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-art',
  imports: [],
  templateUrl: './art.html',
  styleUrl: './art.css',
})
export class Art {
  constructor(private titleService: Title) {
  this.titleService.setTitle("Art || Sherajus Salehin");
}
}
