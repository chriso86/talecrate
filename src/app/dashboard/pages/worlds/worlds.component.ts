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
    this.worlds.push(new World());
  }

  ngOnInit() {
  }

  filterGenre(genre: Genre): void
  {
    this.filter.genre = genre;
  }

  clearFilters(): void
  {
    this.filter.genre.clear();
  }
}
