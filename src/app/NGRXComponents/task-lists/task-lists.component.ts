import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateTask, deleteTask } from '../task.actions';
import { Task } from '../task.model';
import { AppState } from '../task.reducer';
import { selectTasks } from '../task.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-lists',
  imports: [CommonModule],
  templateUrl: './task-lists.component.html',
  styleUrl: './task-lists.component.css'
})
export class TaskListsComponent {

//shows the list of tasks, and lets you update/delete.


 tasks$: Observable<Task[]>;

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(selectTasks);
  }

  updateTask(task: Task) {
    const updatedTask = { ...task, title: task.title + ' (updated)' };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }

  
}
