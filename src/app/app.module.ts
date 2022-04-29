import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewComponent } from './components/review/review.component';
import { TitleInformationComponent } from './components/title-information/title-information.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { TitleComponent } from './components/title/title.component';
import { TitlesComponent } from './components/titles/titles.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    ReviewComponent,
    TitleInformationComponent,
    SearcherComponent,
    TitleComponent,
    TitlesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
