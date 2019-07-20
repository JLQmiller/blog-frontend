import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuiModule } from './components/bui.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BuiModule,
  ],
  exports: [
    BuiModule,
  ],
})
export class SharedModule { }
