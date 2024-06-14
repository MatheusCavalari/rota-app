import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotaListComponent } from './rotas/rota-list/rota-list.component';
import { RotaFormComponent } from './rotas/rota-form/rota-form.component';
import { MelhorRotaComponent } from './rotas/melhor-rota/melhor-rota.component';



const routes: Routes = [
  { path: 'rotas', component: RotaListComponent },
  { path: 'rotas/nova', component: RotaFormComponent },
  { path: 'rotas/editar/:id', component: RotaFormComponent },
  { path: 'melhor-rota', component: MelhorRotaComponent },
  { path: '', redirectTo: '/rotas', pathMatch: 'full' }
];
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
