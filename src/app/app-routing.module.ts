import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProgrammingLanguageComponent } from './pages/programming-language/programming-language.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'programming-language', component: ProgrammingLanguageComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
