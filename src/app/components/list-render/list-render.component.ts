import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = []
  
  // animals: Animal[] = [
  //   {name: "Turca", type: "Dog", age: 4},
  //   {name: "Tom", type: "Cat", age: 10},
  //   {name: "Frida", type: "Dog", age: 5},
  //   {name: "Bob", type: "Horse", age: 1},
  // ]

  animalDetails=''

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  ngOnInit(): void {
  }
  showAge(animal: Animal) {
    this.animalDetails= `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal:Animal){
    this.animals = this.animals.filter((a) => animal.name !== a.name)
    this.listService.remove(animal.id).subscribe()
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals))
  }

}
