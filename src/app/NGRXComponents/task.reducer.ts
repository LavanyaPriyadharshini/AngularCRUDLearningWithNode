

//This file will contain the initial state of our application and the reducer function that handles state changes:

//Reducer is a code part which contains the function which tells the ngrx how the state changes in response to the actions
//reducers are immutable, they never mutate the old state, they must be pure functions
import { Task } from "./task.model";

import { addTask, updateTask, deleteTask } from './task.actions'; //importing the actions specified in the task.actions.ts


export interface AppState {
  tasks: Task[]; //import the interface from the task model
}


export const initialState: AppState = {
  tasks: []
};


//In this code snippet, we defined the initial state of our application with an empty array of tasks.
//  The taskReducer function is a pure function that receives the current state and an action as arguments and returns a new state based on the action type.


//the below function explained in the notes
export function taskReducer(state = initialState, action:any): AppState {
  switch (action.type) {
    case addTask.type:  //if the action received is of the type "addTask" from the actions.ts, then run this block
      return { ...state, tasks
: [...state.tasks, action.task] };


//if the action is of the "updatetask" then run this block
    case updateTask.type:
      return {
        ...state,
        tasks: state.tasks.map(task => (task.id === action.task.id ? action.task : task))
      };


//if the action is the delete "delete task" then run this block
    case deleteTask.type:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.id) };
    default:
      return state;
  }


  //In this updated code, we imported the actions and added cases to our taskReducer function to 
  // handle each action type. For addTask, we create a new state by adding the new task to the existing tasks array. For updateTask, we map through the tasks and update the one with a matching id.
  //  For deleteTask, we filter out the task with the specified id.

}