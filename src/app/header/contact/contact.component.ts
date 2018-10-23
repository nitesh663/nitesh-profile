import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ContactComponent implements OnInit {
  matHeader = 'Contact';

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
