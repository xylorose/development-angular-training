import { Component } from '@angular/core';
import {Person} from './models'
import {FormControl, FormGroup } from '@angular/forms';
import { isEmptyExpression } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Rose Marry Goyo !!!';
  // itemImageUrl = '../assets/haru.jpg';
  // classes = 'special';
  // isActive = true;
  // name = "";
  // defaultName="Rollie";
  title = "Directives";
  // firstNameA = '';
  // lastNameA= '';
  // ageA='';
  // fullName = '';
  // ageOutput = '';
  // firstNameA = "Haru";
  // lastNameA = "Yoshida";
  // fullName = '';
  // names = ["Haru", "Yuzan", "Mi-chan", "Mizutani"]
  // addedName = "";
  
// pushAddedName(){
//   this.names.push(this.addedName);
//   this.addedName =  "";
// }

  // compareInput(){
  //   this.name == this.defaultName ? alert("matched"): alert("mismatched");
  // }
  // resetBtn(){
  //  this.name = "";
  // }
  // getFullName(event:Event){
  //   this.fullName = String(event);
  // }
  // getAgeOutput(event:Event){
  //   this.ageOutput= String(event);
  // }
  // name=["Naruto", "Sasuke","Kakashi"];

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
    // this.persons.splice(this.persons.findIndex(x => x.lastName == index),1);
    this.persons.splice(this.persons.findIndex(x => x.lastName == index ),1);
  }
  // remove(index){
  //   this.persons.splice(this.persons.findIndex( x => x.firstName == index),1);
  // }


}
