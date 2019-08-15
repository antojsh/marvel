import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ComicsPageComponent } from './pages/comics-page/comics-page.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { ComicsListComponent } from './components/comics-list/comics-list.component';
import { FavoriteComicsComponent } from './components/favorite-comics/favorite-comics.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    HeaderComponent,
    ComicsPageComponent,
    CharactersListComponent,
    ComicsListComponent,
    FavoriteComicsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
