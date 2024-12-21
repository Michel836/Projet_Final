import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendUrlService {

  url:String=""
  article:String = ""

  constructor(private http: HttpClient) { }

  getUserMe(): Observable<String> {
    return this.http.get<String>('http://127.0.0.1:8000/');
  }

  postURL(url:String): Observable<String> {
    // return this.http.get<String>('http://127.0.0.1:8000/geturl?url='+url);
    return this.http.get<String>('https://fastapi-project-148331028713.europe-west9.run.app/geturl?url='+url);
  }

  postArticle(article:String): Observable<String> {
    // return this.http.get<String>('http://127.0.0.1:8000/geturl?url='+article);
    return this.http.get<String>('https://fastapi-project-148331028713.europe-west9.run.app/geturl?url='+article);
  }
}
