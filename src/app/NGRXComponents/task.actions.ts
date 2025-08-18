

//here the actions is used to describe the state changes that made in the application, like if we are adding any element to the form
//or deleteing a record,or updating, everything will refer to the change in the initial state, this changes will be refelcted in the actions and compared with the initial state in the reducer .ts


//Actions in NGRX are used to describe state changes in the application. They are plain JavaScript objects with a 
// type property that describes the action being performed. We will define three types of actions for our task management application: AddTask, UpdateTask, and DeleteTask.

//we used the createAction function from @ngrx/store to define our actions
//The first argument of createAction is the action type, enclosed in square brackets to indicate it belongs to the Task feature.
// /The second argument, props, is used to define the payload of the action.

// /In our case, addTask and updateTask actions expect a task object, while deleteTask expects an id as the payload.

import { createAction, props } from '@ngrx/store';
import { Task } from './task.model';


export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const updateTask = createAction('[Task] Update Task', props<{ task: Task }>());
export const deleteTask = createAction('[Task] Delete Task', props<{ id: number }>());


//Now that we have defined our actions, we need to implement the reducers that handle these actions and
//  update the state accordingly.
//open the reducer.ts and add the actions created here like add task,and delete task using the import files
