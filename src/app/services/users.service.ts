import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = 'http://localhost:3000/users';
  private tokenKey: string = 'authToken';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`).pipe(
      map((users) => {
        const user = users.length > 0 ? users[0] : null;
        if (user) {
          return true;
        } else {
          return false;
        }
      }),
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError('Error al intentar iniciar sesión. Por favor, intenta de nuevo más tarde.');
      })
    );
  }

  setToken(token: string) {
    sessionStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  logout(): boolean {
    sessionStorage.removeItem(this.tokenKey);
    return true;
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem(this.tokenKey);
  }


}
