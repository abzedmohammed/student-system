import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  avatar:any = ''

  form: any = {
    first_name: null,
    last_name: null,
    avatar: this.avatar,
    gender: 'Other',
    phone_number: null,
    username: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  isLoading = false;
  isSignUpFailed = false;
  errorMessage: any = '';

  constructor(private authService: AuthService) { }

  onFileSelected(event: Event){
    // console.log(event.target.file[0].name);
    if (event.target != null) {
      // if (event.target.files && event.target.files[0]) {  
      this.avatar = (event.target as HTMLInputElement).files
      this.avatar = this.avatar[0]
      console.log(this.avatar);
      
    }
  }

  onSubmit(): void {
    this.isLoading = true;
    const { username, first_name, last_name, email, avatar, phone_number, gender, password } = this.form;
    this.authService.register(password, username, phone_number, avatar, gender, first_name, last_name, email).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.isLoading = false;
        alert("Registration successful! Login to continue...")
        this.navigateToLogin()
      },
      err => {
        this.isLoading = false;
        this.errorMessage = err.error.error;
        console.log(this.errorMessage);
        
        this.isSignUpFailed = true;
      }
    );
  }

  navigateToLogin(){
    window.location.href = '/login';
  }

}
