import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IMovie } from 'src/app/models/movie';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
})
export class HomeIndexComponent implements OnInit, OnDestroy {
  // dependency injection
  constructor(
    private movieSv: MovieService,
    private movieApiSv: MovieAPIService
  ) {}

  fetchMovieSubscription: Subscription | undefined;
  movieListSubscription: Subscription | undefined;

  isLoading: boolean = false;

  movieList: IMovie[] = [];

  fetchMovies = () => {
    this.isLoading = true;
    this.fetchMovieSubscription = this.movieApiSv.fetchMovies().subscribe(
      (res: any) => {
        this.movieSv.setMovieList(res.content);
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  };

  //lifecycle chạy lúc đầu (tương ứng với didmount của react)
  ngOnInit() {
    this.fetchMovies();

    // lấy dữ liệu từ service và lưu bào biến hứng
    this.movieListSubscription = this.movieSv.movieList.subscribe(
      (movies: IMovie[]) => {
        this.movieList = movies;
      }
    );
  }
  // lifecycle chạy lúc component huỷ (tương ứng với willUnMount của react)
  ngOnDestroy() {
    this.fetchMovieSubscription?.unsubscribe();
    this.movieListSubscription?.unsubscribe;
  }
}
