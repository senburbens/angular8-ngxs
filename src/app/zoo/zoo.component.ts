import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddAnimal } from '../animal.actions';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.scss']
})
export class ZooComponent {
  constructor(private store: Store) {}

  addAnimal(name: string) {
    this.store.dispatch(new AddAnimal(name));
  }
}



