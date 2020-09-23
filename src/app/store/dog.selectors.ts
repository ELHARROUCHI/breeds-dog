import {createSelector} from '@ngrx/store';

import {DogState} from './dog.state';

export const selectState = (globalState: any) => globalState.state;

// breed name selector
export const selectBreedName = createSelector(selectState, (state: DogState) => state.breedName);

// breed image selector
export const selectImageBreedUrl = createSelector(selectState, (state: DogState) => state.imageUrl);
