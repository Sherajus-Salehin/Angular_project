import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-journal',
  imports: [],
  templateUrl: './journal.html',
  styleUrl: './journal.css',
})
export class Journal {
constructor(private titleService: Title) {
  this.titleService.setTitle("Journal || Sherajus Salehin");
}
}
