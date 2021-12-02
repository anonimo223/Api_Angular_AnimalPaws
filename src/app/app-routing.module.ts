import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnunciosComponent } from './anuncios/anuncios.component';

const routes: Routes = [
  {path: 'anuncios', component:AnunciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
