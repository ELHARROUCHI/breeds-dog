/**
 * Dog state
 * @author Zouhair
 */
export interface DogState {
  breedName: string;
  imageUrl: string;
}

// initial dog state
export const dogInitialState: DogState = {
  breedName: undefined,
  imageUrl: undefined
};
