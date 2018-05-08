import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [MovieService]
})
export class DetailComponent implements OnInit {
  movieId: string;
  movieToDisplay: Movie;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.movieId = urlParameters['title'];
    });
    this.movieToDisplay = this.movieService.getMovieById(this.movieId);
  }

}
