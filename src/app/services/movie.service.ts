import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieList = new BehaviorSubject<IMovie[]>([]);
  movieDetail = new BehaviorSubject<IMovie | null>(null);

  setMovieList = (list: IMovie[]) => {
    this.movieList.next(list);
  };

  setMovieDetail = (movie: IMovie) => {
    this.movieDetail.next(movie);
  };

  // addMovie = (movie: any) => {
  //   const newMovieList = [...this.movieList.getValue(), movie];
  //   this.movieList.next(newMovieList)
  // };
  constructor() {}
}
