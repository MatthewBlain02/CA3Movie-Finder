import { Component, OnInit } from '@angular/core';
import { OmdbApiService } from 'src/app/services/omdb-api.service.spec';
import { IOMDBResponce } from 'src/app/omdbresponce';

@Component({
  selector: 'app-searchtitle',
  templateUrl: './searchtitle.component.html',
  styleUrls: ['./searchtitle.component.css']
})
export class SearchtitleComponent implements OnInit {
  movieData: IOMDBResponce | undefined;
  errorMessage:any;

  constructor(private omdbApiService:OmdbApiService) { }

  ngOnInit(): void {
  }

  getMovieDetails(movieName:string):boolean{
    this.omdbApiService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log("Director name : "+ this.movieData.Director);
      }
    )
    return false;
  }
}
