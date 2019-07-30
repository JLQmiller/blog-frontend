import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        }
      }
    }),
    NgZorroAntdModule,
    SharedModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: zh_CN,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
