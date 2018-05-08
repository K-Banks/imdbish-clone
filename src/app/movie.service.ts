import { Injectable } from '@angular/core';
import { Movie } from './model/movie.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MovieService {
  movies: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.movies = database.list('albums');
  }

  getMovie(){
    return this.movies;
  }

  getMovieById(movieId: string){
    // for (var i = 0; i < movies.length; i++) {
    //   if (movies[i].title === movieId) {
    //     return movies[i];
    //   }
    // }
  }
}
