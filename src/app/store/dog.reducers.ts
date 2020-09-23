import {Action, createReducer, on} from '@ngrx/store';

import {dogInitialState, DogState} from './dog.state';
import {setBreedName, setImageBreedUrl} from './dog.actions';

// reduces to reduce breed name & breed url image
const mDogReducer = createReducer(
  dogInitialState,
  on(setBreedName, (state: DogState, {breedName}) => ({...state, breedName})),
  on(setImageBreedUrl, (state: DogState, {imageUrl}) => ({...state, imageUrl}))
);

export function reducer(state: DogState = dogInitialState, action: Action): any {
  return mDogReducer(state, action);
}


