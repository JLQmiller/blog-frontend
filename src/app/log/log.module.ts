import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRoutingModule } from './log-routing.module';
import { LogComponent } from './log.component';

@NgModule({
  declarations: [LogComponent],
  imports: [
    CommonModule,
    LogRoutingModule
  ]
})
export class LogModule { }
