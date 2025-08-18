import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from '../task.reducer';
import { selectTasks } from '../task.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-counter',
  imports: [CommonModule],
  templateUrl: './task-counter.component.html',
  styleUrl: './task-counter.component.css'
})
export class TaskCounterComponent {

  //just shows the number of tasks (different view of same store).

   tasksCount$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.tasksCount$ = this.store.select(selectTasks).pipe(
      // only take the length of tasks
      map(tasks => tasks.length)
    );
  }

}
