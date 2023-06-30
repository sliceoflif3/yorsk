import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { AppendixPageComponent } from './appendix-page/appendix-page.component';
import { CreditsPageComponent } from './credits-page/credits-page.component';
import { LorePageComponent } from './lore-page/lore-page.component';

const routes: Routes = [
  // { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: 'about', component: AboutPageComponent },
  { path: 'albums', component: AlbumsPageComponent },
  { path: 'lore', component: LorePageComponent },
  { path: 'appendix', component: AppendixPageComponent },
  { path: 'credits', component: CreditsPageComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
