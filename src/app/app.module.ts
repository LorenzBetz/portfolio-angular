import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvDetailsComponent } from './cv/cv-details/cv-details.component';
import { CvOverviewComponent } from './cv/cv-overview/cv-overview.component';
import { CvComponent } from './cv/cv.component';
import { CvPersonalComponent } from './cv/cv-personal/cv-personal.component';
import { ProjectService } from './domain/services/project.service';

import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PageFooterComponent } from './shared/page-footer/page-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { PositionService } from './domain/services/position.service';
import { PersonalService } from './domain/services/personal.service';
import { SocialsService } from './domain/services/socials.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ProjectService, PositionService, PersonalService, SocialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
