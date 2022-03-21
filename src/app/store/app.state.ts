import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State<{}>({
  name: 'app',
  defaults: {}
})
@Injectable()
export class AppState {}
