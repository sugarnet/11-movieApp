import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor( private moviesService: MoviesService) {
    this.moviesService.getPopulares().subscribe(data => console.log(data));
  }

  ngOnInit() {
    
  }

}
