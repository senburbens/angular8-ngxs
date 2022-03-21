import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddAnimal } from '../animal.actions';
import { AnimalsState } from '../animal.state';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.scss']
})
export class ZooComponent implements OnInit{

  public addAnimalForm : FormGroup;
  @Select(AnimalsState.animals) animals$: Observable<string[]>;

  constructor(
    private formBuilder : FormBuilder,
    private store: Store) {}

  ngOnInit(): void {
     this.initForm();
  }

  private initForm() : void {
    this.addAnimalForm = this.formBuilder.group({
      animalName : ['']
    })
  }

 private  addAnimal(name: string) {
    this.store.dispatch(new AddAnimal(name));
  }

  public onSubmit():void{
    const value = this.addAnimalForm.get("animalName").value;
    this.addAnimal(value);
  }
}



