import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutComponent } from './about-page/about/about.component';
import { AboutWebsiteComponent } from './about-page/about-website/about-website.component';
import { FooterComponent } from './footer/footer.component';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { LorePageComponent } from './lore-page/lore-page.component';
import { AppendixPageComponent } from './appendix-page/appendix-page.component';
import { CreditsPageComponent } from './credits-page/credits-page.component';
import { AlbumComponent } from './albums-page/album/album.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AlbumDetailComponent } from './albums-page/album/album-detail/album-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutPageComponent,
    AboutComponent,
    AboutWebsiteComponent,
    FooterComponent,
    AlbumsPageComponent,
    LorePageComponent,
    AppendixPageComponent,
    CreditsPageComponent,
    AlbumComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
