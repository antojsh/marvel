import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ComicsPageComponent } from './pages/comics-page/comics-page.component';
import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: 'character/:idCharacter/comics',
    component: ComicsPageComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
