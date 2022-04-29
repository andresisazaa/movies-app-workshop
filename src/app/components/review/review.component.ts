import { Component, Input } from '@angular/core';
import { TitleReview } from 'src/app/models/title.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent {
  @Input() review: TitleReview;

  getDate(isoDate: string): Date {
    return new Date(isoDate);
  }
}
