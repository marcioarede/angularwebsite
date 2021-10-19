import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//localhost:4200/clientes
const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
  },

  {
    path:'',
    redirectTo: '/clientes',
    pathMatch:'full'
  },
  {
  path:'contato',
  component: ContactComponent

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
