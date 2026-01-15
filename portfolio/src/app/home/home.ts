import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projects } from '../projects/projects';
import { Project } from '../_models/project';
import { Projects as projectService } from '../_services/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {
  featuredProjects = {} as Project;
  constructor(private titleService: Title, private projectService: projectService) {
  this.titleService.setTitle("Sherajus Salehin Portfolio");
}
  ngOnInit(): void {
    this.featuredProjects = this.projectService.getProjectById(0);
  }
}