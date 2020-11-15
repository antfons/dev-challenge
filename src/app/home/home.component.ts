import { Component, Input, OnInit } from '@angular/core';
import { project } from '../model/project';
import { developer } from '../model/developer';

@Component({
  selector: 'challenge-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  index: number = 1;
  showSpinner = false;
  developers: developer[] = [
    { name: 'Dev1', skills: ['python', 'c#', 'angular', 'react']},
    { name: 'Dev2', skills: ['c#', 'angular']},
    { name: 'Dev3', skills: ['node', 'angular']},
    { name: 'Dev4', skills: ['node', 'react']},
    { name: 'Dev5', skills: ['c#', 'angular', 'react']},    
    { name: 'Dev6', skills: ['python', 'angular', 'react']},
    { name: 'Dev7', skills: ['python', 'c#', 'angular', 'react']}, 
    { name: 'Dev8', skills: ['node', 'vue']},    
    { name: 'Dev9', skills: ['c#', 'react']},    
    { name: 'Dev10', skills: ['c#', 'react']}    
  ];
  projectsList: project[] = [];
  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async findDev(projectId: number){
    this.showSpinner = true;
    await this.delay(1000);
    this.showSpinner = false;
    
    let project = this.projectsList.find( proj => proj.id === projectId);
    let qualifiedDevs = [];
    this.developers.forEach(dev =>{
      let devSkills = dev.skills;
      const qualified = project.dependencies.every(skill => devSkills.includes(skill));
      if (qualified){
        qualifiedDevs.push(dev);
      }
    });

    this.projectsList.forEach(proj => {
      if (proj.id == project.id){
        proj.developers = qualifiedDevs;
      }
    });
  }

  deleteProject(projectId: number){
    let projects = this.projectsList.filter((project) => {
      return project.id != projectId;
    });
    this.projectsList = projects;
    
  }

  handleProjectInsertion(project: project){
    this.index++;
    let proj = {
      id: this.index,
      dependencies: [],
      name: project.name,
      developers: []
    }
    Object.assign(proj.dependencies, project.dependencies);

    this.projectsList.push(proj);
  }
}
