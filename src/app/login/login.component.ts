import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { first } from 'rxjs/operators';
import { Auth } from '../apiclass';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: Auth = {
    username: '',
    password: ''
  };

  isLoggedIn = false;
  isLoading = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private route: Router) { }

  onSubmit(): void {
    this.isLoading = true;
    const data = {
      username: this.form.username,
      password: this.form.password
    }

    this.authService.login(data.username, data.password).pipe(first()).subscribe(
      data => {       
        this.tokenStorage.saveToken(data);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().username;
        this.isLoading = false;
        this.reloadPage();
        
        
        
      },
      err => {
        this.isLoading = false;
        this.isLoggedIn = false;
        this.errorMessage = err.error.non_field_errors;
        console.log(this.errorMessage);        
        this.isLoginFailed = true;
      }
    ); 
  }

  reloadPage(){
    window.location.reload();
    window.location.href = '/home';
  }
}
