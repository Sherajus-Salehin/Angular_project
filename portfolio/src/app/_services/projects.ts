import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root',
})
export class Projects {
  Project: Project[] = [{
      id: 0,
      name: 'Sample 1',
      summary: 'summary 1',
      description: 'description 1',
      technologies: [Tag.ANGULAR, Tag.TYPESCRIPT],
      pictures: ['portfolio\public\profile.png'],
      link: 'https://github.com/Sherajus-Salehin/Angular_project.git',
    }, {
      id: 1,
      name: 'Sample 2',
      summary: 'summary 2',
      description: 'description 2',
      technologies: [Tag.HTML, Tag.JAVASCRIPT],
      pictures: []
    },{
      id: 2,
      name: 'Sample 3',
      summary: 'summary 3',
      description: 'description 3',
      technologies: [Tag.PYTHON, Tag.JAVA],
      pictures: []
    },{
      id: 3,
      name: 'Sample 3',
      summary: 'summary 3',
      description: 'description 3',
      technologies: [Tag.PYTHON, Tag.JAVA],
      pictures: []
    },{
      id: 4,
      name: 'Sample 3',
      summary: 'summary 3',
      description: 'description 3',
      technologies: [Tag.PYTHON, Tag.JAVA],
      pictures: []
    },{
      id: 5,
      name: 'Sample 3',
      summary: 'summary 3',
      description: 'description 3',
      technologies: [Tag.PYTHON, Tag.JAVA],
      pictures: []
    },{
      id: 6,
      name: 'Sample 3',
      summary: 'summary 3',
      description: 'description 3',
      technologies: [Tag.PYTHON, Tag.JAVA],
      pictures: []
    }
  ];
  constructor() { }

  getProjects(){
    return this.Project;
  }
  getProjectById(id:number){
    let returningProject= this.Project.find(proj=>proj.id===id);
    if(returningProject === undefined){
      throw new Error("Project not found")  ;
    }
    return returningProject;  
  }
}
