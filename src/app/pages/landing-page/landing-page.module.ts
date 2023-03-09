import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { SvgAnimatedComponent } from './components/svg-animated/svg-animated.component';


@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent,
    ContactComponent,
    LandingComponent,
    ProjectsComponent,
    TechnologiesComponent,
    SvgAnimatedComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    NgxPageScrollCoreModule
  ]
})
export class LandingPageModule { }
