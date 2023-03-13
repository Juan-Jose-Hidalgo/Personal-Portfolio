import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    title: 'inicio',
    loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
