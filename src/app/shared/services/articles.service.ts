import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchArticleListInfo(): Observable<any> {
    return this.http.get('/article/fetch') as Observable<any>;
  }
}
