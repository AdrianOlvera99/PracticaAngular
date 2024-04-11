import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Task } from '../models/task.model';
import { catchError } from 'rxjs/operators';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient, private userService: UsersService) { }

  private getHeaders(): HttpHeaders {
    const authToken = this.userService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
  }

  getTasksByUserId(userId: number): Observable<Task[]> {
    const headers = this.getHeaders();
    return this.http.get<Task[]>(`${this.apiUrl}?userId=${userId}`, { headers }).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError('Error al obtener las tareas.');
      })
    );
  }

  addTask(task: Task): Observable<Task> {
    const headers = this.getHeaders();
    return this.http.post<Task>(this.apiUrl, task, { headers }).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError('Error al agregar la tarea.');
      })
    );
  }

  updateTask(task: Task): Observable<Task> {
    const headers = this.getHeaders();
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task, { headers }).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError('Error al actualizar la tarea.');
      })
    );
  }

  deleteTask(taskId: number): Observable<void> {
    const headers = this.getHeaders();
    return this.http.delete<void>(`${this.apiUrl}/${taskId}`, { headers }).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError('Error al eliminar la tarea.');
      })
    );
  }
}
