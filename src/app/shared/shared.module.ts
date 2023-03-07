import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    SocialLinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuComponent,
    FooterComponent,
    SocialLinksComponent
  ]
})
export class SharedModule { }
