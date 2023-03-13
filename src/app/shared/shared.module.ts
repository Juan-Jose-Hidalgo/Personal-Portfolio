import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { RouterModule } from '@angular/router';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    SocialLinksComponent,
    SnackBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    NgxPageScrollCoreModule,
    SocialLinksComponent
  ]
})
export class SharedModule { }
