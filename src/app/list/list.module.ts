import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListManageComponent } from './list-manage/list-manage.component';
import { ListArticleCardComponent } from './list-article-card/list-article-card.component';
import { ListManageCardComponent } from './list-manage/list-manage-card/list-manage-card.component';
import { MarkdownModule } from 'ngx-markdown';
import { BuiModule } from '../shared';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';

// TODO
@NgModule({
  declarations: [
    ListManageComponent,
    ListArticleCardComponent,
    ListManageCardComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    BuiModule,
    MarkdownModule.forChild(),
    NgZorroAntdModule,
    NzPaginationModule,
  ]
})
export class ListModule { }
