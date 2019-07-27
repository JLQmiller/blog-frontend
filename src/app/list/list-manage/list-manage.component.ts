import { Component, OnInit, HostBinding } from '@angular/core';

import { ArticlesService } from '../../shared';

@Component({
  selector: 'blog-fe-list-manage',
  templateUrl: './list-manage.component.html',
  styleUrls: ['./list-manage.component.sass']
})
export class ListManageComponent implements OnInit {
  @HostBinding('class') readonly layoutClass = 'blog-list-manage blog-layout';

  articleData = {};

  constructor(
    private articleService: ArticlesService,
  ) { }

  ngOnInit() {
    this.articleService.fetchArticleListInfo()
    .subscribe(articleData => {
      this.articleData = articleData;
    });

    console.log(this.articleData);
  }

}
