import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { DeleteComponentComponent } from './contacts/delete-component/delete-component.component';
import { EditComponentComponent } from './contacts/edit-component/edit-component.component';
import { SettingLayerComponent } from './setting-layer/setting-layer.component';


const routes: Routes = [{
  path:'contact/add/:contactId',
  component:AddContactComponent
},

{
  path:'contact/delete',
  component:DeleteComponentComponent
},
{
  path:'contact/edit',
  component:EditComponentComponent
},
{
  path:'layer',
  component:SettingLayerComponent
}
  // { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
