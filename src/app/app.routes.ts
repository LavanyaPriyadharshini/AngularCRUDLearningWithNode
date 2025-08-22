import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { StateManagementComponent } from './NGRXComponents/state-management/state-management.component';
import { TaskListsComponent } from './NGRXComponents/task-lists/task-lists.component';
import { TaskCounterComponent } from './NGRXComponents/task-counter/task-counter.component';
import { GeneralConceptsComponent } from './components/general-concepts/general-concepts.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

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
 },


  {
    path:"general-concepts",
    component:GeneralConceptsComponent
 },


   {
    path:"",
    component:ChildComponent
 },


    {
    path:"parent",
    component:ParentComponent
 }



];
