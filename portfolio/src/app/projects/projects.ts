import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCard } from "../project-card/project-card";
import { Project } from '../_models/project';
import { CommonModule } from '@angular/common';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  Project: Project={
    id: 0,
    name: 'Sample 1',
    summary: 'summary 1',
    description: 'description 1',
    technologies: [Tag.ANGULAR, Tag.TYPESCRIPT],
    pictures: [],
  }
  constructor(private titleService: Title) {
  this.titleService.setTitle("Projects || Sherajus Salehin");
}
}
