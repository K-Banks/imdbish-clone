import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

import { MovieService } from '../movie.service';
import { Movie } from '../model/movie.model';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [MovieService]
})
export class HomepageComponent implements OnInit {
  movies: FirebaseListObservable<any[]>;

  constructor(private router: Router, private movieService: MovieService) { }


  movieSelected(clickedMovie){
    this.router.navigate(['detail', clickedMovie.$key]);
  };

  ngOnInit() {
    this.movies = this.movieService.getMovie();
  }

}
