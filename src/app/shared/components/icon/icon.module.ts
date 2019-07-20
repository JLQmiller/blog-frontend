import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon.component';
import { IconDirective } from './icon.directive';

export * from './icon.component';
export * from './icon.directive';

@NgModule({
  declarations: [
    IconComponent,
    IconDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconComponent,
    IconDirective,
  ],
})
export class IconModule { }
