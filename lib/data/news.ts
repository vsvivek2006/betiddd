import type { NewsItem, LiveMatch } from './types';

export const liveMatches: LiveMatch[] = [
  {
    id: 'ind-eng-5th-test',
    series: 'India vs England Test Series 2025',
    format: 'Test',
    teamA: 'India',
    teamB: 'England',
    teamAScore: '422 & 198/6 (70.2 ov)',
    teamBScore: '389',
    status: 'India lead by 231 runs — Day 2, Stumps',
    venue: 'The Oval, London',
    matchNumber: '5th Test',
  },
  {
    id: 'sl-ban-2nd-odi',
    series: 'Sri Lanka vs Bangladesh ODI Series',
    format: 'ODI',
    teamA: 'Sri Lanka',
    teamB: 'Bangladesh',
    teamAScore: '289/7 (50 ov)',
    teamBScore: '145/4 (28.3 ov)',
    status: 'Bangladesh need 145 runs from 129 balls — Live',
    venue: 'R. Premadasa Stadium, Colombo',
    matchNumber: '2nd ODI',
  },
  {
    id: 'aus-rsa-t20i-3rd',
    series: 'Australia vs South Africa T20I Series',
    format: 'T20I',
    teamA: 'Australia',
    teamB: 'South Africa',
    teamAScore: '201/4 (20 ov)',
    teamBScore: 'Yet to bat',
    status: 'Innings break — South Africa to chase 202',
    venue: 'Adelaide Oval',
    matchNumber: '3rd T20I',
  },
];

export const newsItems: NewsItem[] = [
  {
    slug: 'india-england-fifth-test-day-two-report',
    title: 'India close Day 2 of the Oval Test with a 231-run lead over England',
    excerpt:
      'Jasprit Bumrah’s six-wicket haul and a composed unbeaten 78 from Rishabh Pant put India in command of the fifth Test at The Oval with two days to play.',
    category: 'Match Reviews',
    publishedAt: '2025-08-02',
    image: '/images/news/oval-test.jpg',
    imageAlt: 'The Oval cricket ground during the fifth Test between India and England',
    source: 'CricketScoreHQ Editorial',
    body: [
      'Jasprit Bumrah produced one of the great fast-bowling spells of the modern era on the second day of the fifth Test at The Oval, taking 6 for 41 to bowl England out for 389 in reply to India’s first-innings 422. Rishabh Pant then closed the day unbeaten on 78 from 84 balls, extending India’s lead to 231 with four wickets in hand.',
      'Bumrah’s spell was the story of the day. He dismissed Ollie Pope and Joe Root in successive overs after lunch with deliveries that nipped back late off the seam, then returned to remove Harry Brook and Ben Stokes in a devastating new-ball burst. His control of length — fuller than most fast bowlers bowl in England — was the defining tactical feature.',
      'England’s reply was built around a patient 88 from Harry Brook, who looked set for a hundred until he was caught behind off Bumrah. The lower order added 71 for the last three wickets, but India’s 33-run first-innings lead always looked likely to prove decisive on a pitch beginning to show uneven bounce.',
      'India’s second innings was built around Pant, who survived a tight lbw review on 22 and gradually accelerated through the evening session. With two days remaining and the pitch deteriorating, India are strong favourites to close out the series 3-1.',
    ],
  },
  {
    slug: 'ipl-2026-schedule-announced',
    title: 'IPL 2026 schedule announced: season to begin on March 27 at Wankhede',
    excerpt:
      'The BCCI has confirmed the full schedule for the 19th season of the Indian Premier League, with 74 matches across 12 venues and the final on May 25.',
    category: 'Cricket News',
    publishedAt: '2025-07-30',
    image: '/images/news/ipl-schedule.jpg',
    imageAlt: 'IPL trophy on display ahead of the 2026 season announcement',
    source: 'CricketScoreHQ Editorial',
    body: [
      'The Board of Control for Cricket in India has announced the full schedule for the 2026 Indian Premier League, the 19th season of the tournament. The season will begin on March 27 with a rematch of the 2025 final between Mumbai Indians and Chennai Super Kings at the Wankhede Stadium in Mumbai.',
      'The league stage comprises 70 matches across 12 venues, with each of the 10 franchises playing 14 matches on a home-and-away basis against five teams and once against the other four. The top four teams in the points table will qualify for the playoffs: Qualifier 1, the Eliminator, Qualifier 2, and the Final on May 25.',
      'New venues for the 2026 season include matches in Guwahati and Visakhapatnam, expanding the tournament’s geographical footprint. The BCCI has also confirmed that all evening matches will start at 7:30 PM IST, with afternoon matches at 3:30 PM IST.',
      'The full schedule, with venue and team details, is available on our IPL 2026 series page.',
    ],
  },
  {
    slug: 'bumrah-becomes-number-one-test-bowler',
    title: 'Jasprit Bumrah reclaims the number-one spot in the ICC Test bowling rankings',
    excerpt:
      'Following his six-wicket haul at The Oval, India’s Jasprit Bumrah has returned to the top of the ICC Test bowling rankings, ahead of Kagiso Rabada and Pat Cummins.',
    category: 'Cricket Records & Stats',
    publishedAt: '2025-08-03',
    image: '/images/news/bumrah.jpg',
    imageAlt: 'Jasprit Bumrah celebrating a wicket during the Oval Test',
    source: 'CricketScoreHQ Editorial',
    body: [
      'Jasprit Bumrah has returned to the top of the ICC Test bowling rankings following his player-of-the-match performance in the fifth Test against England at The Oval. Bumrah’s 6 for 41 in England’s first innings was his 11th five-wicket haul in Test cricket and lifted him above South Africa’s Kagiso Rabada and Australia’s Pat Cummins.',
      'Bumrah’s rise to the top of the rankings has been built on remarkable consistency across conditions. In the last two years he has taken wickets at an average of under 20 in India, England, Australia, and South Africa, a feat achieved by very few fast bowlers in the history of the game.',
      'The ICC rankings update places Bumrah on 884 rating points, six ahead of Rabada and 19 ahead of Cummins. With India’s next Test assignment after the England tour coming in the 2025–26 Border-Gavaskar Trophy in Australia, Bumrah has a chance to extend his lead at the top.',
    ],
  },
  {
    slug: 't20-world-cup-2026-tickets-on-sale',
    title: 'ICC T20 World Cup 2026 tickets go on sale across India and Sri Lanka',
    excerpt:
      'The ICC has opened ticket sales for the 2026 T20 World Cup, co-hosted by India and Sri Lanka, with matches scheduled from February 9 to March 15.',
    category: 'Cricket News',
    publishedAt: '2025-07-25',
    image: '/images/news/t20-world-cup.jpg',
    imageAlt: 'T20 World Cup trophy on the tour of host cities',
    source: 'CricketScoreHQ Editorial',
    body: [
      'The International Cricket Council has opened ticket sales for the 2026 ICC Men’s T20 World Cup, co-hosted by India and Sri Lanka from February 9 to March 15, 2026. Tickets are available via the official ICC ticketing portal, with prices tiered by venue and match.',
      'The tournament features 16 teams across four groups, with the top two from each group advancing to the Super 8 stage. The semi-finals are scheduled for March 10 and 12, with the final at the R. Premadasa Stadium in Colombo on March 15.',
      'The opening match on February 9 will see India face Pakistan at Eden Gardens in Kolkata, one of the most anticipated fixtures of the tournament. The ICC has confirmed that all matches will be live-streamed in India on JioCinema and broadcast on the Star Sports network.',
    ],
  },
  {
    slug: 'rohit-sharma-odi-return',
    title: 'Rohit Sharma to return for India’s ODI series against Sri Lanka',
    excerpt:
      'India’s ODI captain Rohit Sharma will return to the side for the three-match ODI series against Sri Lanka in August, following a rest period after the England Test series.',
    category: 'Cricket News',
    publishedAt: '2025-08-01',
    image: '/images/news/rohit-sharma.jpg',
    imageAlt: 'Rohit Sharma batting during a recent ODI for India',
    source: 'CricketScoreHQ Editorial',
    body: [
      'Rohit Sharma will return to lead India in the three-match ODI series against Sri Lanka in August, the BCCI has confirmed. Rohit was rested for the T20I leg of the tour following the five-Test series against England, with Hardik Pandya captaining the T20I side.',
      'The ODI series, part of India’s preparation for the 2027 ODI World Cup, will be played at the R. Premadasa Stadium in Colombo on August 18, 21, and 24. The squad sees the return of Shubman Gill at the top of the order alongside Rohit, with KL Rahul slotting in at number five.',
      'Rohit’s return is a boost for an India side looking to build a settled ODI core ahead of the 2027 World Cup in South Africa, Zimbabwe, and Namibia.',
    ],
  },
  {
    slug: 'wtc-2025-27-cycle-begins',
    title: 'New World Test Championship cycle begins with India’s tour of England',
    excerpt:
      'The 2025–27 ICC World Test Championship cycle is underway, with India’s tour of England the first series of the new two-year window.',
    category: 'Cricket Records & Stats',
    publishedAt: '2025-06-20',
    image: '/images/news/wtc.jpg',
    imageAlt: 'ICC World Test Championship mace on display',
    source: 'CricketScoreHQ Editorial',
    body: [
      'The fourth edition of the ICC World Test Championship is underway, with India’s five-Test tour of England the first series of the new 2025–27 cycle. The cycle runs for two years, with the top two sides in the WTC standings qualifying for the one-off final at Lord’s in June 2027.',
      'The points system for the 2025–27 cycle remains unchanged from the previous edition: 12 points for a win, 6 for a draw, and 4 for a tie, with points percentages used to rank teams because they play different numbers of matches.',
      'Australia are the defending WTC champions, having beaten South Africa in the 2025 final at Lord’s. The 2025–27 cycle will see all nine Test-playing nations compete across 27 bilateral series, with the final scheduled for June 2027.',
    ],
  },
];
