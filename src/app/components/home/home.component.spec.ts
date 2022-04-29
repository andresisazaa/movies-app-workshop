import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Title } from 'src/app/models/title.interface';
import { TitlesService } from 'src/app/services/titles/titles.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let titlesService: Partial<TitlesService> = {
    searchTitles: () => {
      return of<Title[]>([]);
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
     
      declarations: [HomeComponent],
      providers: [{ provide: TitlesService, useValue: titlesService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    titlesService = TestBed.inject(TitlesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
