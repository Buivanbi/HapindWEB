import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authUrl = 'http://localhost:2203/api/auth/signin';

  constructor(private http: HttpClient) { }

//   authenticateUser(username: string, password: string): Observable<any> {
//     const loginRequest = {
//       username: username,
//       password: password
//     };

//     return this.http.post(this.authUrl, loginRequest);
// }
authenticateUser(username: string, password: string): Observable<any> {
  return this.http.post<any>(this.authUrl, { username, password }).pipe(
    tap(response => {
      console.log('Authentication successful. Received token:', response.accessToken);
      localStorage.setItem('token', response.accessToken);
    })
  );
}
}
