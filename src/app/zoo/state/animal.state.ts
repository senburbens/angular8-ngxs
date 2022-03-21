import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddAnimal } from './animal.actions';

@State<string[]>({
  name: 'animals',
  defaults: ["dog", 'cat']
})
@Injectable()
export class AnimalsState {

  @Selector()
  static animals(state : string[]){
    return state;
  }

  @Action(AddAnimal)
  addAnimal(ctx : StateContext<string[]>, action : AddAnimal){
    const state = ctx.getState();
    ctx.setState([
      ...state,
      action.name
    ]);
  }
  
//   @Action(GetSomeData)
//   loadData({ patchState, dispatch}: StateContext<MyDataModel>, {payload}: GetSomeData) {
//      return this.myDataService.get(payload.id)
//      .pipe(
//         tap((data) => {
//           patchState({ data: data});
//           // optionally dispatch here
//           dispatch(new GetDataSuccess());
//         })
//      ); 
//   } 
}
