import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass-three',
  templateUrl: './ass-three.component.html',
  styleUrls: ['./ass-three.component.css']
})
export class AssThreeComponent  {
 showSecret=false;
 log = [];
 onToggleDetails(){
   this.showSecret=true;
   this.log.push(this.log.length+1)
 }
}
