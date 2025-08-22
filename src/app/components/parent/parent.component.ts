import { Component, EventEmitter, Output } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,    
  imports: [ChildComponent,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  pmessage="this is the text from the parent"
  //this msg has to be passed to the child component



  update(){
    this.pmessage="updated message to child from parent"
  }


  //receiving from the child component, this receives the numbers when the sendnumbers btn is clicked from the child component
  childNumbers: number[] = [];

  receiveNumbers(nums: number[]) {
  this.childNumbers = nums;
}

}
