import { Component } from '@angular/core';
import {Person} from './models'
import {FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Reactive Form";
  //code for adding new name into the array
  profileGroup = new FormGroup({
  firstName : new FormControl(''),
  lastName : new FormControl(''),
  age : new FormControl(''),
  nationality : new FormControl(''),
  gender : new FormControl(''),
  })
  
  persons:Person[] = [
    {firstName:'Naruto',lastName:'Uzumaki',age:28,gender:"male",nationality:"Hidden Leaf Shinobi"},
    {firstName:'Sasuke',lastName:'Uchiha',age:29,gender:"male",nationality:""},
    {firstName:'Kakashi',lastName:'Hatake',age:52,gender:"male",nationality:"Hidden Leaf Shinobi"},
    {firstName:'Haru',lastName:'Yoshida',age:19,gender:"male",nationality:"Bad Boy/Genius Highschool Japanese Boy"},
    {firstName:'Shizuku',lastName:'Mizutani',age:19,gender:"female",nationality:"Typical Highschool Japanese Girl"}
  ]

  onSubmit(info: any){
    //TODO: Use EventEmitter with form value
    this.persons.push(info);
    console.log(info);
    this.profileGroup.reset();
  }
  delteBtn(index: any){
    this.persons.splice(this.persons.findIndex( x => x.lastName == index ),1);
  }
}
