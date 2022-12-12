import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const url = 'https://student-management-3kzu.onrender.com/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(url + 'api-token-auth', {username, password}).pipe(
      map(user => {
        if(user){
          localStorage.setItem('CurrentUser', JSON.stringify(user))
        }
        return user;
      })
    );
  }

  register(password: string, username: string, phone_number: string, avatar: string, gender: string, 
    first_name: string, last_name: string, email: string): Observable<any> {
    return this.http.post(url + 'users', {
      password,
      username,
      phone_number,
      avatar,
      gender,
      first_name,
      last_name,
      email
    }, httpOptions);
  }

}
