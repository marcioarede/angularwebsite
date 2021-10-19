import { EditClientComponent } from './edit-client/edit-client.component';
import { NewClientComponent } from './new-client/new-client.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//localhost:4200/clientes
const routes: Routes = [
  {
    path: '',
    component: ListClientsComponent
  },
  {
  path:'novo',
  component: NewClientComponent
  },
  {
    path:'alterar/:codCliente',
    component: EditClientComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
