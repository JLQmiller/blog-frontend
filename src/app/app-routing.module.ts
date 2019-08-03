import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'resume',
        loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule),
      },
      {
        path: '',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule),
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
