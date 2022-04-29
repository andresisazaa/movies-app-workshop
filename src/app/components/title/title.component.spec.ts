import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_ROUTES } from 'src/app/app.routing.module';
import { Title, TitleType } from 'src/app/models/title.interface';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;
  let router: Router
  let titleMock: Title = {
    id: 634649,
    name: 'Spider-Man: No Way Home',
    overview:
      'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
    releaseDate: '2021-12-15',
    voteAverage: 8.1,
    voteCount: 12133,
    image: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    type: TitleType.MOVIE,
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(APP_ROUTES)],
      declarations: [ TitleComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    router = TestBed.inject(Router)
    component = fixture.componentInstance;
    component.title = titleMock;
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
