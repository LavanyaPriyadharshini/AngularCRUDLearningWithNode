import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor(private http:HttpClient) 
  
  {
    
  }


  // Simulate API call
  fakeApiCall(value: string) {
    console.log('API called with:', value);
    return of(`Response for ${value}`).pipe(
      delay(2000) // simulate 2s delay
    );
  }
}
