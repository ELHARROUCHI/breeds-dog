import {createAction, props} from '@ngrx/store';

export enum DogActionType {
  SET_BREED_NAME = '[Breed] Set name',
  SET_IMAGE_BREED_URL = '[Breed] Set image url'
}

// setter action for breed name
export const setBreedName = createAction(DogActionType.SET_BREED_NAME, props<{ breedName: string }>());

// action setter for image url breed
export const setImageBreedUrl = createAction(DogActionType.SET_IMAGE_BREED_URL, props<{ imageUrl: string }>());
