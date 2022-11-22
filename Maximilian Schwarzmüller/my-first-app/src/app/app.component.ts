import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  genders = ['Male', 'Female'];

  signupForm: FormGroup;
  get hobbyControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }


  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userDetail': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),

      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
   (<FormArray>this.signupForm.get('hobbies')).push(control);

  }
}
