import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State<{}>({
  name: 'shared',
  defaults: {}
})
@Injectable()
export class SharedState {}
