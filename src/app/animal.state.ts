import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State<string[]>({
  name: 'animals',
  defaults: ['chien', 'chat']
})
@Injectable()
export class AnimalsState {}
