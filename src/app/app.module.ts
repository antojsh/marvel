import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ComicsPageComponent } from './pages/comics-page/comics-page.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { ComicsListComponent } from './components/comics-list/comics-list.component';
import { FavoriteComicsComponent } from './components/favorite-comics/favorite-comics.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    HeaderComponent,
    ComicsPageComponent,
    CharactersListComponent,
    ComicsListComponent,
    FavoriteComicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
