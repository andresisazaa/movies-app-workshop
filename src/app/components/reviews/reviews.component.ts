import { Component, Input } from '@angular/core';
import { TitleReview } from 'src/app/models/title.interface';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent {
  @Input() reviews: TitleReview[];
}
