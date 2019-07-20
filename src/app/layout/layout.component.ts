import {
  Component,
  HostBinding,
  HostListener,
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'blog-fe-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
  animations: [
    // trigger('changeColor', [
    //   state('open', style({
    //     backgroundColor: 'red',
    //   })),
    //   state('closed', style({
    //     backgroundColor: 'black',
    //   })),
    //   transition('open <=> closed', [
    //     animate('2s ease-in'),
    //   ]),
    //   transition('open => show', [
    //     animate('4s', style({backgroundColor: 'green'})),
    //   ]),
    // ]),
    // trigger('showMenu', [
    //   state('hide', style({

    //   })),
    //   state('show', style({

    //   })),
    //   transition('hide <=> show', [
    //     animate('.8s ease-in'),
    //   ]),
    // ]),
    trigger('rightOut', [
      state('open', style({
        left: '300px',
      })),
      state('hide', style({
        left: '0',
      })),
      transition('open => hide', [
        animate('2s cubic-bezier(.215,.61,.355,1)'),
      ]),
      transition('* => open', [
        animate('2s cubic-bezier(.215,.61,.355,1)'),
      ])
    ]),
  ],
})
export class LayoutComponent {
  @HostBinding('class.blog-layout') readonly hostClass = true;

  isOpen = false;

  isMenu = false;

  githubLink = 'https://github.com/';
  zhiHuLink = 'https://www.zhihu.com/people/gao-jian-26-60/collections';

  onResize(event) {
    console.log(event);
    const target = event.target;
    console.log(target);
    // this.width =
  }

  constructor() { }


  collapse() {
    // this.
    console.log('1');
    this.isOpen = !this.isOpen;
    this.isMenu = !this.isMenu;
    console.log(this.isOpen);
  }

}
