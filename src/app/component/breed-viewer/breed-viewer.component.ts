import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

import {Observable, Subject} from 'rxjs';
import {filter, switchMap, takeUntil} from 'rxjs/operators';

import {select, Store} from '@ngrx/store';

import {DogState} from '../../store/dog.state';
import {setImageBreedUrl} from '../../store/dog.actions';
import {DogService} from '../../core/service';
import {selectBreedName, selectImageBreedUrl} from '../../store/dog.selectors';

@Component({
  selector: 'dog-breed-viewer',
  templateUrl: './breed-viewer.component.html',
  styleUrls: ['./breed-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreedViewerComponent implements OnDestroy, OnInit {

  // to unsubscribe observables
  private readonly unSubscriber$: Subject<void> = new Subject<void>();

  breedImages$: Observable<string[]>;

  breedImage: any;

  constructor(
    private readonly store: Store<DogState>,
    private dogService: DogService
  ) {
  }

  ngOnInit(): void {
    this.initImagesBreedLoader();
    this.showImage();
  }

  /**
   * create image breed observable
   * @private
   */
  private initImagesBreedLoader(): void {
    this.breedImages$ = this.store
      .pipe(
        takeUntil(this.unSubscriber$),
        select(selectBreedName),
        filter((breedName: string) => !!breedName),
        switchMap((breedName: string) => this.dogService.getImagesByBreedName(breedName))
      );
  }

  /**
   * download & show image breed
   * @private
   */
  private showImage(): void {

    const next = (image: Blob) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.breedImage = reader.result;
      }, false);
      if (image) {
        reader.readAsDataURL(image);
      }
    };

    this.store
      .pipe(
        takeUntil(this.unSubscriber$),
        select(selectImageBreedUrl),
        filter((url: string) => !!url),
        switchMap((url: string) => this.dogService.getBreedImageByUrl(url))
      ).subscribe(next);

  }

  /**
   * get image breed name from url
   *
   * @param url image url
   */
  getImageName(url: string): string {
    const chunks: string[] = url.split('/');
    return chunks[chunks.length - 1];
  }

  /**
   * save on store selected image breed url
   *
   * @param imageUrl image breed url
   */
  requestImage(imageUrl: string): void {
    this.store.dispatch(setImageBreedUrl({imageUrl}));
  }

  ngOnDestroy(): void {
    this.unSubscriber$.next();
    this.unSubscriber$.complete();
  }

}
