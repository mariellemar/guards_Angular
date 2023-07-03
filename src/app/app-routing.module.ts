import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COmponentes
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';

//Guards
import { CanActivateGuard } from './shared/guard/can-activate.guard';
import { CanDeactivateGuard } from './shared/guard/can-deactivate.guard';
import { CanLoadGuard } from './shared/guard/can-load.guard';
import { CanActivateChildGuard } from './shared/guard/can-activate-child.guard';

const routes: Routes = [
  {path: '',
  component: HomeComponent},

  {path: 'account',
  component: AccountComponent,
  canActivate: [CanActivateGuard],
  canDeactivate: [CanDeactivateGuard],},

  {path: 'core',
  loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  canLoad: [CanLoadGuard],
  canActivateChild: [CanActivateChildGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
