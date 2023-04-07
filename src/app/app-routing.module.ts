import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './page/clientes/clientes.component';
import { ClienteFormularioComponent } from './page/clienteformulario/clienteformulario.component';

import { HomeComponent } from './page/home/home.component';
import { SobreComponent } from './page/sobre/sobre.component';

import { ClienteupdateComponent } from './page/clienteupdate/clienteupdate.component';
import { LoginComponent } from './page/login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clienteformulario', component: ClienteFormularioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'update/:id', component: ClienteupdateComponent},
  { path: '', component: LoginComponent  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
