import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-general-concepts',
  imports: [FormsModule,CommonModule],
  templateUrl: './general-concepts.component.html',
  styleUrl: './general-concepts.component.css'
})
export class GeneralConceptsComponent {

  //string interpolation
  userName="lavanya"

  //property binding
  imageUrl="/assets/Screenshot 2025-04-29 160247.png";
  altText="Image screenshot"

  //Event binding- click event or any action that takes place in the browser
   clickCount = 0;
  eventMessage = '';
  disMessageAfterClick='';


  isChecked=true;
   //isActive = true;

  label='this is a label'

    isError = false; 

  onClick() {
    this.clickCount++;
    console.log('Button clicked!');
  }

     // passing the event with message
   onClickWithEvent(event: Event) {
    this.eventMessage = `Event type: ${event.type}, Target: ${(event.target as HTMLElement).tagName}`;
  }

  onAfterClick(event:Event){
    this.disMessageAfterClick='Display this message only afet the button click'
  }


  //toggling the button
   isActive = false;
  
  //  /if this.isActive is true, then !this.isActive becomes false
   //if this.isActive is false, then !this.isActive becomes true
     toggleActive() {
    this.isActive = !this.isActive;
  }

  //style binding
  isError1=false;
  toggleStyle(){
    this.isError1=!this.isError1
  }


// Host Listeners -refer notes in parentchild.txt
//click function
    @HostListener('click') onClickHostList() {
    console.log('The btn is clicked!');
  }

  //mouse enter
    @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse entered button!');
  }


    @HostListener('mouseleave') onMouseLeave() {
    console.log('Mouse left button!');
  }

//listening to the window events
   @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log('Window resized:', event);
    console.log('Width:', (event.target as Window).innerWidth);
  }
}
