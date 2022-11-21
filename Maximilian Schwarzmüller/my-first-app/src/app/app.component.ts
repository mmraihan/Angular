import { UserService } from './user.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  providers:[]
 
})
export class AppComponent implements OnInit, OnDestroy {

  activated: boolean=false;
  activatedSub : Subscription;
  
constructor( private service: UserService){
 
}

ngOnInit(){
  this.activatedSub= this.service.activatedEmitter.subscribe((c: boolean)=>{
    this.activated=c;
  })
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
    
  }

}

