import {
  Directive,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  HostBinding,
} from '@angular/core';

const ICON_COLORS = ['danger', 'primary', 'warning', 'success', 'info', 'light', 'white'];

@Directive({
  selector: '[buiIcon]',
})
export class IconDirective implements OnInit, OnChanges {
  @HostBinding('class.bui-icon') true;
  @HostBinding('style.width') width;
  @HostBinding('style.height') height;
  @Input() buiIcon: string;
  @Input() color: string;
  @Input() size: string;
  node: SVGUseElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');

  constructor(private el: ElementRef) {
    this.el.nativeElement.appendChild(this.node);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const {
      buiIcon: iconChange,
      size: sizeChange,
      color: colorChange,
    } = changes;
    if (iconChange && iconChange.currentValue) {
      this.setIcon(`#${iconChange.currentValue}`);
    }
    if (sizeChange && sizeChange.currentValue) {
      this.setSize(sizeChange.currentValue);
    }
    if (colorChange && colorChange.currentValue) {
      this.setColor(colorChange.currentValue);
    }
  }

  setIcon(iconName) {
    this.node.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', iconName);
  }

  setSize(size) {
    let unit: string;
    switch (size) {
    case 'lg':
      unit = '24px';
      break;
    case 'md':
      unit = '16px';
      break;
    case 'sm':
      unit = '12px';
      break;
    default:
      unit = size;
    }
    this.width = this.height = unit;
  }

  setColor(color) {
    if (ICON_COLORS.indexOf(color) > -1) {
      ICON_COLORS.forEach((c) => {
        this.node.classList.remove(`bui-icon-${c}`);
      });
      this.node.classList.add(`bui-icon-${color}`);
    }
  }

}
