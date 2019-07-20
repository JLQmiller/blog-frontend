import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'bui-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent {
  @HostBinding('class.bui-avatar') hostClass = true;

  // 文字头像视图获取
  @ViewChild('textEl', {static: false}) textEl: ElementRef;

  // 文字头像内容
  private _text: string;
  @Input()
  set text(value: string) {
    this._text = value;
    this.onChanges();
  }
  get text() {
    return this._text;
  }

  // img头像链接
  private _src: string;
  @Input()
  set src(value: string) {
    this._src = value;
    this.onChanges();
  }
  get src() {
    return this._src;
  }

  // icon头像内容
  private _icon: string;
  @Input()
  set icon(value: string) {
    this._icon = value;
    this.onChanges();
  }
  get icon() {
    return this._icon;
  }

  // 头像尺寸
  @Input()
  set size(size: string) {
    // 获取
    const classList = this.el.nativeElement.classList;
    ['sm', 'md', 'lg', 'max'].forEach((_size) => {
      if (classList.contains(`bui-avatar-${_size}`)) {
        classList.remove(`bui-avatar-${_size}`); // 将预设size删除
      }
    });
    // 替换为输入size
    this.el.nativeElement.classList.add(`bui-avatar-${size}`);
    this.onChanges();
  }

  // 头像模式
  displayMode: 'icon' | 'img' | 'text' = 'img';

  textStyles: {
    transform?: string;
    display?: string;
  };

  constructor(
    private el: ElementRef,
  ) {
    this.el.nativeElement.classList.add('bui-avatar-md');
  }

  onChanges(): void {
    if (this.src) {
      this.displayMode = 'img';
    } else if (this.icon) {
      this.displayMode = 'icon';
    } else {
      this.displayMode = 'text';
    }
    // 异步回调触发变更检查
    setTimeout(() => {
      this.calcStringSize();
    });
  }

  // 针对text头像使用确定文字大小
  calcStringSize() {
    if (this.displayMode !== 'text') {
      return;
    }
    const el = this.textEl && this.textEl.nativeElement;
    if (!el) {
      return;
    }

    // 获取文字本身宽度
    const childrenWidth = el.offsetWidth; // (include borderWidth)
    // 获取头像dom本身在页面中相对于viewPort的位置, width为宽度，当使用transform:scale的时候，
    // offsetWidth返回真实宽度，getBoundingClientRect返回转换后的可视尺寸
    const avatarWidth = this.el.nativeElement.getBoundingClientRect().width;
    const scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1; // 文字宽度大于头像框宽度则缩放
    if (scale === 1) {
      this.textStyles = {};
    } else {
      this.textStyles = {
        transform: `scale(${scale})`,
        display: 'inline-block',
      };
    }
  }

  imgError() {
    if (this.icon) {
      this.displayMode = 'icon';
    } else if (this.text) {
      this.displayMode = 'text';

      setTimeout(() => {
        this.calcStringSize();
      });
    }
  }
}
