import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ComicsPageComponent } from './pages/comics-page/comics-page.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: 'comics/:idCharacter',
    component: ComicsPageComponent
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
