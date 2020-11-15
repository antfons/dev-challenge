import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { project }  from '../model/project';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


@Component({
  selector: 'challenge-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor() { }

  ngOnInit(): void {
  }

  project: project = new project();

  @Output() projectInserted: EventEmitter<project> = new EventEmitter();

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.project.dependencies.push(value);
    }
    if (input) {
      input.value = '';
    }
  }

  remove(skill: string): void{
    const index = this.project.dependencies.indexOf(skill);
    if (index >= 0){
      this.project.dependencies.splice(index, 1);
    }
  }

  register(){
    this.projectInserted.emit(this.project);
    this.project.name = '';
    this.project.dependencies = [];
  }

}
