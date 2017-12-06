import { Injectable } from '@angular/core';
import { IBuilding } from '../models/building-model';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BuildingsService {

  private API_ENDPOINT = "https://api.myjson.com/bins/165bz3";
  // private API_ENDPOINT = "https://api.myjson.com/bins/mjs4d";

  constructor(private http: HttpClient) { }

  getAllBuildings(): Observable<IBuilding[]> {
    return this.http.get<IBuilding[]>(this.API_ENDPOINT)
      .pipe(
      tap(buildings => this.log(`fetched buildings`)),
      catchError(this.handleError('getAllBuildings', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
    // this.messageService.add('HeroService: ' + message);
  }

}
