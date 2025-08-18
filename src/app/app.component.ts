import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StateManagementComponent } from './NGRXComponents/state-management/state-management.component';
import { TaskListsComponent } from './NGRXComponents/task-lists/task-lists.component';
import { TaskCounterComponent } from './NGRXComponents/task-counter/task-counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StateManagementComponent,TaskListsComponent,TaskCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularFrontend';
}
