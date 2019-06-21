import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerComponent} from './view/customer/customer.component';
import {ItemComponent} from './view/item/item.component';
import {OrdersComponent} from './view/orders/orders.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {MainComponent} from './view/main/main.component';

const routes: Routes = [

  {
    path: 'main',
    component: MainComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'cust', component: CustomerComponent},
      {path: 'item', component: ItemComponent},
      {path: 'order', component: OrdersComponent},

    ]
  },
  {path: 'main', component: MainComponent},
  {path: '', pathMatch: 'full', redirectTo: '/main/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
