import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'bui-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
})
export class BreadcrumbItemComponent implements OnInit {
  @HostBinding('class.bui-breadcrumb-item') hostClass = true;

  constructor() { }

  ngOnInit() {
  }

}
