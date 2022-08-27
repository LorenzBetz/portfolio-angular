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

@NgModule({
  declarations: [
    AppComponent,
    CvDetailsComponent,
    CvOverviewComponent,
    CvComponent,
    CvPersonalComponent,
    NavigationComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
