import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {Store} from '@ngrx/store';

import {DogService} from '../../core/service';
import {setBreedName} from '../../store/dog.actions';
import {DogState} from '../../store/dog.state';

@Component({
  selector: 'dog-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreedListComponent implements OnInit {

  breedName: string;
  breeds$: Observable<string[]>;

  constructor(
    private readonly store: Store<DogState>,
    private dogService: DogService
  ) {
  }

  ngOnInit(): void {
    // all breed name
    this.breeds$ = this.dogService.getBreeds();
  }

  /**
   * save on store breed name selected
   */
  onChangeBreed(): void {
    this.store.dispatch(setBreedName({breedName: this.breedName}));
  }

}
