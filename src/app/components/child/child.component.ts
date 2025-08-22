import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [CommonModule,ParentComponent],
  standalone: true,    
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges{
 
  @Input() message!:string; //here this pmessage is the variable used in the parent component


   ngOnChanges(changes: SimpleChanges) {
    console.log('Changes:', changes);
  }


//sending array of numbers from child to parent through event emiter
  @Output() numbersEvent = new EventEmitter<number[]>();

  //when this button is clicked, the numbers will be displayed in the parent compoennt
  sendNumbers() {
  this.numbersEvent.emit([10, 20, 30, 40]);  // ✅ emit array
}




}
