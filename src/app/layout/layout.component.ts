import {
  Component,
  OnInit,
  HostBinding,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

import { ArticlesService } from '../shared';

class Article {
  title: string;
  _id: number;
  createTime: number;
}

@Component({
  selector: 'blog-fe-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
  animations: [
    trigger('leftMenuIn', [
      state('menuShow', style({
        left: '300px',
      })),
      state('menuHide', style({
        left: '0',
      })),
      transition('menuShow <=> menuHide', [
        animate('2s cubic-bezier(.215, .61, .355, 1)')
      ])
    ]),

    trigger('rightContentOut', [
      state('contentHide', style({
        left: '300px',
      })),
      state('contentShow', style({
        left: '0',
      })),
      transition('contentHide <=> contentShow', [
        animate('2s cubic-bezier(.215, .61, .355, 1)'),
      ]),
    ]),
  ],
})
export class LayoutComponent implements OnInit {
  @HostBinding('class.blog-layout') readonly hostClass = true;

  @ViewChild('menuBtn', {static: false}) menuBtn: ElementRef;

  @ViewChild('menu', {static: false}) menu: ElementRef;

  leftMenu = true;
  isLayoutMenuOpen = false;
  githubLink = 'https://github.com/JLQmiller';
  zhiHuLink = 'https://www.zhihu.com/people/gao-jian-26-60/collections';

  articleMenuList: Article[];

  @HostListener('document:click', ['$event'])
  onclick(btn: Event) {
    if (this.menu.nativeElement.contains(btn.target) || this.menuBtn.nativeElement.contains(btn.target)) {
      this.layoutMenuOpen();
    } else {
      this.layoutMenuClose();
    }
  }

  constructor(
    private articleService: ArticlesService,
  ) { }

  ngOnInit() {
    this.articleService.fetchArticleListInfo()
    .subscribe(allArticles => {
      this.articleMenuList = allArticles.body;
    });
  }

  showLeftMenu(): void {
    this.leftMenu = true;
  }

  showLeftAbout(): void {
    this.leftMenu = false;
  }

  layoutMenuOpen(): void {
    this.isLayoutMenuOpen = true;
  }

  layoutMenuClose(): void {
    this.isLayoutMenuOpen = false;
  }

  articleChanged() {
    setTimeout(() => {
      this.layoutMenuClose();
    });
  }

}
