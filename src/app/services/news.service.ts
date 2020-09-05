import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl= 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-05&sortBy=publishedAt&apiKey=ac3516a67e564d5db156a1c68ecf993f'

  constructor(
    private http: HttpClient
  ) { }

  getNews(){
    return this.http.get(this.baseUrl)  
  }
}
