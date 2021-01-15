import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person} from '../models';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent {
  // @Input() name = '';
  // @Input() addedName = "";
  @Input() person:Person;
  @Output() remove = new EventEmitter();
  

  isShow = false;

  click(){
    this.isShow ? this.isShow = false : this.isShow=true;
  }
  delteBtn(){
    this.remove.emit(this.person.lastName);
    console.log(this.person.firstName + " " + "is deleted.");
  }
  // delete( let x = index){
  //   this.person.splice(x);
  // }
  // remove(){
  //   // this.app.remove(this.person.firstName);
  //   // console.log(ndex);
  //   this.lastName
  // }
 

}
