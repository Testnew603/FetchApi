import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fetch-service',
  templateUrl: './fetch-service.component.html',
  styleUrls: ['./fetch-service.component.css']
})
export class FetchServiceComponent implements OnInit {
  isLoading: boolean = true;

  lis:any[] = [];
  private url: string = 'https://dummyjson.com/products'
  async ngOnInit() {
    await fetch(this.url)
      .then((response) => response.json())
      .then((quotesData) => {
        this.isLoading = false;
        this.lis = quotesData.products;        
      })    
  }
}
