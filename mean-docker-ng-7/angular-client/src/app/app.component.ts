import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// Import rxjs map operator
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';


  API = 'http://localhost:3000';

  
   people: any[] = [];
  //backend:String;

  constructor(private http: Http) {}


  ngOnInit() {
    this.getAllPeople();
  }


  addPerson(name, age) {
    this.http.post(`${this.API}/users`, {name, age})
      .subscribe(() => {
        this.getAllPeople();
      });
  }

 // Get all users from the API
  getAllPeople() {
    this.http.get(`${this.API}/users`)
      .subscribe(people => {
        console.log(people);
        this.people = people.json();
      });
  }


  // getMessage() {
  //   this.http.get(`${this.API}/message`)
  //     .subscribe(message => {
  //       console.log(message);
  //       // this.people = people.json();
  //       this.backend=message.json();
  //     });
  // }

}
