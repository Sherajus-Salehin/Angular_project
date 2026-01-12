import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Nav } from "./nav/nav";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portfolio');
}
