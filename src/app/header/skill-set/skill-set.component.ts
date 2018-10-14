import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../_animations/index';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  value: number;
}

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class SkillSetComponent implements OnInit {
  matHeader = 'My Skills';
  red = 'red';
  custColor = 'red';

  tiles: Tile[] = [
    {text: 'Angular', cols: 2, rows: 2, color: '#4c4069', value: 80},
    {text: 'Javascript', cols: 2, rows: 2, color: '#4c4069', value: 70},
    {text: 'Spring Boot', cols: 2, rows: 2, color: '#4c4069', value: 60},
    {text: 'Java', cols: 2, rows: 2, color: '#4c4069', value: 90},
    {text: 'Html5', cols: 2, rows: 2, color: '#4c4069', value: 90},
    {text: 'CSS3', cols: 2, rows: 2, color: '#4c4069', value: 80}
  ];

  constructor() { }

  ngOnInit() {
  }

}
