import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListManageComponent } from './list-manage/list-manage.component';

const routes: Routes = [{
  path: 'manage',
  component: ListManageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
