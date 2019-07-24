import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'blog-fe-layout-about',
  templateUrl: './layout-about.component.html',
  styleUrls: ['./layout-about.component.sass']
})
export class LayoutAboutComponent implements OnInit {
  @HostBinding('class.blog-fe-layout-about') hostClass = true;

  constructor() { }

  ngOnInit() {
  }

}
