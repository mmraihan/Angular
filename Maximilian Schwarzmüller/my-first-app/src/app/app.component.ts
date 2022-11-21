import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  genders = ['Male', 'Female'];

  signupForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.signupForm= new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('Male'),
    });

  }

  onSubmit(){
    console.log(this.signupForm.value)
  }
}
