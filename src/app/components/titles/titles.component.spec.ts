import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title, TitleType } from 'src/app/models/title.interface';

import { TitlesComponent } from './titles.component';

describe('TitlesComponent', () => {
  let component: TitlesComponent;
  let fixture: ComponentFixture<TitlesComponent>;
  let titlesMock: Title[] = [
    {
      id: 634649,
      name: 'Spider-Man: No Way Home',
      overview:
        'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      releaseDate: '2021-12-15',
      voteAverage: 8.1,
      voteCount: 12133,
      image: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 557,
      name: 'Spider-Man',
      overview:
        'After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.',
      releaseDate: '2002-05-01',
      voteAverage: 7.2,
      voteCount: 15590,
      image: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 315635,
      name: 'Spider-Man: Homecoming',
      overview:
        'Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.',
      releaseDate: '2017-07-05',
      voteAverage: 7.4,
      voteCount: 18448,
      image: '/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 956421,
      name: 'Spiderman, Save Me',
      overview: 'we all just wanna be famous on the internet.',
      releaseDate: '',
      voteAverage: 0,
      voteCount: 0,
      image: '/ylLqcbXOdkZnJxHc09bybCtUTEb.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 559,
      name: 'Spider-Man 3',
      overview:
        'The seemingly invincible Spider-Man goes up against an all-new crop of villains—including the shape-shifting Sandman. While Spider-Man’s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle.',
      releaseDate: '2007-05-01',
      voteAverage: 6.4,
      voteCount: 11534,
      image: '/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 1930,
      name: 'The Amazing Spider-Man',
      overview:
        "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
      releaseDate: '2012-06-23',
      voteAverage: 6.7,
      voteCount: 14793,
      image: '/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 225914,
      name: 'Spider-Man',
      overview:
        'When an extortionist threatens to force a multi-suicide unless a huge ransom is paid, only Peter Parker can stop him with his new powers as Spider-Man.',
      releaseDate: '1977-09-14',
      voteAverage: 5.5,
      voteCount: 80,
      image: '/jNxRHZ2cxVkNRtxgHuCtv7GY4JP.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 112679,
      name: 'Italian Spiderman',
      overview:
        'This is an Australian-made parody of Italian action–adventure films of the 60s and 70s. and foreign movies that misappropriated popular American superheroes such as the Japanese TV series “Spider-Man”. (It should be noted that the Japanese Spider-Man was officially sanctioned by Marvel and is considered canon in the Marvel universe) This is an Italian take on the comic book superhero Spider-Man.',
      releaseDate: '2007-11-08',
      voteAverage: 7.1,
      voteCount: 42,
      image: '/6KcTa6doU5eJRfAMiwzUasHvqdu.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 429617,
      name: 'Spider-Man: Far From Home',
      overview:
        'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
      releaseDate: '2019-06-28',
      voteAverage: 7.5,
      voteCount: 12465,
      image: '/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 558,
      name: 'Spider-Man 2',
      overview:
        "Peter Parker is going through a major identity crisis. Burned out from being Spider-Man, he decides to shelve his superhero alter ego, which leaves the city suffering in the wake of carnage left by the evil Doc Ock. In the meantime, Parker still can't act on his feelings for Mary Jane Watson, a girl he's loved since childhood. A certain anger begins to brew in his best friend Harry Osborn as well...",
      releaseDate: '2004-06-25',
      voteAverage: 7.2,
      voteCount: 12500,
      image: '/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 102382,
      name: 'The Amazing Spider-Man 2',
      overview:
        'For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.',
      releaseDate: '2014-04-16',
      voteAverage: 6.5,
      voteCount: 10950,
      image: '/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 324857,
      name: 'Spider-Man: Into the Spider-Verse',
      overview:
        'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.',
      releaseDate: '2018-12-06',
      voteAverage: 8.4,
      voteCount: 11194,
      image: '/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 467037,
      name: 'Jack Black: Spider-Man',
      overview:
        "Peter Parker is no ordinary kid, but what if he was played by Jack Black? That's right, you got yourself some pretty irresponsible hero!",
      releaseDate: '2002-06-06',
      voteAverage: 6.6,
      voteCount: 22,
      image: '/rhU1aBcLhbqcesDOn6cjmz6sjos.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 569094,
      name: 'Spider-Man: Across the Spider-Verse',
      overview:
        'Miles Morales returns for the next chapter of the Spider-Verse saga, an epic adventure that will transport Brooklyn’s full-time, friendly neighborhood Spider-Man across the Multiverse to join forces with Gwen Stacy and a new team of Spider-People to face off with a villain more powerful than anything they have ever encountered.',
      releaseDate: '2023-06-02',
      voteAverage: 0,
      voteCount: 0,
      image: '/9clQewUJHnaIONZ84tdCyTg9RGf.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 50410,
      name: 'Spider-Man: The Venom Saga',
      overview:
        'A space-shuttle crash-landing puts the famous web-slinger Spider-Man in contact with a living alien substance that bonds to his suit and enhances his super-powers. Unfortunately, the alien substance begins to change him and he feels the pull of evil, so discards the suit. The evil attaches itself to another host leading to an epic confrontation between good and evil.',
      releaseDate: '1994-06-07',
      voteAverage: 6.5,
      voteCount: 67,
      image: '/ilmsQLtthtcD8EU1k25cp0xFQ9a.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 225925,
      name: 'Spider-Man Strikes Back',
      overview:
        "At the New York State University, one of Peter Parker's tutors has accidentally given three students all the materials they need to create an atomic bomb. While Peter Parker tries to find out what's happened, the police suspect him of the crime, and Peter has to deal with an attractive journalist determined to get an interview with Spider-Man. Then dastardly millionaire Mr. White shows up, and will stop at nothing to get his hands on the atomic bomb. Spider-Man must defeat this scheming villain and stop him blowing up the World Trade Centre.",
      releaseDate: '1978-12-21',
      voteAverage: 5.2,
      voteCount: 35,
      image: '/fb5R5DUOT4NfhZn8903c1gYGHJz.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 911916,
      name: 'Spider-Man: Beyond the Spider-Verse',
      overview:
        'The further continuing story of Miles Morales and the many other Spider-People from different realities.',
      releaseDate: '2024-03-28',
      voteAverage: 0,
      voteCount: 0,
      image: '/4CKwqH2irlJk23koeYJknQMqWL6.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 68658,
      name: 'Spiderman',
      overview: '',
      releaseDate: '1990-01-01',
      voteAverage: 6.8,
      voteCount: 6,
      image: '',
      type: TitleType.MOVIE,
    },
    {
      id: 445033,
      name: 'Spider-Man',
      overview:
        'Spider-man must rescue the beautiful daughter of the evil Dr. Lightning.',
      releaseDate: '1969-01-01',
      voteAverage: 6.5,
      voteCount: 14,
      image: '/iYBfBk1i9zjN9Vybbj8UgTYzkyv.jpg',
      type: TitleType.MOVIE,
    },
    {
      id: 836946,
      name: 'Mi piace Spiderman... e allora?',
      overview:
        'Cloe is a six-year-old girl with a great passion: Spiderman! And for the first day of school she could only choose the folder of her favorite character. But why when she shows off her new backpack, does everyone tell her that "it\'s for boys"? Chloe\'s journey begins with the discovery that there is a universe for males and another for females.',
      releaseDate: '2021-06-04',
      voteAverage: 5,
      voteCount: 1,
      image: '/5VSIPdp6o8a7hjQF4Iw43G29u1H.jpg',
      type: TitleType.MOVIE,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitlesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesComponent);
    component = fixture.componentInstance;
    component.titleList = titlesMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
