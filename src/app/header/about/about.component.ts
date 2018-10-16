import { Component } from '@angular/core';

import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { fadeInAnimation } from '../../_animations/index';


@Component({
  selector: 'app-header/about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AboutComponent {
  /** Based on the screen size, switch from standard to one column per row */
  matHeader = 'Profile Summary';
  mailText:string = "";

  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit(){
    this.mailText = "mailto:niteshsharma663@gmail.com";
  }

}
