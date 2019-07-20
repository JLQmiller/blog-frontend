import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'blog-fe-list-manage',
  templateUrl: './list-manage.component.html',
  styleUrls: ['./list-manage.component.sass']
})
export class ListManageComponent implements OnInit {
  @HostBinding('class') readonly layoutClass = 'blog-list-manage blog-layout';

  constructor() { }

  ngOnInit() {
  }

}
