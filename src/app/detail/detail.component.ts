import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from '../model/movie.model';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [MovieService]
})
export class DetailComponent implements OnInit {
  movieId: string;
  movieToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.movieId = urlParameters['id'];
    });
    this.movieToDisplay = this.movieService.getMovieById(this.movieId).subscribe(dataLastEmittedFromObserver => {
      this.movieToDisplay = dataLastEmittedFromObserver;
      console.log(this.movieToDisplay);
    });
    console.log(this.movieService.getMovieById(this.movieId));
  }

}
