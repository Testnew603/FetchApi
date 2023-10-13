import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FetchSample';

  lis:any[] = [];
  private url: string = 'https://dummyjson.com/products';

 async ngOnInit(){
   await fetch(this.url)           //api for the get request
    .then(response => response.json())
    .then(data =>this.lis=data.products)
    //.then(data => console.log(data));    
  }
}
