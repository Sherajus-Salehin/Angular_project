import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  constructor(private titleService: Title) {
  this.titleService.setTitle("Projects || Sherajus Salehin");
}
}
