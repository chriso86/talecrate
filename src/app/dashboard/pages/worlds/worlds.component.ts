import { Component, OnInit } from '@angular/core';

import { World } from '../../../common/classes/world';
import { Genre } from '../../../common/classes/genre';

@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.css']
})
export class WorldsComponent implements OnInit {
  worlds: World[] = [];
  genres: Genre[] = [];
  filter = {
    genre: new Genre(null, 'Genre', 0)
  }

  constructor() {
    let action = new Genre(1, 'Action', 0.1);
    let fantasy = new Genre(1, 'Fantasy', 0.5);
    let romance = new Genre(1, 'Romance', 0.2);
    let comedy = new Genre(1, 'Comedy', 0.2);

    let world1 = new World(
      1,
      'The Dark World',
      'https://img00.deviantart.net/dc55/i/2014/020/f/0/winter_in_a_dark_world_by_aeflus-d72zvw1.png',
      [action, fantasy]
    );
    world1.createdBy = 'Christopher Oliver';
    world1.createdDate = new Date();

    let world2 = new World(
      1,
      'Imaginary World',
      'https://4.bp.blogspot.com/-pjOe0eC1UfM/VzcdbZOWNcI/AAAAAAAAD5s/h6u4nCXegjoxb-bWE6EsgID4wth5KSckwCLcB/s1600/book_of_imagination.jpg',
      [fantasy, comedy]
    );
    world2.createdBy = 'Mike Turner';
    world2.createdDate = new Date();

    let world3 = new World(
      1,
      'Dead Lands',
      'http://cdn.collider.com/wp-content/uploads/2015/04/the-dead-lands-slice.jpg',
      [action]
    );
    world3.createdBy = 'Dan Miller';
    world3.createdDate = new Date();

    let world4 = new World(
      1,
      'Gavin\'s World',
      'http://www.kissmypixel.com/uploads/projects/50/PMWWWEC_MainImage.jpg',
      [comedy]
    );
    world4.createdBy = 'Christopher Oliver';
    world4.createdDate = new Date();

    let world5 = new World(
      1,
      'The Mirror Dimension',
      'https://img00.deviantart.net/e209/i/2010/104/7/1/the_world_behind_mirror_by_jazzuli.jpg',
      [fantasy, romance]
    );
    world5.createdBy = 'Christopher Oliver';
    world5.createdDate = new Date();

    let world6 = new World(
      1,
      'The Flat World',
      'http://pictures.4ever.eu/data/download/cartoons/digital-art/flat-world,-sci-fi-160890.jpg',
      [comedy]
    );
    world6.createdBy = 'Christopher Oliver';
    world6.createdDate = new Date();

    this.worlds.push(world1);
    this.worlds.push(world2);
    this.worlds.push(world3);
    this.worlds.push(world4);
    this.worlds.push(world5);
    this.worlds.push(world6);

    this.genres.push(action);
    this.genres.push(fantasy);
    this.genres.push(romance);
    this.genres.push(comedy);
  }

  ngOnInit() {
  }

  filterGenre(genre: Genre)
  {
    this.filter.genre = genre;
  }

}
