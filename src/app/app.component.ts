import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment_three';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  submitted = false;
  user = {
    email : '',
    subscription : ''
  };

  @ViewChild('signupForm', { static: false }) sgnForm: NgForm;
  onSubmit() {
    //console.log(this.sgnForm.value);
    this.submitted = true;
    this.user.email = this.sgnForm.value.email;
    this.user.subscription = this.sgnForm.value.subscription;
  }

  
}
