import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/models/movie';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-detail-index',
  templateUrl: './detail-index.component.html',
  styleUrls: ['./detail-index.component.scss'],
})
export class DetailIndexComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieApiSv: MovieAPIService,
    private movieSv: MovieService
  ) {}

  movieDetail: IMovie | null | undefined;

  fetchMovie = () => {
    const movieId: string = this.activatedRoute.snapshot.params.id;
    this.movieApiSv.fetchMovie(movieId).subscribe(
      (res: any) => {
        this.movieSv.setMovieDetail(res.content);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  ngOnInit(): void {
    this.fetchMovie();
    this.movieSv.movieDetail.subscribe((movie: IMovie | null) => {
      this.movieDetail = movie;
    });
  }
}
