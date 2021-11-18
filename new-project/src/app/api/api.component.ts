import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  private url = 'https://jsonplaceholder.typicode.com/users';

  users : Users[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('onInit');
    this.getUser().subscribe( users =>{
      console.log(users);
      this.users = users as Users[];
    })

  }

  getUser(){
    return this.http.get(this.url);
  }
}

export interface Users{
  id ?: number;
  name: string;
  username: string;
  email: string;
  address:[{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo:{
      lat: number;
      lng: number;
    }
  }];
  phone: number;
  website: string;
  company:[{
    name: string;
    catchPhrase: string;
    bs: string;
  }]
}
