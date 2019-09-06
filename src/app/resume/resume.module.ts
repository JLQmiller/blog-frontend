import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    NgxAudioPlayerModule,
  ]
})
export class ResumeModule { }
