import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { SvgAnimatedComponent } from './components/svg-animated/svg-animated.component';
import { ProjectComponent } from './components/project/project.component';
import { FontawesomeModule } from 'src/app/shared/fontawesome/fontawesome.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent,
    ContactComponent,
    LandingComponent,
    ProjectsComponent,
    TechnologiesComponent,
    SvgAnimatedComponent,
    ProjectComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FontawesomeModule,
    HttpClientModule,
    LandingPageRoutingModule,
    MaterialModule,
    NgxPageScrollCoreModule,
    ReactiveFormsModule
  ]
})
export class LandingPageModule { }
