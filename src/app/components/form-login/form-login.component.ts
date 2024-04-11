import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private userService: UsersService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  login() {
    this.userService.login(this.username, this.password).subscribe(
      (isValid) => {
        if (isValid) {
          const token = 'mockToken123'; // Genera un token real o utiliza el que obtienes del servidor
          this.userService.setToken(token);
          this.router.navigate(['/home']); // Redirige al Dashboard después del inicio de sesión
        } else {
          this.snackBar.open('Credenciales inválidas', 'Cerrar', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        this.snackBar.open('Error al intentar iniciar sesión. Por favor, intenta de nuevo más tarde.', 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    );
  }

  ngOnInit(): void {
  }

}
