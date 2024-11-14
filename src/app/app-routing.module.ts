import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { MobaileComponent } from './shared/components/mobaile/mobaile.component';
import { EcomdetaolComponent } from './shared/components/ecomdetaol/ecomdetaol.component';

const routes: Routes = [
  {
    path: "", component:DashboardComponent
  },
  {
    path: "Buy", component:DashboardComponent
  },
  {
    path : "sell",component:CardComponent
  },
  {
    path : "phone",component:MobaileComponent
  },{
    path : "id",component:EcomdetaolComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
