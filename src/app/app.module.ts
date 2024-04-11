import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './components/home/home.component';
import { TodoappComponent } from './components/todoapp/todoapp.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    HomeComponent,
    TodoappComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
