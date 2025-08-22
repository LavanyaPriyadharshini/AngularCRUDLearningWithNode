import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StateManagementComponent } from './NGRXComponents/state-management/state-management.component';
import { TaskListsComponent } from './NGRXComponents/task-lists/task-lists.component';
import { TaskCounterComponent } from './NGRXComponents/task-counter/task-counter.component';
import { RxjsObservablesComponent } from './components/rxjs-observables/rxjs-observables.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { GeneralConceptsComponent } from './components/general-concepts/general-concepts.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StateManagementComponent,TaskListsComponent,TaskCounterComponent,RxjsObservablesComponent,ParentComponent,ChildComponent,GeneralConceptsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  title = 'AngularFrontend';

  
}
