import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontawesomeIcons } from './fontawesome-icons';


@NgModule({
  declarations: [],
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class FontawesomeModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...fontawesomeIcons);
  }
}
