import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent {
  @Input() lastNameAN = "";
  @Input() firstNameAN = "";
  @Input() ageAN = "";

  @Output() ageOutput = new EventEmitter();
  @Output() fullName = new EventEmitter();

  getFullName(){
    this.fullName.emit(this.lastNameAN + " " + this.firstNameAN);
  }

  getAgeOutput(){
    this.ageOutput.emit(this.ageAN); 
  }
 

 

}
