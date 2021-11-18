import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {Person} from '../models';
import { from } from 'rxjs';

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



  // @Output() sendUpdatedInfo = new EventEmitter();
  @Output() emitCancelBtn = new EventEmitter();
  @Output() updated = new EventEmitter();

  display = false;
  constructor(private router:Router){}
 

  onSubmit(data: Person){
    this.updated.emit(data);
    console.log("onsubmit");
  }

  cancelUpdate(){
    this.display ? this.display = false : this.display = true;
    console.log("balik sa resuable!");
  } 
} 
