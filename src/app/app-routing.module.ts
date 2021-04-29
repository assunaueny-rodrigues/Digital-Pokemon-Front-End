import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PokemonDetailsComponent } from './views/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detalhes-pokemon', component: PokemonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
