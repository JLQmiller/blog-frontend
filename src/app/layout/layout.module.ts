import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { BuiModule } from '../shared';
import { LayoutMenuComponent } from './layout-menu/layout-menu.component';
import { LayoutAboutComponent } from './layout-about/layout-about.component';

@NgModule({
  declarations: [LayoutComponent, LayoutMenuComponent, LayoutAboutComponent],
  imports: [
    CommonModule,
    RouterModule,
    BuiModule,
  ]
})
export class LayoutModule { }
