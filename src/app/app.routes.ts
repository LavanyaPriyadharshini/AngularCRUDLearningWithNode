import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { StateManagementComponent } from './NGRXComponents/state-management/state-management.component';
import { TaskListsComponent } from './NGRXComponents/task-lists/task-lists.component';
import { TaskCounterComponent } from './NGRXComponents/task-counter/task-counter.component';

export const routes: Routes = [

 {
    path:"user-registration",
    component:UserRegistrationComponent
 },

 
 {
    path:"state-management",
    component:StateManagementComponent
 },

 {
    path:"task-lists",
    component:TaskListsComponent
 },

 {
    path:"task-counter",
    component:TaskCounterComponent
 }



];
