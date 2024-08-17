import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { LoginDto } from '../model/interfaces/login-dto'
import { AuthResponseModel } from '../model/interfaces/auth-response-model'
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl : string = environment.apiUrl;
  private tokenKey = 'token';
  
  constructor(private httpClient: HttpClient) { }

  login(user: LoginDto): Observable<AuthResponseModel> {
    let url =`${this.apiUrl}/Auth/AppLogin`;
    return this.httpClient.post<AuthResponseModel>(url,user).pipe(
      map((response) => {
        if(response.isSuccess){
          localStorage.setItem(this.tokenKey, response.access_token);
        }
        return response;
      })
    );
  }
}
