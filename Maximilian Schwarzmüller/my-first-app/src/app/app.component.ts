import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    this.signupForm = new FormGroup({
      userDetail: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),

      gender: new FormControl('Male'),
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
