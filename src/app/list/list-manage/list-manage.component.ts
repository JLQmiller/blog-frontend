import { Component, OnInit, HostBinding } from '@angular/core';

import { ArticlesService } from '../../shared';

class ArticleData {
  _id: string;
  title: string;
  abstract: string;
  createTime: number;
}

@Component({
  selector: 'blog-fe-list-manage',
  templateUrl: './list-manage.component.html',
  styleUrls: ['./list-manage.component.sass']
})
export class ListManageComponent implements OnInit {
  @HostBinding('class') readonly layoutClass = 'blog-list-manage blog-layout';

  articleData: ArticleData[];
  pageNumber = 1;
  pageSize = 10;
  pageTotal = 0;

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
      console.log(articleData);
      this.articleData = articleData.body;
    });
  }

}
