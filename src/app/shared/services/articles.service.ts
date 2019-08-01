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

  fetchTotalNumber(): Observable<any> {
    return this.http.get('/article/fetchtotalnumber') as Observable<any>;
  }

  fetchArticleListInfo(number: number, size: number): Observable<any> {
    const pageInfo = {
      pageNumber: number,
      pageSize: size,
    };
    return this.http.post('/article/fetch', pageInfo) as Observable<any>;
  }

  fetchArticleListMenu(): Observable<any> {
    return this.http.post('/article/fetch', {}) as Observable<any>;
  }

  fetchSingle(id: number): Observable<any> {
    return this.http.get(`/article/fetchSingle/${id}`) as Observable<any>;
  }
}
