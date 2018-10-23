import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-header/expr',
  templateUrl: './expr.component.html',
  styleUrls: ['./expr.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ExprComponent {
  /** Based on the screen size, switch from standard to one column per row */
  /** Based on the screen size, switch from standard to one column per row */
 
  matHeader = 'Experience';
  mailText:string = "";

  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit(){
    this.mailText = "mailto:niteshsharma663@gmail.com";
  }

}
