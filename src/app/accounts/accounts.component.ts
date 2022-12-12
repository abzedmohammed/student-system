import { Component } from '@angular/core';
import { UserDetails } from '../apiclass';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {

  users?: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      data => {
        console.log(data.users);
        
        this.users = data.users
      },
      err => {
        console.log(err);
        
      }
    );

  }

}
