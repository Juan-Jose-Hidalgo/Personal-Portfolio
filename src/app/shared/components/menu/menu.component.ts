import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKeyDown(event: KeyboardEvent) {
    this.menuToggle();
  }
  menuIcon = faBars;
  menuIconTransition = faBars;
  active = false;
  grayScale = false;

  //Classes
  menu = 'menu menu--active';
  bars = faTimes;
  cross = faBars;
  banner = 'menu__banner-img';
  svgClass = 'rrss__svg rrss__svg--blue';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Method that shows or hides the main menu.
   */
  menuToggle() {
    this.active = !this.active;
    this.menu = this.active ? 'menu' : 'menu menu--active';
  }

  /**
   * Method that adds or removes the color of the image from the main menu.
   */
  colorToogle() {
    this.grayScale = !this.grayScale;
    this.banner = (this.grayScale) ? 'menu__banner-img menu__banner-img--gray' : 'menu__banner-img';
  }
}
