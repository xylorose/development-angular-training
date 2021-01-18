import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Person} from '../models';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent{

  @Input() persons:Person;
  @Input() lastName = "";
  @Input() firstName = "";
  @Input() age = 0;
  @Input() nationality = "";
  @Input() gender = "";

  @Output() updatePerson = new EventEmitter();
  @Output() sendUpdatedInfo = new EventEmitter();

 
  sendUpdate(){
    this.sendUpdatedInfo.emit(this.persons.lastName)
  }

}
