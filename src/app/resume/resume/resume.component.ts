import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-fe-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {

  imgSrc = 'assets/fdsfdsfds.png';
  msbapTitle = 'The Stone Mason';
  msbapAudioUrl = 'http://www.jlqmiller.top/static/Andreas%20Waldetoft%20-%20The%20Stone%20Masons%20(Guns,%20Drums%20and%20Steel%20Remix).mp3';
  msaapDisplayVolumeControls = true;

  msbapDisplayTitle = false;

  constructor() { }

  ngOnInit() {
  }

  imgFailed() {
    this.imgSrc = '../../../assets/images/avatar.jpg';
    // this.imgSrc = null;
  }

}
