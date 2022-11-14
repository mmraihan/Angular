import { User } from './../user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private readonly userService: UserService) { }

  user: User;

  ngOnInit(): void {
    this.userService.OnShowDetailClicked.subscribe((userr)=>{
      this.user=userr;
    })
  }



}
