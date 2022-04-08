import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Rick"
  age: number = 25
  job = 'Programador'
  hobbies = ["correr ", "Jogar ", "Estudar" ]
  car={
    name:'Polo',
    year: 2019
  }

  constructor() { }

  ngOnInit(): void {
  }

}
