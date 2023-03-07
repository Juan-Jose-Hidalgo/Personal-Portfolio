import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  active = false;
  grayScale = false;

  //Classes
  menu = 'menu menu--active';
  barOne = 'menuicon__bar';
  barTwo = 'menuicon__bar';
  barThree = 'menuicon__bar';
  banner = 'menu__banner-img';
  svgClass = 'rrss__svg rrss__svg--blue';

  /**
   * Method that shows or hides the main menu.
   */
  menuToggle() {
    this.active = !this.active;

    if (this.active) {
      this.menu = 'menu';
      this.barOne = 'menuicon__bar menuicon__bar--one';
      this.barTwo = 'menuicon__bar menuicon__bar--two';
      this.barThree = 'menuicon__bar menuicon__bar--three';
    } else {
      this.menu = 'menu menu--active';
      this.barOne = 'menuicon__bar';
      this.barTwo = 'menuicon__bar';
      this.barThree = 'menuicon__bar';
    }
  }

  /**
   * Method that adds or removes the color of the image from the main menu.
   */
  colorToogle() {
    this.grayScale = !this.grayScale;
    this.banner = (this.grayScale) ? 'menu__banner-img menu__banner-img--gray' : 'menu__banner-img';
  }
}
