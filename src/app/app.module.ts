import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './view/customer/customer.component';
import { ItemComponent } from './view/item/item.component';
import { OrdersComponent } from './view/orders/orders.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { MainComponent } from './view/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ItemComponent,
    OrdersComponent,
    DashboardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
