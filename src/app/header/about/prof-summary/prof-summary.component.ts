import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-summary',
  templateUrl: './prof-summary.component.html',
  styleUrls: ['./prof-summary.component.css']
})
export class ProfSummaryComponent implements OnInit {
  
  constructor() { }
  dotActive: boolean = false;
  expandEnabled: boolean = true;
  myindex: number;
  ngOnInit() {
  }

  entries = [
	{
      header: 'Total Experience',
      content: 'Continuing with Software AG From April 5th 2017 having 1.6+ yr of experience till now.',
      entrydot: '<p>&nbsp;&nbsp;&nbsp;1.6+<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yr</p>'
    },
    {
      header: 'Front End Developer',
      content: 'Creative Front-end Developer with 1.5+ years of experience leveraging Angular 2/4/5/6 and JavaScript to build responsive websites with dynamic components and interactive features that drive business growth and improve UX. Extensively Worked on HTML5, CSS3, JQuery, Bootstrap, Angular Material in development of webmethods UI.',
      entrydot: '<p>&nbsp;&nbsp;&nbsp;1.5+<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yr</p>'
    },
    {
      header: 'Back End Developer',
      content: 'Experiencing 1.0+ yr in designing, developing, and managing complex rest full web services by using Spring Boot, Core Java and MySQL.Building projects with maven.Very good understanding of mongoDB and it\'s usability.',
      entrydot: '<p>&nbsp;&nbsp;&nbsp;1.0+<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yr</p>'
    },
    {
      header: 'WebMethods Developer',
      content: 'Having 1.3+ yr of experience in this product and creating multiple services for integration flow, testing, debugging, unit testing, ui development.',
      entrydot: '<p>&nbsp;&nbsp;&nbsp;1.3+<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yr'
    },
    {
      header: 'Agile Test Automation',
      content: 'With 0.3+ yr of experience in agile automation with jenkins,junit,cnl.Well experience in writing junit tests for webMethods product, creating jenkins jobs and promoting builds.Very good knowledge in product build suitint promotions.',
      entrydot: '<p>&nbsp;&nbsp;&nbsp;0.3+<br>&nbsp;&nbsp;&nbsp;&nbsp;Yr'
    },
  ]

  clickEntryDot(index){
    this.myindex = index;
  }

  onExpandEntry(expanded,index){

  }

}
