import { Injectable} from "@angular/core";

import{HttpClient, HttpErrorResponse} from "@angular/common/http"
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs";
import { IOMDBResponce } from "../omdbresponce";
import { IOMDBResponce2 } from "../omdbresponce2";

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {
  private _siteUrl="https://www.omdbapi.com"
  private _key="?apikey=f2d4f867&t="
  private _key2="?apikey=f2d4f867&s="
  constructor(private _http:HttpClient){}

  getMovieData(movieName:string):Observable<IOMDBResponce>{
    return this._http.get<IOMDBResponce>(this._siteUrl+this._key+movieName)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    )
  }
  private handleError(err:HttpErrorResponse){
    console.log('OmdbApiService:' + err.message);
    return throwError(() => new Error("OmdbApiService:" + err.message))
  }
  getMoviesData(movieName:string, page:number):Observable<IOMDBResponce2> {
    return this._http.get<IOMDBResponce2>(this._siteUrl+ this._key2 + movieName + "&page=" + page)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
}

