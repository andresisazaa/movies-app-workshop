import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TitleDetails, TitleReview } from 'src/app/models/title.interface';
import { TitlesService } from 'src/app/services/titles/titles.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-title-information',
  templateUrl: './title-information.component.html',
  styleUrls: ['./title-information.component.css'],
})
export class TitleInformationComponent implements OnInit {
  imagesUrl = environment.THEMOVIEDB_API.IMAGES_URL;
  titleDetails: TitleDetails;
  titleReviews: TitleReview[];
  hasReviews: boolean;

  constructor(
    private route: ActivatedRoute,
    private titlesService: TitlesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));
      const type = String(params.get('type'));
      this.getTitleInformation(id, type);
    });
  }

  getTitleInformation(titleId: number, type: string): void {
    this.titlesService
      .getTitleDetails(titleId, type)
      .subscribe((details: TitleDetails) => {
        this.titleDetails = details;
      });
    this.titlesService
      .getTitleReview(titleId, type)
      .subscribe((reviews: TitleReview[]) => {
        this.titleReviews = reviews;
        this.hasReviews = this.titleReviews.length > 0;
      });
  }
}
