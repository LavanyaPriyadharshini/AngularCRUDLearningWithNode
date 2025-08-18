
// /Selectors in NGRX are used to access specific pieces of state from the store.
//They allow us to compute derived data based on the state and avoid accessing the state directly.

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./task.reducer";

// /we used the createSelector function from @ngrx/store to define our selectors.

// The selectTasks selector retrieves the tasks array from the state,
  //export const selectTasks = (state: AppState) => state.tasks;
  export const selectTaskState = createFeatureSelector<AppState>('tasks'); 



//while selectTaskById takes an id argument and returns the task with the corresponding id
  // export const selectTaskById = (id: number) =>
  // createSelector(selectTasks, tasks => tasks.find(task => task.id === id));



  export const selectTasks = createSelector(
  selectTaskState,
  (state: AppState) => state.tasks   // 👈 this must return an array
);




//Now that we have set up the store, defined actions, and implemented reducers and selectors, 
// let's move on to dispatching actions from our components ,go to the application form where you have given
//go to the  state-management.component.ts component under the NGRX components folder and dispatch the actions there




