import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-fe-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {

  imgSrc = 'assets/fdsfdsfds.png';

  constructor() { }

  ngOnInit() {
  }

  // imgFailed() {
  //   this.imgSrc = '../../../assets/images/avatar.jpg';

  // }

}
