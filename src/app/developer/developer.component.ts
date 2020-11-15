import { Component, Input, OnInit } from '@angular/core';
import { developer } from '../model/developer';

@Component({
  selector: 'challenge-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() developer: developer;

}
