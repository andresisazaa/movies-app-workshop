import { Component, Input, OnInit } from '@angular/core';
import { Title } from 'src/app/models/title.interface';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css'],
})
export class TitlesComponent implements OnInit {
  @Input() titleList: Title[];
  constructor() {}

  ngOnInit(): void {
  }
}
