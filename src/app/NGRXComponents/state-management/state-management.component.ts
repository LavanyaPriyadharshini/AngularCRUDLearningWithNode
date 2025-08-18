import { Component } from '@angular/core';
import { Task } from '../task.model';
import { AppState } from '../task.reducer';
import { Store } from '@ngrx/store';
import { addTask, deleteTask, updateTask } from '../task.actions';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { selectTasks } from '../task.selector';

@Component({
  selector: 'app-state-management',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './state-management.component.html',
  styleUrl: './state-management.component.css'
})
export class StateManagementComponent {

  //importing the interface from the task model

 tasks$: Observable<Task[]>;  // 👈 use observable instead of plain array

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(selectTasks);  // ✅ correct way
  }


    addNewTask() {
    const newTask: Task = 
    { id: Date.now(),
       title: 'New Task',
        description: 'New task description' 
      };
    this.store.dispatch(addTask({ task: newTask }));
  }

  updateTask(task: Task) {
    const updatedTask = { ...task, title: task.title + ' (updated)' };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }


}
