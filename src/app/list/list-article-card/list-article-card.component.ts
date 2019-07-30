import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../shared';

class SpecArticle {
  _id: number;
  title: string;
  content: string;
  createTime: number;
}

@Component({
  selector: 'blog-fe-list-article-card',
  templateUrl: './list-article-card.component.html',
  styleUrls: ['./list-article-card.component.sass']
})
export class ListArticleCardComponent implements OnInit {
  specArticleInfo = new SpecArticle();

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService,
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      console.log(params.id);
      this.fetchSpecArticle(params.id);
    });
  }

  fetchSpecArticle(articleId: number) {
    this.articleService.fetchSingle(articleId)
    .subscribe(articleInfo => {
      console.log(articleInfo);
      this.specArticleInfo = articleInfo.article;
    });
  }

}
