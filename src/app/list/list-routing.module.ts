import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListManageComponent } from './list-manage/list-manage.component';
import { ListArticleCardComponent } from './list-article-card/list-article-card.component';

const routes: Routes = [
  {
    path: '',
    component: ListManageComponent,
  },
  {
    path: 'article/:id',
    component: ListArticleCardComponent,
  },
  {
    path: '**',
    component: ListManageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
