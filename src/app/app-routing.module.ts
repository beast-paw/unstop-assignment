import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './features/dashboard/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: UserDashboardComponent },
  {
    path: 'user-form',
    outlet: 'modal',
    loadChildren: () => import('./features/user-form/user-form/user-form.module').then(m => m.UserFormModule)
  },
  { 
    path: 'filter-form', 
    outlet: 'modal',
    loadChildren: () => import('./features/filter/user-filter/user-filter.module').then(m => m.UserFilterModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}