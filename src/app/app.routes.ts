import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { StateManagementComponent } from './NGRXComponents/state-management/state-management.component';

export const routes: Routes = [

 {
    path:"user-registration",
    component:UserRegistrationComponent
 },

 
 {
    path:"",
    component:StateManagementComponent
 }



];
