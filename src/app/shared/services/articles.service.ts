import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as path from 'path-browserify';
import {} from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient,
  ) { }

  makeUrl(url: string) {
    return path.join(environment.apiUrl, url);
  }

  fetchTotalNumber(): Observable<any> {
    return this.http.get(this.makeUrl('/article/fetchtotalnumber')) as Observable<any>;
  }

  fetchArticleListInfo(number: number, size: number): Observable<any> {
    const pageInfo = {
      pageNumber: number,
      pageSize: size,
    };
    return this.http.post(this.makeUrl('/article/fetch'), pageInfo) as Observable<any>;
  }

  fetchArticleListMenu(): Observable<any> {
    return this.http.post(this.makeUrl('/article/fetch'), {}) as Observable<any>;
  }

  fetchSingle(id: number): Observable<any> {
    return this.http.get(this.makeUrl(`/article/fetchSingle/${id}`)) as Observable<any>;
  }
}
