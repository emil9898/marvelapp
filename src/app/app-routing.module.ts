import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {FavoriteComponent} from './componentes/favorite/favorite.component';
import {Routes,RouterModule} from '@angular/router';
import { ComicsComponent } from './componentes/comics/comics.component';
const routes: Routes=[
  {path: 'favorite', component: FavoriteComponent},
  {path: 'comics', component: ComicsComponent},
  {path:'', redirectTo: '/comics', pathMatch: 'full'},
  {path:'**', redirectTo: '/comics', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

