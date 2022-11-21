import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  constructor() {}

  ngOnInit() {}
}
