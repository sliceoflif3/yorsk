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
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
