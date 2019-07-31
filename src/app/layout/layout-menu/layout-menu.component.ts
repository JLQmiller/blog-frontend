import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../../shared';

class Article {
  title: string;
  _id: number;
  createTime: number;
}

@Component({
  selector: 'blog-fe-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.sass']
})
export class LayoutMenuComponent implements OnInit {

  articleMenuList: Article[];

  @Output() articleChanged = new EventEmitter();

  constructor(
    private router: Router,
    private articleService: ArticlesService,
  ) { }

  ngOnInit() {
    this.articleService.fetchArticleListMenu()
    .subscribe(articleMenuList => {
      this.articleMenuList = articleMenuList.body;
    });
   }

  enterArticle(id) {
    this.router.navigate(['/article', id]);
    this.articleChanged.emit(true);
  }

}
