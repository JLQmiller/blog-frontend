import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconModule } from '../icon/icon.module';

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';

export * from './breadcrumb-item/breadcrumb-item.component';
export * from './breadcrumb.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    BreadcrumbItemComponent,
  ],
  imports: [
    CommonModule,
    IconModule,
    RouterModule,
  ],
  exports: [
    BreadcrumbComponent,
    BreadcrumbItemComponent,
  ],
})
export class BreadcrumbModule { }
