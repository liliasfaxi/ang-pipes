import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-birthday',
  templateUrl: './my-birthday.component.html',
  styleUrls: ['./my-birthday.component.css']
})
export class MyBirthdayComponent implements OnInit {

  birthday = new Date(1983,0,25);
  toggle = true;

  constructor() { }

  get format() {
    return this.toggle ? 'dd/MM/yyyy' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  ngOnInit() {
  }

}
