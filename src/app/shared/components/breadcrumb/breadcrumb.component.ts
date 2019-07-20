import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bui-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
  @HostBinding('class.bui-breadcrumb') hostClass = true;

  constructor() { }

}
