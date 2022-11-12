import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'    
})
export class ServerComponent{
serverId: number =10;
serverStatus: string ='offLine';

message: string='';
num: number=0;

getServerStatus(){
    return this.serverStatus;
}

increeaseNumber(){
    this.num+=1;
    this.message="Count "+ this.num;
}

decreaseNumber(){
    this.num-=1;
    this.message="Count "+ this.num;
}
}