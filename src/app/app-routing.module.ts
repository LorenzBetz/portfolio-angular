import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvDetailsComponent } from './cv/cv-details/cv-details.component';
import { CvComponent } from './cv/cv.component';
const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'project/:id', component: CvDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
