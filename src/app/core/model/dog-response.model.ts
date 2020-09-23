/**
 * entity response model
 *
 * @author Zouhair
 */
export interface DogResponse<T> {
  status: string;
  message: T;
}
