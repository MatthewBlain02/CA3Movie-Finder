import { Component, OnInit } from '@angular/core';
import { IOMDBResponce2 } from 'src/app/omdbresponce2';
import { OmdbApiService } from 'src/app/services/omdb-api.service.spec';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieData:IOMDBResponce2 | any
  currentPage = 1
  maxPages = 0
  errorMessage:any

  constructor(private _omdbService:OmdbApiService) { }

  ngOnInit(): void {
  }

  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMoviesData(movieName,this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
        //console.log("Director name : " + this.movieData.Director);
      }
    )
    return false;
  }

  getPreviousPage(movieName:string): boolean {
    this.currentPage--;
    if (this.currentPage<1)
      this.currentPage=1;
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
      }
    )
    return false;
  }

  getNextPage(movieName:string): boolean {
    this.currentPage++;
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
      }
    )
    return false;
  }
}
