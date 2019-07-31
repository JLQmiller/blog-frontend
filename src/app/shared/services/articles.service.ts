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
    return this.http.post('/article/fetch', {pageNumber: 1, pageSize: 5}) as Observable<any>;
  }

  fetchArticleListMenu(): Observable<any> {
    return this.http.post('/article/fetch', {}) as Observable<any>;
  }

  fetchSingle(id: number): Observable<any> {
    return this.http.get(`/article/fetchSingle/${id}`) as Observable<any>;
  }
}
