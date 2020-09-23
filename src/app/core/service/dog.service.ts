import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {DefaultDataService, HttpUrlGenerator} from '@ngrx/data';

import {environment} from '../../../environments/environment';
import {DogResponse} from '../model';

@Injectable({providedIn: 'root'})
export class DogService extends DefaultDataService<DogResponse<string[] | { string: string[] }>> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Dog', http, httpUrlGenerator);
  }

  /**
   * get all breeds
   */
  getBreeds(): Observable<string[]> {
    const url = `${environment.api}/breeds/list/all`;

    return super.execute('GET', url)
      .pipe(
        map((response: DogResponse<{ string: string[] }>) => Object.keys(response.message))
      );
  }

  /**
   * get breed images by breed name
   *
   * @param name bred name
   */
  getImagesByBreedName(name: string): Observable<string[]> {
    const url = `${environment.api}/breed/${name}/images`;

    return super.execute('GET', url)
      .pipe(
        map((response: DogResponse<string[]>) => response.message)
      );
  }

  /**
   * download image breed
   *
   * @param url image breed url
   */
  getBreedImageByUrl(url: string): Observable<Blob> {
    return this.execute('GET', url, {}, {responseType: 'blob'});
  }

}
