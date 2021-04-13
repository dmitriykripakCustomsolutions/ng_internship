import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  public title = 'Long long title';
  public footer = 'Long long long footer';
  public time = new Date();
  constructor() { }

  ngOnInit() {
    this.launchWatch();
  }

  private launchWatch(){
    setInterval(() =>{
      this.time = new Date();
    });
  }

}
