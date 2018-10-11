import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-header/about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
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
