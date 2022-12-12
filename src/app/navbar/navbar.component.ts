import { Component } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
// import { Router } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // private roles: string[] = [];

  isLoggedIn = false;
  isLoggedOut = true;
  showAdminBoard = false;
  showStaffBoard = false;
  username?: string;
  avatar?: string;
  email?: string;
  first_name?: string;
  last_name?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();;

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      // this.roles = user.staf;
      this.isLoggedOut = false;
      this.showAdminBoard = false;
      this.showStaffBoard = false;
      this.username = user.username;
      this.avatar = user.avatar;
      this.first_name = user.first_name;
      this.last_name = user.last_name;
      this.email = user.email;

    }
  }

  logout(){
    this.tokenStorageService.signOut();
    window.location.reload();   
    window.location.href = '/login'; 
  }
}
