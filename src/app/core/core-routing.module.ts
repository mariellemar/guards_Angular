import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/core/pages/dashboard/dashboard.component';
import { LeadsComponent } from 'src/app/core/pages/leads/leads.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },

  {
    path: 'leads',
    component: LeadsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }