import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListManageComponent } from './list-manage/list-manage.component';
import { ListDesignComponent } from './list-design/list-design.component';
import { ListComponentsComponent } from './list-components/list-components.component';

@NgModule({
  declarations: [ListManageComponent, ListDesignComponent, ListComponentsComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
