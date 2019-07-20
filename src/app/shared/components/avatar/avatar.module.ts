import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';

import { AvatarComponent } from './avatar.component';

export * from './avatar.component';

@NgModule({
  declarations: [
    AvatarComponent,
  ],
  imports: [
    CommonModule,
    IconModule,
  ],
  exports: [
    AvatarComponent,
  ],
})
export class AvatarModule { }
