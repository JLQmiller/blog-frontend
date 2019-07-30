import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListManageComponent } from './list-manage/list-manage.component';
import { ListArticleCardComponent } from './list-article-card/list-article-card.component';
import { ListManageCardComponent } from './list-manage/list-manage-card/list-manage-card.component';
import { MarkdownModule } from 'ngx-markdown';
import { BuiModule } from '../shared';
import { ListMenuComponent } from './list-menu/list-menu.component';

// TODO
@NgModule({
  declarations: [
    ListManageComponent,
    ListArticleCardComponent,
    ListManageCardComponent,
    ListMenuComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    BuiModule,
    MarkdownModule.forChild(),
  ]
})
export class ListModule { }
