import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CvDetailsComponent } from './cv/cv-details/cv-details.component';
import { CvComponent } from './cv/cv.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [

  { path: '', component: LandingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cv', component: CvComponent },
  { path: 'project/:id', component: CvDetailsComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'blog/:id', component: BlogPostComponent},
  { path: 'blog/new', component: BlogPostComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent }
];

const extraOptions: ExtraOptions = { };

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
