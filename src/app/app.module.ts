import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvDetailsComponent } from './cv/cv-details/cv-details.component';
import { CvOverviewComponent } from './cv/cv-overview/cv-overview.component';
import { CvComponent } from './cv/cv.component';
import { CvPersonalComponent } from './cv/cv-personal/cv-personal.component';
import { ProjectService } from './domain/services/project.service';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PageFooterComponent } from './shared/page-footer/page-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { PositionService } from './domain/services/position.service';
import { PersonalService } from './domain/services/personal.service';
import { SocialsService } from './domain/services/socials.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogOverviewComponent } from './blog/blog-overview/blog-overview.component';
import { GraphQLModule } from './graphql.module';
import { PostService } from './domain/services/post.service';
import { BlogPostEditComponent } from './blog/blog-post/blog-post-edit/blog-post-edit.component';
import { BlogPostViewComponent } from './blog/blog-post/blog-post-view/blog-post-view.component';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown';
import { BlogOverviewHeaderComponent } from './blog/blog-overview/blog-overview-header/blog-overview-header.component';
import { AuthConfigModule } from './auth-config.module';
import { AuthInterceptor } from './domain/interceptors/AuthInterceptor';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CvDetailsComponent,
    CvOverviewComponent,
    CvComponent,
    CvPersonalComponent,
    NavigationComponent,
    PageFooterComponent,
    LandingComponent,
    ContactComponent,
    PageNotFoundComponent,
    BlogComponent,
    BlogPostComponent,
    BlogOverviewComponent,
    BlogPostEditComponent,
    BlogPostViewComponent,
    BlogOverviewHeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    GraphQLModule,
    MarkdownModule.forRoot({
      // loader: HttpClient, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),

    FormsModule,
    ReactiveFormsModule,
    AngularMarkdownEditorModule.forRoot({
      iconlibrary: 'fa'
    }),
    AuthConfigModule
  ],
  providers: [
    ProjectService,
    PositionService,
    PersonalService,
    SocialsService,
    PostService,
    MarkdownService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
