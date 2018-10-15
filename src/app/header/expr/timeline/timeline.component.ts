import { Component, OnInit } from '@angular/core';

export interface Expr {
  alignItem: string;
  desig: string;
  yrs: string;
  prof_desc: string;
}


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  experiences: Expr[] = [
    {alignItem: 'left', desig: 'Angular Developer', yrs: 'Aug 2017 - Oct 2018', prof_desc: 'Developing API for WebMethods Integration Platform so that users can dragAndDrop different services.It will keep tracking of tree like structure folder within packages.Used Angular 2-6, Html5, CSS3, Javascript.'},
    {alignItem: 'right', desig: 'Spring Boot Developer', yrs: 'Oct 2017 - Oct 2018', prof_desc: 'Designing, developing, and managing complex rest full web services using Spring Boot, Core Java and MySQL.Worked on WebMethods Integration Platform to provide access to rest full web services.'},
    {alignItem: 'left', desig: 'Testing', yrs: 'Apr 2017 - Jul 2018', prof_desc: 'Creating jenkins jobs for product CNl, written test set for WebMethods Service Development in Junits. Testing products in environment like Linux(susse,redhat)/Mac/Windows. Correcting existing QFT test suite. Excellence in worked with agile methodology.'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
