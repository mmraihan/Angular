import { EventEmitter } from '@angular/core';
import { User } from './../user/user';
export class UserService{
   user : User[]=[
    {name: 'Raihan', age: 22, gender: 'male'  },
    {name: 'Sahik', age: 18, gender: 'male'  },
    {name: 'Riya', age: 21, gender: 'female'  },

   ]

   OnShowDetailClicked = new EventEmitter<User>();

   ShowUserDetails(user: User){
    this.OnShowDetailClicked.emit(user);

   }
}