import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person} from '../models';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent {
  @Input() person:Person;
  @Output() removePerson = new EventEmitter();
  

  isShow = false;

  click(){
    this.isShow ? this.isShow = false : this.isShow=true;
  }
  delteBtn(){
    this.removePerson.emit(this.person.lastName);
    console.log(this.person.lastName + " " + this.person.firstName + " " + "is deleted.");
  }
}
