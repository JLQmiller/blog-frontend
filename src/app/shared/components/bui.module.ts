import { NgModule, ModuleWithProviders } from '@angular/core';

import { AvatarModule  } from './avatar/avatar.module'
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { IconModule } from './icon/icon.module';

const BUI_MODULES = [
  AvatarModule,
  BreadcrumbModule,
  IconModule,
];

@NgModule({
  imports: BUI_MODULES,
  exports: BUI_MODULES,
})
export class BuiModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: BuiModule,
    };
  }

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: BuiModule,
    };
  }
}
