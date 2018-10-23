import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.custom-module';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AboutComponent } from './header/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppBootstrapModule } from './bootstrap.custom-module';
import { ExprComponent } from './header/expr/expr.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ProfSummaryComponent } from './header/about/prof-summary/prof-summary.component';
import { SkillSetComponent } from './header/skill-set/skill-set.component';
import { TimelineComponent } from './header/expr/timeline/timeline.component';
import { EducatComponent } from './header/educat/educat.component';
import { InterestComponent } from './header/interest/interest.component';
import { ContactComponent } from './header/contact/contact.component';
import { ContactDetComponent } from './header/contact/contact-det/contact-det.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExprComponent,
    ProfSummaryComponent,
    SkillSetComponent,
    TimelineComponent,
    EducatComponent,
    InterestComponent,
    ContactComponent,
    ContactDetComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    AppRoutingModule,
    AppBootstrapModule,
    MglTimelineModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
