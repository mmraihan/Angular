import { UserService } from './../../services/user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor( private userService: UserService) { }

  users: User[]=[]

  ngOnInit(): void {
    this.users= this.userService.user;
  }
  showDetails(user: User){
    this.userService.ShowUserDetails(user)
  }


}
