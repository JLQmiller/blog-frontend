import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ArticlesService } from '../../../shared';

@Component({
  selector: 'blog-fe-list-manage-card',
  templateUrl: './list-manage-card.component.html',
  styleUrls: ['./list-manage-card.component.sass']
})
export class ListManageCardComponent implements OnInit {
  @Input() articleInfo = {
    title: '',
    abstract: '暂无简介',
    content: '',
    createTime: 0,
    _id: 0,
  };

  @HostBinding('class.blog-list-manage-card') hostClass = true;

  markDown = `## Markdown __rulez__!
  ---

  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  \`\`\`

  ### Lists
  1. Ordered list
  2. Another bullet point
    - Unordered list
    - Another unordered bullet point

  ### Blockquote
  > Blockquote to the max`;

  constructor( ) { }

  ngOnInit() { }

}
