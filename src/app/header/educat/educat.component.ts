import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educat',
  templateUrl: './educat.component.html',
  styleUrls: ['./educat.component.css']
})
export class EducatComponent implements OnInit {
  matHeader = 'Academic Profile';
  educat = [
    {
      id: '1',
      examName: 'B.Tech <br/>(Computer Sceinece And Engineering)',
      board: 'Biju Patnaik University Of Technology',
      instName: 'Govt. College Of Engineering, Bhawanipatna',
      yop: 2016,
      percentage: 74.98
    },
    {
      id: '2',
      examName: 'Intermediate (12th)',
      board: 'Council Of Higher Secondary Education',
      instName: 'Christ College',
      yop: 2011,
      percentage: 60.16
    },
    {
      id: '3',
      examName: 'Metriculation',
      board: 'Board Of Secondary Education',
      instName: 'Sivananda Centenary Boy\'s High School',
      yop: 2009,
      percentage: 75.16
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
