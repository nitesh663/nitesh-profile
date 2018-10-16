import { Component, OnInit } from '@angular/core';

import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  matHeader = 'Interests & Hobbies';

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
