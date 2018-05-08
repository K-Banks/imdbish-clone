import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  movies: Movie[] = [
    new Movie('Children of Men', 'R', 'https://ia.media-imdb.com/images/M/MV5BMTQ5NTI2NTI4NF5BMl5BanBnXkFtZTcwNjk2NDA2OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg', '2007', 'In 2027, in a chaotic world in which women have become somehow infertile, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea' , 'https://www.imdb.com/videoplayer/vi1555955993?playlistId=tt0206634&ref_=tt_ov_vi'),
    new Movie('Eat Pray Love', 'PG-13', 'https://ia.media-imdb.com/images/M/MV5BMTY5NDkyNzkyM15BMl5BanBnXkFtZTcwNDQyNDk0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg', '2010', 'A married woman realizes how unhappy her marriage really is, and that her life needs to go in a different direction. After a painful divorce, she takes off on a round-the-world journey to "find herself.' , 'https://www.imdb.com/video/imdb/vi2996176409?playlistId=tt0879870&ref_=tt_ov_vi'),
    new Movie('The Room', 'R', 'https://ia.media-imdb.com/images/M/MV5BMTg4MTU1MzgwOV5BMl5BanBnXkFtZTcwNjM1MTAwMQ@@._V1_UY268_CR12,0,182,268_AL_.jpg', '2003', 'Johnny is a successful banker who lives happily in a San Francisco townhouse with his fiancée, Lisa. One day, inexplicably, she gets bored with him and decides to seduce his best friend, Mark. From there, nothing will be the same again.', 'https://www.imdb.com/videoembed/vi1546846745')
  ];

  movieSelected(clickedMovie: Movie){
    this.router.navigate(['detail', clickedMovie.title]);
  };

  ngOnInit() {
  }

}
