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
  pageNumber = 1;
  pageSize = 10;
  pageTotal = 1;

  constructor(
    private articleService: ArticlesService,
  ) { }

  ngOnInit() {
    this.articleService.fetchTotalNumber()
    .subscribe(numberInfo => {
      if (numberInfo.success) {
        this.pageTotal = Math.ceil(numberInfo.total / this.pageNumber);
        this.fetchArticles();
      }
    });
  }

  pageIndexChange(e) {
    console.log(e);
    console.log(this.pageNumber);
    this.fetchArticles();
  }

  fetchArticles() {
    this.articleService.fetchArticleListInfo(this.pageNumber, this.pageSize)
    .subscribe(articleData => {
      this.articleData = articleData;
    });
  }

}
