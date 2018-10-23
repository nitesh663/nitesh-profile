import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './header/about/about.component';
import { SkillSetComponent } from './header/skill-set/skill-set.component';
import { ExprComponent } from './header/expr/expr.component';
import { EducatComponent } from './header/educat/educat.component';
import { InterestComponent } from './header/interest/interest.component';
import { ContactComponent } from './header/contact/contact.component';

const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'skill-set', component: SkillSetComponent },
    { path: 'exp', component: ExprComponent },
    { path: 'edu', component: EducatComponent },
    { path: 'intr', component: InterestComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}