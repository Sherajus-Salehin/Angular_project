import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCard } from "../project-card/project-card";
import { Project } from '../_models/project';
import { CommonModule } from '@angular/common';
import { Tag } from '../_models/Tag';
import { Projects as ProjectService } from '../_services/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects  implements OnInit {
  project = {} as Project[];
  constructor(private titleService: Title, private projectService: ProjectService) {
    this.titleService.setTitle("Projects || Sherajus Salehin");
  }
  ngOnInit(): void {
    this.project = this.projectService.Project;
  }
}
