import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/models/title.interface';
import { TitlesService } from 'src/app/services/titles/titles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  titles: Title[];
  hasTitles: boolean;
  constructor(private titlesService: TitlesService) {}

  ngOnInit(): void {
    this.searchTitles('Spiderman', 'movie');
  }

  handleSearch(searchData: { query: string; type: string }) {
    this.searchTitles(searchData.query, searchData.type);
  }

  searchTitles(query: string, type: string) {
    this.titlesService
      .searchTitles(query, type)
      .subscribe((titles: Title[]) => {
        this.titles = titles;
        this.hasTitles = titles.length > 0;
      });
  }
}
