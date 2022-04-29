import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  Title,
  TitleDetails,
  TitleReview,
  TitleType,
} from 'src/app/models/title.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TitlesService {
  constructor(private httpClient: HttpClient) {}

  searchTitles(query: string, type: string): Observable<Title[]> {
    const params: HttpParams = new HttpParams()
      .set('api_key', environment.THEMOVIEDB_API.API_KEY)
      .set('language', environment.THEMOVIEDB_API.DEFAULT_LANG)
      .set('query', query)
      .set('include_adult', false);

    return this.httpClient
      .get(`${environment.THEMOVIEDB_API.API_URL}/search/${type}`, { params })
      .pipe(
        map((response: any) => {
          const titles: Title[] = (response.results as any[]).map((title) => ({
            id: title.id,
            name: title.original_title || title.original_name,
            overview: title.overview,
            releaseDate: title.release_date || title.first_air_date,
            voteAverage: title.vote_average,
            voteCount: title.vote_count,
            image: title.poster_path,
            type: type as TitleType,
          }));
          return titles;
        })
      );
  }

  getTitleDetails(titleId: number, type: string): Observable<TitleDetails> {
    const params: HttpParams = new HttpParams()
      .set('api_key', environment.THEMOVIEDB_API.API_KEY)
      .set('language', environment.THEMOVIEDB_API.DEFAULT_LANG);
    return this.httpClient
      .get(`${environment.THEMOVIEDB_API.API_URL}/${type}/${titleId}`, {
        params,
      })
      .pipe(
        map((response: any) => {
          const title = response;
          return {
            id: title.id,
            name: title.original_title || title.original_name,
            overview: title.overview,
            releaseDate: title.release_date || title.first_air_date,
            voteAverage: title.vote_average,
            voteCount: title.vote_count,
            image: title.poster_path,
            type: type as TitleType,
            budget: title.budget || null,
            revenue: title.revenue || null,
            runtime: title.runtime || null,
          };
        })
      );
  }

  getTitleReview(titleId: number, type: string): Observable<TitleReview[]> {
    const params: HttpParams = new HttpParams()
      .set('api_key', environment.THEMOVIEDB_API.API_KEY)
      .set('language', environment.THEMOVIEDB_API.DEFAULT_LANG);
    return this.httpClient
      .get(`${environment.THEMOVIEDB_API.API_URL}/${type}/${titleId}/reviews`, {
        params,
      })
      .pipe(
        map((response: any) => {
          const reviews: TitleReview[] = (response.results as any[]).map(
            (review) => ({
              id: review.id,
              author: review.author,
              content: review.content,
              publishDate: review.created_at,
              lastUpdateDate: review.updated_at,
              url: review.url,
            })
          );

          return reviews;
        })
      );
  }
}
