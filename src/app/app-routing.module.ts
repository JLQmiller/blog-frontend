import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule),
      },
      {
        path: 'log',
        loadChildren: () => import('./log/log.module').then(m => m.LogModule),
      },
      {
        path: '',
        redirectTo: '/list/manage',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
