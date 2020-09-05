import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:Array<any>

  constructor(
    private ns: NewsService
  ) { }

  ngOnInit(): void {
    this.ns.getNews()
    .subscribe(
      res => {
        this.news = res['articles']
        console.log(this.news);
        
      },
      err => {
        console.log("Error occured");
      }
    )
    
  }

}
