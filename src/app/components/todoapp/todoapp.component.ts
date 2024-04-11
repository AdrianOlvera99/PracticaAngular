import { Component } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.scss']
})
export class TodoappComponent {
  tasks: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
  newTask: string = '';
  editingIndex: number | null = null;
  editedTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  editTask(index: number) {
    this.editingIndex = index;
    this.editedTask = this.tasks[index];
  }

  updateTask() {
    if (this.editingIndex !== null && this.editedTask.trim() !== '') {
      this.tasks[this.editingIndex] = this.editedTask.trim();
      this.cancelEdit();
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.cancelEdit();
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editedTask = '';
  }
}
