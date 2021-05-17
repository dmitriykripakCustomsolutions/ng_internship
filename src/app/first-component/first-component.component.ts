import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  public userName: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public nameConfirmed() {
    if (this.userName) {
      localStorage.setItem('userName', this.userName);
    }
  }

  public sendRequest() {
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(result => {
      console.table(result);
    });
  }

}
