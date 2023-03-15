export interface IOMDBResponce2{
  Search:movieDetails[];
  totalResults:number;
}
interface movieDetails{
  Title:string;
  Year:string;
  Director:string;
  Poster:string;
  Error:string;
}
