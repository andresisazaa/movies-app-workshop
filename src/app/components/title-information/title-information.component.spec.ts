import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { APP_ROUTES } from 'src/app/app.routing.module';
import { TitleDetails, TitleReview, TitleType } from 'src/app/models/title.interface';
import { TitlesService } from 'src/app/services/titles/titles.service';
import { ReviewComponent } from '../review/review.component';
import { ReviewsComponent } from '../reviews/reviews.component';

import { TitleInformationComponent } from './title-information.component';

describe('TitleInformationComponent', () => {
  let component: TitleInformationComponent;
  let fixture: ComponentFixture<TitleInformationComponent>;
  let route: ActivatedRoute;
  let titlesService: Partial<TitlesService> = {
    getTitleDetails: () => {
      return of<TitleDetails>({
        id: 634649,
        name: 'Spider-Man: No Way Home',
        overview:
          'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
        releaseDate: '2021-12-15',
        voteAverage: 8.1,
        voteCount: 12140,
        image: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
        type: TitleType.MOVIE,
        budget: 200000000,
        revenue: 1892000000,
        runtime: 148,
      });
    },
    getTitleReview: () => {
      return of<TitleReview[]>([
        {
          id: '61ba0b24d1444300413e2cbe',
          author: 'garethmb',
          content:
            'Life for Peter Parker (Tom Holland) is complicated thanks to his dual life as Spider-Man and the challenges of being in High School. Unfortunately for him; his best intentions are about to make things much worse in “Spider-Man: No Way Home”.\r\n\r\nTaking place where “Spider-Man: Far From Home” ended; Peter must deal with his secret identity being leaked by Tabloid Journalist J. Jonah Jameson (J.K. Simmons); and the throngs of people, helicopters, and protestors who follow his every move and camp outside his home.\r\n\r\nAs if this was not bad enough; being accused of being a murderer has drawn the attention of the authorities which further complicates his life as does returning to a school where everyone knows his identity.\r\n\r\nDesperate to get away from the constant scrutiny and observation; Peter seeks out Doctor Strange (Benedict Cumberbatch), and asks him to cast a spell that would make the world forget that Peter Parker is Spider-Man.\r\n\r\nStrange agrees but mid-spell Peter requests that there are some exemptions from the spell which include his Girlfriend MJ (Zendaya); his Aunt May (Marisa Tomei); and his friend Ned (Jacob Batalon).\r\n\r\nStrange agrees but in doing so; complications arise which allows entrants from other dimensions to enter their realm. Soon Peter is accosted by villains whom he does not know but seem to know him; that is until he is unmasked and they have no idea who this Peter Parker is before them.\r\n\r\nAs more villains arrive; Peter learns of their fates in their natural dimension and is determined to save them and give them a second chance which puts him at odds with Doctor Strange who says they must go back to whatever fate they had.\r\n\r\nWhat follows is a descent into humor and darkness as Peter despite his best intentions sees the situation go from bad to worse and he must fight to stay true to himself and save the day.\r\n\r\nThe film is a difficult one to review in the fact that there are so many surprise guests, twists, and turns that it is challenging to not reveal anything but suffice it to say that fans should absolutely enjoy it.\r\n\r\nThe film takes its time getting to the action as it has a very slow and deliberate climb and Director Jon Watts is confident enough in the characters and premise that he allows ample time for the characters and setting to build and be established before he gets to the action.\r\n\r\nWhile there is considerable fan service in the film; it never once seems like it is pandering and it all fits very well within the story and the MCU and opens up numerous possibilities for the future.\r\n\r\nThere is a mid-credit scene and a post-credit scene which is basically a trailer and both are very engaging in terms of the possibilities as Marvel has again shown that their plan of interwoven stories and characters continues to deliver and that Spider-Man still remains as popular and engaging as ever.\r\n\r\n4 stars out of 5',
          publishDate: '2021-12-15T15:35:00.071Z',
          lastUpdateDate: '2021-12-15T15:35:00.071Z',
          url: 'https://www.themoviedb.org/review/61ba0b24d1444300413e2cbe',
        },
        {
          id: '61ba6b391c6329006961d6e3',
          author: 'MSB',
          content:
            'FULL SPOILER-FREE REVIEW @ https://www.msbreviews.com/movie-reviews/spider-man-no-way-home-spoiler-free-review\r\n\r\n"Spider-Man: No Way Home is one of the darkest, saddest, emotionally draining entries in the MCU, surpassing all of my expectations.\r\n\r\nDespite a messy, convoluted first half with some pacing issues and occasionally frustrating, poorly placed humor, Jon Watts, Chris McKenna, and Erik Sommers more than compensate these minor issues with some of the best (and brutally violent) Spider-Man action ever witnessed on screen.\r\n\r\nIn addition to this, the surprisingly coherent narrative packs shocking developments and actually offers enough screentime for the villains to significantly impact Peter Parker\'s arc. Unbelievably outstanding performances from everyone involved, especially Tom Holland, Zendaya, and Willem Dafoe.\r\n\r\nA heartfelt, nostalgic homage to the Spider-Man legacy that fans will rewatch countless times, laughing and crying along for many more years to come.\r\n\r\nA memorable, passionate, once-in-a-lifetime cinematic experience."\r\n\r\nRating: A',
          publishDate: '2021-12-15T22:24:58.003Z',
          lastUpdateDate: '2021-12-15T22:24:58.003Z',
          url: 'https://www.themoviedb.org/review/61ba6b391c6329006961d6e3',
        },
        {
          id: '61bbe57fd2f5b5006119efff',
          author: "RADIO1'S MR. MOVIE!-MAD AMI 🌠",
          content:
            '**" THIS IS POP-ENTERTAINMENT; AT ITS FUNNEST,\r\nWILDEST, WHACKIEST, _MOST_ CREATIVE, "SUBLIME-EST"... _B E S T_  💜 😉 😃 "**\r\n\r\nA **-{ _B I G_ }-** Screen **_MINI_** Review ; Film Seen all of FOUR times( soon to be 🖐 ); as of Dec.15, \'2021. \r\n\r\n______________________________________________________ \r\n\r\nTom Holland\'s Peter: { to MJ }: "What\'s that thing you always say? ...expect disappointment..." \r\n\r\nMJ: "No, no, no... NO ...we\'re gonna Kick Some Ass !" \r\n\r\nTom Holland\'s Peter: "O.k !" \r\n\r\nToby Maguire\'s Peter: -{ "Cure. Cure Some Ass" }- . \r\n\r\n**Ned Leeds: CURE THAT ASS !!!**\r\n                                       \r\n______________________________________________________ \r\n\r\n**Somewhere, "In An Alternate Universe",** Spider-Man: No Way Home { to be hitherto referred to as NWH }, is already -Well- on the way to winning the "Best Motion Picture Of The Year" Award. { Here on Earth 🌎, incidentally, the Oscar Awards are, ( as things stand as of -_Now_- ), slated to be held on March 27, 2022 }. And -Speaking- of which, in our -{ OWN }- breathtakingly ravishing universe unfortunately, that particular proposition is likely to be a **-FAR CRY-** at best ; given the Academy\'s characteristic, and seemingly perpetual "Stiff Upper Lip" type of attitude towards the \'Superhero-Supervillain\' genre, in general. However ; with \'Black Panther\' ( 2018 ) and \'Joker\' ( 2019 ) having -BOTH- been nominated for "That... -{ Most }- Coveted Cinematic Prize ...Of All ", the Best Picture Oscar ; I believe that things are, thankfully 🙏, albeit -{ Slowly }-, **changing for the better.**\r\n\r\nYeah, so I\'m er, "Officially" dubbing this "An Easter ( - E g g - ) Movie Released At Christmas", because it -well and truly- does reveal itself as **"The Movie Of A 1,000 Beautiful Surprises" . . . .** and so much, much, much, more. { And as I recently changed my review classification from \'Spoiler-free\' to \'Spoiler\', there is of course, a glaring "Little" reference to ( one ) of the two -most- THRILLING surprises of the picture ( by far ) }. In a nutshell, at this point, I suppose that it would be, well... -{ Suffice for me to say }- ...that NWH "far, far, far, far", surpassed my Hopes for said Theatrical \'Gargantuar\' . . . . and "then some". It has -{ already }- SMASHED "all manner of records" the world over, & is currently the **6th Biggest Box-Office Earner ( E v e r ) ;** -quite possibly- soon to be Number 5 ( 💣 💥❗) ; after barrelling thru to overtake yet -Another- \'Veritable Marvel Collosus\', \'Avengers: Infinity War\' ( 2018 ).\r\n\r\nRight, and -these- were my three biggest takeaways: 1. The "Raw, -{ Unbridled }- Talent" of NWH\'s three ( principal ) youngsters, Tom, Zendaya & Jacob . . . & boy, can the young thespian Mr. Thomas Stanley Holland, ( still barely all of \'25 and two-thirds\' ), **Really, Really ACT 👏❗** 2. How brilliantly -{ ALL }- the \'Multitudinous Trappings Of Contemporary Fame\', ( whether that fame be positive -Or- adverse ), were depicted at the onset of NWH. 3. The totally "Astonishing" standard of -{ All }- of The Special Effects ( both computer generated -as well- as "Live" ), & indeed . . . just the { " A l l - A r o u n d " } level of  cinematic accomplishment  by Jon Watts, Daren Gilford, & Mauro Fiore, ( Director, Production Designer, Cinematographer ), & the -{ Entirety }- of the picture\'s **CREW & CAST,** frankly ....in achieving this thru the -{ Heights }- of a global pandemic.... **K u d o s 🌠❗**\r\n\r\n**Summation:** Just before I go, I feel like I -{ Must }- say this. "If, ( -like yours truly- ), you\'ve been a Loyal, Loving Adorer of the web-slinger for ( pretty much ) your -Entire- life . . . bring TWICE the amount of tissues ; 1 half for the ( -Several- ) Ribtickling \'Funnies\' in NWH, & the other half for the **richly soulful & -{ FABULOUSLY HUMAN }- emotional scenes** that you are unquestionably going to encounter.  Also, -Do- try & stay till the -Very- end of the movie, for not just 1, but in fact, -2- great teaser scenes . . . as you\'ll be -certain- to glean a few -exciting- insights into the near future of the MCU ( Marvel Cinematic Universe ). And here, without further ado, is my final appraisal of Spider-Man: No Way Home, Marvel\'s truly "fresh", and -{ Uplifting }- New Multiplex-Marvel. **" 25 Spider Bitten, -{ Viscerally }- Wowed,  And Indeed, " UTTERLY SMITTEN " Marks Out Of 10 . . . 😃 💥❗ "**',
          publishDate: '2021-12-17T01:18:55.512Z',
          lastUpdateDate: '2022-02-14T14:24:02.914Z',
          url: 'https://www.themoviedb.org/review/61bbe57fd2f5b5006119efff',
        },
        {
          id: '61be4ad9c7176d0060507dc9',
          author: 'Chris Sawin',
          content:
            '_Spider-Man: No Way Home_ isn’t without its flaws, but it is mostly exactly what it’s advertised to be. The film doesn’t necessarily redefine the, “With great power comes great responsibility,” aspect for Tom Holland’s Spider-Man, but it without a doubt gives the MCU version of Spider-Man his version of that principle.\r\n\r\n_No Way Home_ is a nostalgic extravaganza that exceeds expectations and is a perfect and satisfying bookend for the first three Tom Holland _Spider-Man_ movies.\r\n\r\n**Full review**: https://boundingintocomics.com/2021/12/18/spider-man-no-way-home-riding-the-nostalgia-train/',
          publishDate: '2021-12-18T20:55:53.215Z',
          lastUpdateDate: '2021-12-18T20:55:53.215Z',
          url: 'https://www.themoviedb.org/review/61be4ad9c7176d0060507dc9',
        },
        {
          id: '61bee9b9d371970066b9cf85',
          author: 'T D Heath',
          content:
            "Long awaited and very conspiricized, **'Spider-man:No way Home'** Lives up and surpasses hype, The introduction of charcters once thought cordened off into the MCU, came both as a shock and as an eventual certainty. The Pleathora of indephth easter eggs creates awonderful viewing for the spider-man fan but alienates the casual none MCU fanatic viewers. The plot is dense not in fault but in advantage, it crams in expectation with suitable comedy and light heartedness. The director created a a comprehensive journey of emotion with several troughs and many peaks leaving a sense of WOAH at the end.\r\n\r\nOverall, **'Spider-man NWH'** is a Marvel Maniac's Heaven but can ruin marvel experiences for the uniformed viewers spoiling previous films and enjoyment of them. This is not a stand-alone film and for some this amazing but for many of those seeking to enter the universe this is not at all suitable. This and the poorly grand soundtrack make it 4.5 stars.",
          publishDate: '2021-12-19T08:13:45.039Z',
          lastUpdateDate: '2022-01-05T15:15:28.146Z',
          url: 'https://www.themoviedb.org/review/61bee9b9d371970066b9cf85',
        },
        {
          id: '61cd6119a097dc001c3dd6b3',
          author: 'sauceopet',
          content:
            "> With great power, comes great responsibility !\r\n\r\nBest spider man movie I have ever seen. Literally got chills watching it cinema hall. Cinema hall turned into stadium. The screams, the excitement, the hype - all about it is amazing in it's own way. A total fan service.",
          publishDate: '2021-12-30T07:34:49.349Z',
          lastUpdateDate: '2022-01-05T15:10:30.540Z',
          url: 'https://www.themoviedb.org/review/61cd6119a097dc001c3dd6b3',
        },
        {
          id: '61d7cd03a58902008b976594',
          author: 'r96sk',
          content:
            "Wow! Loved it!\r\n\r\nI'd recommend not reading any reviews if you plan to watch it - I didn't and I'm sure glad I didn't! Spoilers inbound!\r\n\r\nWhere to begin? I was not expecting to love this film as much as I do! It surpassed my expectations in every way possible, to the point that I'd say it beats <em>'Avengers: Endgame'</em> as my favourite production from the MCU. This is a next level superhero movie, it's easily the most I've consistently enjoyed a film in this series and genre - no question.\r\n\r\nThe cast are all outstanding, it's ace how they work everyone in from previous iterations of <em>'Spider-Man'</em> - even away from the main universe. Seeing Tom Holland, Andrew Garfield and Tobey Maguire together onscreen as Peter Parker is tremendous. The film does it in the perfect way, at no point does it feel forced or needless and the humour between the trio is excellent; in fact, the whole film is funny when it intends to be.\r\n\r\nZendaya, Benedict Cumberbatch, Jacob Batalon (his best showing of the trilogy), Jon Favreau and Marisa Tomei also add positives things to this 2021 film. Jamie Foxx, Alfred Molina and, most pleasing for me, Willem Dafoe all reprise their characters from past releases and are all a joy. I'm a fan of Dafoe so was particularly happy to see him reappear.\r\n\r\nOnto what we see onscreen. The plot is great and I wouldn't change anything about it, there is one or two things that I had question marks about whilst watching but those quickly dissipated. The pacing is top notch and the music is superb, the respective screen times of everybody was pinpoint and, along with the already noted humour, the film also packs a punch on a more serious level to boot.\r\n\r\nThis really is top tier Marvel! Would watch again, would recommended etc. Awesome!",
          publishDate: '2022-01-07T05:17:55.010Z',
          lastUpdateDate: '2022-01-07T05:17:55.010Z',
          url: 'https://www.themoviedb.org/review/61d7cd03a58902008b976594',
        },
        {
          id: '61d872c5c669ad00904a2397',
          author: 'Adriano',
          content:
            "This is the perfect Marvel movie that isn't an Avengers film. It pays off everything thing it builds up, corrects previous misgivings and really gets the character of Spider-Man right. All while setting things up in an interesting way that it's bound to be fresh next time out. Absolutely loved this.",
          publishDate: '2022-01-07T17:05:09.996Z',
          lastUpdateDate: '2022-01-15T16:17:01.770Z',
          url: 'https://www.themoviedb.org/review/61d872c5c669ad00904a2397',
        },
        {
          id: '62588a74c92c5d00652ee366',
          author: 'JPV852',
          content:
            "Good addition to the Spider-Man franchise and a quasi-reset. Fun seeing the old guard in here with Maguire and Garfield along with their foes and at least their inclusions didn't feel as forced as I feared when this movie was first announced. The relationship between Tom Holland and Zendaya worked better than in Homecoming and even Far From Home. Will be interesting to see where the series goes from here. **4.0/5**",
          publishDate: '2022-04-14T20:56:20.593Z',
          lastUpdateDate: '2022-04-14T20:56:20.593Z',
          url: 'https://www.themoviedb.org/review/62588a74c92c5d00652ee366',
        },
      ]);
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(APP_ROUTES)],
      declarations: [TitleInformationComponent, ReviewsComponent, ReviewComponent],
      providers: [{ provide: TitlesService, useValue: titlesService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleInformationComponent);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
