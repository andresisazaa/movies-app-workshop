import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from 'src/app/models/title.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  @Input() title: Title;
  qualification: string;
  imagesUrl = environment.THEMOVIEDB_API.IMAGES_URL;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.qualification = this.getQualification(this.title.voteAverage);
  }

  getTitleDetails(): void {
    this.router.navigate(['title', this.title.type, this.title.id]);
  }

  getQualification(voteAverage: number): string {
    if (voteAverage > 0 && voteAverage <= 6) {
      return 'low';
    }

    if (voteAverage > 6 && voteAverage <= 8) {
      return 'medium';
    }

    if (voteAverage > 8 && voteAverage <= 10) {
      return 'high';
    }

    return 'indeterminate';
  }
}
