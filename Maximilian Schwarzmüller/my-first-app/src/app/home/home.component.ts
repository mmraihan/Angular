import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

 private firstSubscription : Subscription;

  constructor() { }

  ngOnInit(): void {
    this.firstSubscription= interval(1000).subscribe(count=>{
    console.log(count)
      
    })
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}
