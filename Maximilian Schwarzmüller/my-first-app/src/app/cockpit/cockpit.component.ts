import { ServerComponent } from './../server/server.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @ViewChild(ServerComponent) serverComponent: ServerComponent;
  
  newServerName='';
  newServerContent='';


  constructor() { }

  ngOnInit(): void {
  }

  
  onAddServer(){
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
  
  onAddBlueprint(){
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }


  increase(){
    this.serverComponent.increeaseNumber();
  }
  decrease(){
    this.serverComponent.decreaseNumber();
  }

}
