import { Component } from '@angular/core';
import { Person } from './models'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Reactive Form";
  //code for adding new name into the array
  profileGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    nationality: new FormControl(''),
    gender: new FormControl(''),
  })

  persons: Person[] = [
    { firstName: 'Naruto', lastName: 'Uzumaki', age: 28, gender: "male", nationality: "Hidden Leaf Shinobi" },
    { firstName: 'Sasuke', lastName: 'Uchiha', age: 29, gender: "male", nationality: "" },
    { firstName: 'Kakashi', lastName: 'Hatake', age: 52, gender: "male", nationality: "Hidden Leaf Shinobi" },
    { firstName: 'Haru', lastName: 'Yoshida', age: 19, gender: "male", nationality: "Bad Boy/Genius Highschool Japanese Boy" },
    { firstName: 'Shizuku', lastName: 'Mizutani', age: 19, gender: "female", nationality: "Typical Highschool Japanese Girl" }
  ]

    delteBtn(index: any) {
    this.persons.splice(this.persons.findIndex(x => x.lastName == index), 1);
  }

  show = false;
  ndx;
  updateBtn(data: Person) {
    this.show ? this.show = false : this.show = true;
    this.ndx = data;
    console.log(this.ndx, "click") 
  }

  onSubmit(info: Person) {
    //TODO: Use EventEmitter with form value
    let index = this.persons.findIndex(x => x == this.ndx);
    this.persons[index] = info;
    this.show ? this.show = false : this.show = true;
  }

}
