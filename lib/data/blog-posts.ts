import type { BlogPost } from './types';

// A substantial set of unique, SEO-optimized articles across all categories.
// Each article has proper heading hierarchy, FAQs, internal links, and schema-ready data.
// The infrastructure supports scaling to 100+ articles.

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-cricket-a-complete-beginners-guide',
    title: 'What Is Cricket? A Complete Beginner’s Guide to the Game',
    excerpt:
      'A plain-English introduction to cricket for new fans: the three formats, the basic rules, how a match is won, and what to watch for in your first game.',
    metaTitle: 'What Is Cricket? A Complete Beginner’s Guide (2025)',
    metaDescription:
      'New to cricket? Learn the three formats, the basic rules, how runs are scored, how a match is won, and what to watch for in your first game.',
    category: 'Cricket Rules & Formats',
    tags: ['cricket rules', 'cricket formats', 'beginners guide', 'test cricket', 'odi', 't20'],
    author: 'CricketScoreHQ Editorial Team',
    publishedAt: '2025-07-15',
    readingTime: 12,
    featuredImage: '/images/blog/what-is-cricket.jpg',
    featuredImageAlt: 'A cricket match in progress with bowler, batter, and fielders on a green field',
    keywords: ['what is cricket', 'cricket rules for beginners', 'how cricket works', 'cricket formats explained', 'cricket basics'],
    faqs: [
      {
        question: 'How long does a cricket match last?',
        answer:
          'It depends on the format. A T20 match lasts about three hours, a one-day international lasts about eight hours in a single day, and a Test match is played over up to five days with around six hours of play per day.',
      },
      {
        question: 'How many players are on a cricket team?',
        answer:
          'Each team has 11 players on the field. One player from the batting team is the designated wicketkeeper, and the other ten field when the team is bowling.',
      },
      {
        question: 'What is a century in cricket?',
        answer:
          'A century is when a batter scores 100 or more runs in a single innings. It is one of the most celebrated milestones in the game.',
      },
    ],
    sections: [
      {
        heading: 'What Is Cricket?',
        paragraphs: [
          'Cricket is a bat-and-ball game played between two teams of 11 players on a large oval field, with a 22-yard pitch at the centre. One team bats while the other bowls and fields, and the batting team scores runs by hitting the ball and running between two sets of stumps at each end of the pitch. The bowling team tries to dismiss the batters and limit the runs scored.',
          'Cricket is one of the most popular spectator sports in the world, with an estimated 2.5 billion fans, concentrated in South Asia, Australia, the United Kingdom, Southern Africa, and the Caribbean. It is governed globally by the International Cricket Council (ICC), which organizes the World Cup, the T20 World Cup, and the World Test Championship.',
          'The game’s appeal lies in the balance between individual skill and team strategy. A single batter can win a match, but only if the bowlers and fielders behind them do their jobs. Cricket rewards patience, concentration, and tactical thinking as much as raw athleticism, which is why it has produced some of the most enduring rivalries and stories in all of sport.',
        ],
      },
      {
        heading: 'The Three Main Formats of Cricket',
        paragraphs: [
          'Cricket is unique among major sports in that it is played in three distinct formats, each with its own rhythm, tactics, and traditions. Understanding the difference between the three is the first step to following the game.',
        ],
      },
      {
        heading: 'Test Cricket',
        level: 3,
        paragraphs: [
          'Test cricket is the oldest and longest format, dating back to the first match between Australia and England at the Melbourne Cricket Ground in 1877. A Test match is played over up to five days, with each team batting twice (two innings each) and no limit on the number of overs bowled. Test cricket is widely regarded as the purest test of a cricketer’s skill, stamina, and temperament, and is the format in which the greatest players are most often judged.',
          'Only 12 nations have ever played Test cricket, with the most recent addition being Afghanistan and Ireland in 2018. The ICC World Test Championship, a two-year cycle of bilateral Test series culminating in a one-off final, is the premier Test competition.',
        ],
      },
      {
        heading: 'One-Day International (ODI) Cricket',
        level: 3,
        paragraphs: [
          'One-Day International cricket, or ODI, was introduced in 1971 and is played over a single day, with each team facing a fixed number of overs — currently 50 overs (300 deliveries) per side. The ODI format gave rise to the Cricket World Cup, first held in 1975 and now held every four years. ODIs balance the tactical depth of Test cricket with the time-friendly length of a single day, making them the most-watched bilateral format for much of the last 50 years.',
        ],
      },
      {
        heading: 'Twenty20 (T20) Cricket',
        level: 3,
        paragraphs: [
          'Twenty20 cricket, or T20, was introduced in 2003 and is the shortest international format, with each team facing 20 overs (120 deliveries). A T20 match lasts about three hours, making it ideal for television and family audiences. The T20 format has driven the growth of franchise leagues like the Indian Premier League (IPL), the Big Bash League (BBL), and the Pakistan Super League (PSL), and has transformed the economics of the sport.',
          'The ICC T20 World Cup, first held in 2007, is the premier international T20 competition and is held every two years.',
        ],
      },
      {
        heading: 'The Basic Rules of Cricket',
        paragraphs: [
          'At its core, cricket is simple. The bowler delivers the ball from one end of the pitch toward the batter at the other end. The batter tries to hit the ball and score runs. The bowling team tries to dismiss the batter and limit the runs scored.',
        ],
        list: [
          'Runs are scored by hitting the ball and running between the two wickets, or by hitting the ball to the boundary (4 runs) or over it on the full (6 runs).',
          'A batter is dismissed (out) in several ways: bowled (the ball hits the stumps), caught (a fielder catches the ball on the full), leg before wicket (the ball hits the batter’s leg in line with the stumps), run out (the stumps are broken while the batter is out of the crease), stumped (the wicketkeeper breaks the stumps while the batter is out of the crease), and hit wicket (the batter hits their own stumps).',
          'An over consists of six legal deliveries bowled from one end of the pitch. The next over is bowled from the other end by a different bowler.',
          'In limited-overs cricket (ODI and T20), each team faces a fixed number of overs. In Test cricket, each team bats twice and there is no over limit (though a minimum of 90 overs per day is scheduled).',
          'The team that scores more runs wins. In Test cricket, if neither team has completed its innings by the end of the fifth day, the match is a draw, regardless of the score.',
        ],
      },
      {
        heading: 'How to Watch Your First Cricket Match',
        paragraphs: [
          'If you are watching cricket for the first time, the best approach is to pick a T20 match — it is the shortest and most action-packed format, and you will see the full arc of a match in about three hours. Follow the live scores on ESPNcricinfo or Cricbuzz alongside the broadcast, and use the commentary to understand what is happening.',
          'The key things to watch for are the battle between the bowler and the batter, the fielding positions (which change based on the situation), and the momentum shifts that define a match. Cricket rewards close attention: a single over can change the course of a game.',
          'Once you are comfortable with T20, try a one-day international, and then, if you have the patience, a day of Test cricket. Each format reveals a different layer of the game, and most fans eventually develop a favourite.',
        ],
        callout: 'New to cricket? Start with a T20 match, follow the live scores on ESPNcricinfo or Cricbuzz, and use the commentary to understand the flow of the game. See our complete cricket rules guide for a deeper dive.',
      },
    ],
    relatedSlugs: ['cricket-formats-explained-test-odi-t20-differences', 'how-to-read-a-cricket-scorecard', 'cricket-positions-explained-fielding-positions-guide'],
  },
  {
    slug: 'cricket-formats-explained-test-odi-t20-differences',
    title: 'Cricket Formats Explained: The Differences Between Test, ODI, and T20',
    excerpt:
      'A detailed comparison of the three main cricket formats — Test, ODI, and T20 — covering duration, rules, tactics, and what makes each one unique.',
    metaTitle: 'Cricket Formats Explained: Test vs ODI vs T20 (2025 Guide)',
    metaDescription:
      'Understand the differences between Test, ODI, and T20 cricket: duration, rules, tactics, fielding restrictions, and what makes each format unique.',
    category: 'Cricket Rules & Formats',
    tags: ['test cricket', 'odi', 't20', 'cricket formats', 'ipl'],
    author: 'CricketScoreHQ Editorial Team',
    publishedAt: '2025-07-18',
    readingTime: 10,
    featuredImage: '/images/blog/cricket-formats.jpg',
    featuredImageAlt: 'Three cricket formats compared: Test, ODI, and T20',
    keywords: ['cricket formats', 'test vs odi vs t20', 'cricket format differences', 'types of cricket'],
    faqs: [
      {
        question: 'Which cricket format is the most popular?',
        answer:
          'T20 is the most-watched format globally, driven by franchise leagues like the IPL. Test cricket remains the most prestigious format among players and purists, while ODIs sit in between, anchored by the World Cup.',
      },
      {
        question: 'Can a Test match end in a draw?',
        answer:
          'Yes. If neither team has completed its innings by the end of the fifth day, the match is a draw, regardless of the score. A draw is different from a tie, which occurs when both teams finish with the same total.',
      },
      {
        question: 'How many overs are bowled in each format?',
        answer:
          'In Tests, there is no over limit per innings (a minimum of 90 overs per day is scheduled). In ODIs, each team faces 50 overs. In T20s, each team faces 20 overs.',
      },
    ],
    sections: [
      {
        heading: 'The Three Formats of Cricket Compared',
        paragraphs: [
          'Cricket is the only major team sport played in three distinct formats at the international level, each with its own duration, rules, and tactical character. Understanding the differences between Test, ODI, and T20 cricket is essential for any new fan, and even experienced followers sometimes need a refresher as the rules evolve.',
        ],
        table: {
          headers: ['Feature', 'Test', 'ODI', 'T20'],
          rows: [
            ['Duration', 'Up to 5 days', '1 day (~8 hours)', '~3 hours'],
            ['Overs per innings', 'Unlimited', '50 overs', '20 overs'],
            ['Innings per team', '2', '1', '1'],
            ['Ball colour', 'Red (or pink for day-night)', 'White', 'White'],
            ['Clothing', 'White (or coloured for day-night)', 'Coloured', 'Coloured'],
            ['Premier competition', 'World Test Championship', 'Cricket World Cup', 'T20 World Cup'],
          ],
        },
      },
      {
        heading: 'Test Cricket: The Purest Form',
        paragraphs: [
          'Test cricket is the oldest format, first played in 1877, and is still regarded by most players and serious followers as the purest test of a cricketer’s skill. A Test match is played over up to five days, with each team batting twice. There is no limit on the number of overs a team can bowl, which means the match can swing back and forth across multiple sessions and days.',
          'The defining feature of Test cricket is time. Because a match lasts up to five days, teams must balance attack and defence, manage their bowlers’ workloads, and adapt to a pitch that changes character as the match progresses. A pitch that is flat and benign on day one may turn sharply by day four, rewarding the team that has a spinner in form.',
          'Test cricket is also the format in which the greatest players are most often judged. A batter who averages 50 in Test cricket over a long career is in the elite; a bowler who takes 300 Test wickets is in the pantheon. The ICC World Test Championship, a two-year cycle of bilateral series culminating in a one-off final, is the premier Test competition.',
        ],
      },
      {
        heading: 'One-Day International Cricket: The Middle Ground',
        paragraphs: [
          'One-Day International cricket was born in 1971, when a Test match between Australia and England was abandoned due to rain and a one-day, 40-over match was arranged as a substitute. The format proved so popular that the first Cricket World Cup was held in 1975, and ODIs have been a fixture of the international calendar ever since.',
          'In modern ODI cricket, each team faces 50 overs (300 deliveries), and the match is completed in a single day. The format balances the tactical depth of Test cricket with the time-friendly length of a single day, and the Cricket World Cup, held every four years, is one of the most-watched sporting events in the world.',
          'ODIs have their own tactical character. The first 10 overs of an ODI innings are played under fielding restrictions that limit the number of fielders outside the 30-yard circle, encouraging aggressive batting. The middle overs are about accumulation and wicket preservation, and the final 10 overs are about acceleration. A team that manages these three phases well usually wins.',
        ],
      },
      {
        heading: 'T20 Cricket: The Game-Changer',
        paragraphs: [
          'Twenty20 cricket was introduced in 2003 by the England and Wales Cricket Board as a way to attract younger, family audiences to county cricket. The format — 20 overs per side, about three hours in total — was an instant hit, and within a few years it had spread to the international game and spawned the Indian Premier League, the Big Bash League, and dozens of other franchise leagues.',
          'T20 cricket has transformed the economics and tactics of the sport. Batters have developed new shots (the ramp, the switch hit, the helicopter shot), bowlers have developed new deliveries (the wide yorker, the slower-ball bouncer, the carrom ball), and fielding standards have risen dramatically because every run saved matters in a 120-ball innings.',
          'The ICC T20 World Cup, first held in 2007 and now held every two years, is the premier international T20 competition. The IPL, held annually in India, is the most valuable franchise league in cricket and one of the most valuable in all of sport.',
        ],
      },
      {
        heading: 'Which Format Should You Watch?',
        paragraphs: [
          'If you are new to cricket, start with T20. It is the shortest, most action-packed format, and you will see the full arc of a match in about three hours. Once you are comfortable with the basics, try a one-day international, which gives you more time to appreciate the tactical shifts between phases of the innings.',
          'Test cricket is an acquired taste, but for many fans it is the most rewarding format once it clicks. A great Test match unfolds like a long novel, with subplots, momentum shifts, and a climax that may not come until the final session of the fifth day. If you have a free weekend, try watching a day of a Test match with the live scores alongside the broadcast.',
        ],
        callout: 'Want to go deeper? Read our complete beginner’s guide to cricket for a plain-English introduction to the rules, or our guide to reading a cricket scorecard.',
      },
    ],
    relatedSlugs: ['what-is-cricket-a-complete-beginners-guide', 'how-to-read-a-cricket-scorecard', 'ipl-complete-guide-indian-premier-league'],
  },
  {
    slug: 'how-to-read-a-cricket-scorecard',
    title: 'How to Read a Cricket Scorecard: A Complete Guide for New Fans',
    excerpt:
      'Everything you need to know to read a cricket scorecard: batting, bowling, fall of wickets, extras, and what all the abbreviations mean.',
    metaTitle: 'How to Read a Cricket Scorecard: A Complete Guide (2025)',
    metaDescription:
      'Learn to read a cricket scorecard: batting scorecard, bowling figures, fall of wickets, extras, and what all the abbreviations mean.',
    category: 'Cricket Rules & Formats',
    tags: ['scorecard', 'cricket stats', 'beginners guide', 'cricket notation'],
    author: 'CricketScoreHQ Editorial Team',
    publishedAt: '2025-07-20',
    readingTime: 8,
    featuredImage: '/images/blog/scorecard.jpg',
    featuredImageAlt: 'A cricket scorecard showing batting and bowling figures',
    keywords: ['how to read a cricket scorecard', 'cricket scorecard explained', 'cricket abbreviations', 'batting scorecard'],
    faqs: [
      {
        question: 'What does “b” mean next to a batter’s name?',
        answer:
          '“b” stands for “bowled by” and is followed by the bowler’s name. It means the batter was dismissed because the ball hit the stumps, credited to that bowler.',
      },
      {
        question: 'What does “c” mean in a cricket scorecard?',
        answer:
          '“c” stands for “caught by” and is followed by the fielder’s name and the bowler’s name. It means the batter was caught out — a fielder caught the ball on the full off that bowler’s delivery.',
      },
      {
        question: 'What are extras in a cricket scorecard?',
        answer:
          'Extras are runs added to the team total that are not scored by the bat. They include byes, leg byes, no balls, and wides.',
      },
    ],
    sections: [
      {
        heading: 'Understanding the Cricket Scorecard',
        paragraphs: [
          'A cricket scorecard is a compact summary of a match, showing who scored how many runs, who took which wickets, and how the innings unfolded. For new fans, the scorecard can look like a wall of abbreviations, but once you know the key codes it becomes a powerful tool for understanding a match.',
        ],
      },
      {
        heading: 'The Batting Scorecard',
        paragraphs: [
          'The batting scorecard lists each batter in the order they came to the crease, with their runs, how they were dismissed, and the bowler who dismissed them. The dismissal column is the most important to learn.',
        ],
        list: [
          'b Smith — bowled by Smith (the ball hit the stumps)',
          'c Jones b Smith — caught by Jones, bowled by Smith',
          'lbw b Smith — leg before wicket, bowled by Smith',
          'run out (Jones) — run out, with Jones credited for breaking the stumps',
          'stumped †Jones b Smith — stumped by the wicketkeeper (the † symbol marks the wicketkeeper), bowled by Smith',
          'not out — the batter was not dismissed at the end of the innings',
        ],
      },
      {
        heading: 'The Bowling Scorecard',
        paragraphs: [
          'The bowling scorecard lists each bowler with their figures: overs bowled, maidens (overs in which no runs were scored off the bat), runs conceded, and wickets taken. The most common bowling figures format is “overs–maidens–runs–wickets”, so 10–2–31–3 means 10 overs, 2 maidens, 31 runs, 3 wickets.',
          'The economy rate (runs conceded per over) and the strike rate (balls bowled per wicket) are derived from these figures and are the two most-used bowling statistics in limited-overs cricket.',
        ],
      },
      {
        heading: 'Fall of Wickets and Extras',
        paragraphs: [
          'The fall of wickets line shows the score at which each wicket fell and which batter was dismissed. For example, “1-25 (Rohit, 4.2 ov)” means the first wicket fell at 25, when Rohit was out, in the 4.2nd over. This line tells you the shape of the innings at a glance.',
          'Extras are runs added to the team total that are not scored by the bat. They include byes (runs taken when the batter does not hit the ball and the wicketkeeper does not collect it), leg byes (runs taken off the batter’s body), no balls (illegal deliveries that add a run and a free hit in limited-overs cricket), and wides (deliveries bowled too wide of the batter).',
        ],
        callout: 'Once you can read a scorecard, you can follow any cricket match from the score alone. Pair it with our guide to cricket formats to understand the different rhythms of Test, ODI, and T20 cricket.',
      },
    ],
    relatedSlugs: ['what-is-cricket-a-complete-beginners-guide', 'cricket-formats-explained-test-odi-t20-differences', 'cricket-positions-explained-fielding-positions-guide'],
  },
  {
    slug: 'ipl-complete-guide-indian-premier-league',
    title: 'IPL Complete Guide: Everything You Need to Know About the Indian Premier League',
    excerpt:
      'A comprehensive guide to the Indian Premier League: history, format, teams, auction, prize money, and why the IPL is the biggest T20 league in the world.',
    metaTitle: 'IPL Complete Guide: Everything About the Indian Premier League (2026)',
    metaDescription:
      'The complete guide to the Indian Premier League: history, format, 10 teams, the auction, prize money, records, and why the IPL is the biggest T20 league.',
    category: 'Tournament Guides',
    tags: ['ipl', 'indian premier league', 't20 cricket', 'franchise cricket', 'india cricket'],
    author: 'CricketScoreHQ Editorial Team',
    publishedAt: '2025-07-22',
    readingTime: 14,
    featuredImage: '/images/blog/ipl-guide.jpg',
    featuredImageAlt: 'IPL trophy with stadium lights in the background',
    keywords: ['ipl guide', 'indian premier league', 'ipl format', 'ipl teams', 'ipl history', 'ipl auction'],
    faqs: [
      {
        question: 'How many teams are in the IPL?',
        answer:
          'The IPL currently has 10 teams: Mumbai Indians, Chennai Super Kings, Royal Challengers Bengaluru, Kolkata Knight Riders, Delhi Capitals, Punjab Kings, Rajasthan Royals, Sunrisers Hyderabad, Gujarat Titans, and Lucknow Super Giants.',
      },
      {
        question: 'How does the IPL auction work?',
        answer:
          'Each team has a salary cap and builds its squad through a player auction, where franchises bid for players in different price bands. Teams can retain a limited number of players before each auction.',
      },
      {
        question: 'Who has won the most IPL titles?',
        answer:
          'Mumbai Indians and Chennai Super Kings are tied with five IPL titles each, followed by Kolkata Knight Riders with three.',
      },
    ],
    sections: [
      {
        heading: 'What Is the Indian Premier League?',
        paragraphs: [
          'The Indian Premier League (IPL) is a professional Twenty20 cricket league in India, contested annually by 10 franchise teams representing different cities. Founded by the Board of Control for Cricket in India (BCCI) in 2007, the first IPL season was held in 2008 and has since grown into the most valuable and most-watched cricket league in the world.',
          'The IPL’s combination of world-class players, high production values, and prime-time scheduling has made it a cultural phenomenon in India and a major broadcast property globally. The league’s brand value was estimated at over $11 billion in 2024, making it one of the most valuable sports leagues in the world on a per-match basis.',
        ],
      },
      {
        heading: 'IPL Format and Schedule',
        paragraphs: [
          'The IPL runs for about two months each year, typically from late March to late May. The 10 teams play a round-robin league stage followed by a four-team playoff. Each team plays 14 matches in the league stage — twice against five teams and once against the other four — for a total of 70 league matches.',
          'The top four teams in the points table qualify for the playoffs: Qualifier 1 (1st vs 2nd), the Eliminator (3rd vs 4th), Qualifier 2 (loser of Qualifier 1 vs winner of the Eliminator), and the Final (winner of Qualifier 1 vs winner of Qualifier 2). The team that finishes first gets two chances to reach the final, which is a significant advantage.',
        ],
        table: {
          headers: ['Stage', 'Matches', 'Description'],
          rows: [
            ['League stage', '70', 'Each team plays 14 matches (home and away basis)'],
            ['Qualifier 1', '1', '1st vs 2nd — winner goes to the final'],
            ['Eliminator', '1', '3rd vs 4th — loser is eliminated'],
            ['Qualifier 2', '1', 'Loser of Qualifier 1 vs winner of Eliminator'],
            ['Final', '1', 'Winner of Qualifier 1 vs winner of Qualifier 2'],
          ],
        },
      },
      {
        heading: 'The 10 IPL Teams',
        paragraphs: [
          'The IPL currently has 10 franchises, each representing a city or region in India. The two oldest and most successful franchises are Mumbai Indians and Chennai Super Kings, who between them have won 10 of the 18 IPL titles contested so far.',
        ],
        list: [
          'Mumbai Indians (Mumbai) — 5 titles (2013, 2015, 2017, 2019, 2020)',
          'Chennai Super Kings (Chennai) — 5 titles (2010, 2011, 2018, 2021, 2023)',
          'Kolkata Knight Riders (Kolkata) — 3 titles (2012, 2014, 2024)',
          'Royal Challengers Bengaluru (Bengaluru) — 1 title (2025)',
          'Sunrisers Hyderabad (Hyderabad) — 1 title (2016)',
          'Rajasthan Royals (Jaipur) — 1 title (2008, inaugural season)',
          'Gujarat Titans (Ahmedabad) — 1 title (2022)',
          'Delhi Capitals (Delhi) — 0 titles',
          'Punjab Kings (Mohali) — 0 titles',
          'Lucknow Super Giants (Lucknow) — 0 titles',
        ],
      },
      {
        heading: 'The IPL Auction',
        paragraphs: [
          'The IPL auction is one of the most-watched events in the cricket calendar. Each team has a salary cap (set in Indian rupees) and builds its squad by bidding for players in a player-by-player auction. Players are grouped into price bands, and franchises take turns nominating players for bidding.',
          'Before each auction, teams can retain a limited number of players from their previous squad, with retention fees deducted from their salary cap. The auction is the IPL’s great equaliser: a team that scouts well and bids smartly can assemble a competitive squad regardless of its history.',
        ],
      },
      {
        heading: 'Why the IPL Is the Biggest T20 League in the World',
        paragraphs: [
          'The IPL’s dominance is built on three pillars: the depth of Indian cricket’s fan base, the financial muscle of the BCCI, and the league’s ability to attract the world’s best players. The IPL window is now reserved in the ICC’s Future Tours Programme, meaning no international cricket is scheduled during the IPL, which allows every major player to participate.',
          'The result is a league that combines the best players, the most passionate fans, and the biggest broadcast audience in cricket. The IPL final is routinely one of the most-watched television events in India each year, and the league’s influence on the tactics and economics of global cricket continues to grow.',
        ],
        callout: 'Following the IPL? Check our IPL 2026 series page for the full schedule, live scores, and match previews, and our guide to IPL records for the tournament’s all-time stats.',
      },
    ],
    relatedSlugs: ['cricket-formats-explained-test-odi-t20-differences', 'ipl-records-most-runs-wickets-sixes', 't20-world-cup-complete-guide'],
  },
  {
    slug: 'ipl-records-most-runs-wickets-sixes',
    title: 'IPL Records: Most Runs, Most Wickets, Most Sixes, and More',
    excerpt:
      'The definitive guide to IPL records: most runs, most wickets, most sixes, highest scores, best bowling figures, and the players who hold them.',
    metaTitle: 'IPL Records: Most Runs, Wickets, Sixes & Best Figures (2025)',
    metaDescription:
      'The complete guide to IPL records: most runs, most wickets, most sixes, highest individual scores, best bowling figures, and the players who hold them.',
    category: 'Cricket Records & Stats',
    tags: ['ipl records', 'most runs ipl', 'most wickets ipl', 'virat kohli', 'cricket stats'],
    author: 'CricketScoreHQ Editorial Team',
    publishedAt: '2025-07-24',
    readingTime: 11,
    featuredImage: '/images/blog/ipl-records.jpg',
    featuredImageAlt: 'IPL record-breakers celebrating on the field',
    keywords: ['ipl records', 'most runs in ipl', 'most wickets in ipl', 'ipl most sixes', 'ipl best bowling figures'],
    faqs: [
      {
        question: 'Who has scored the most runs in IPL history?',
        answer:
          'Virat Kohli has scored the most runs in IPL history, with over 8,000 runs, all for Royal Challengers Bengaluru. He is the only player to have played for a single franchise in every IPL season.',
      },
      {
        question: 'Who has taken the most wickets in IPL history?',
        answer:
          'Yuzvendra Chahal has taken the most wickets in IPL history, surpassing Dwayne Bravo and Piyush Chawla. The leg-spinner has been consistently effective across multiple franchises.',
      },
      {
        question: 'What is the highest team total in IPL history?',
        answer:
          'Sunrisers Hyderabad hold the record for the highest team total in IPL history, scoring 287/3 against Royal Challengers Bengaluru in the 2024 season.',
      },
    ],
    sections: [
      {
        heading: 'Most Runs in IPL History',
        paragraphs: [
          'The IPL’s all-time run-scorers list is a who’s who of modern T20 batting. Virat Kohli leads by a wide margin, having played every season for Royal Challengers Bengaluru and accumulated over 8,000 runs. The list below reflects the position as of the end of the 2025 season.',
        ],
        table: {
          headers: ['Rank', 'Player', 'Runs', 'Team(s)', 'Highest Score'],
          rows: [
            ['1', 'Virat Kohli', '8,000+', 'RCB', '113'],
            ['2', 'Shikhar Dhawan', '6,700+', 'DC, SRH, MI, PBKS', '106*'],
            ['3', 'Rohit Sharma', '6,600+', 'DC, MI', '109*'],
            ['4', 'David Warner', '6,500+', 'DD, SRH', '126'],
            ['5', 'Suresh Raina', '5,500+', 'CSK, GL', '100*'],
          ],
        },
      },
      {
        heading: 'Most Wickets in IPL History',
        paragraphs: [
          'The IPL’s all-time wicket-takers list is dominated by spinners and death-overs specialists, reflecting the format’s demand for bowlers who can take wickets and contain runs in the final overs.',
        ],
        table: {
          headers: ['Rank', 'Player', 'Wickets', 'Team(s)', 'Best Figures'],
          rows: [
            ['1', 'Yuzvendra Chahal', '200+', 'MI, RCB, RR', '5/40'],
            ['2', 'Piyush Chawla', '192', 'KXIP, KKR, MI, CSK', '4/17'],
            ['3', 'Dwayne Bravo', '183', 'MI, CSK, GT', '4/42'],
            ['4', 'Bhuvneshwar Kumar', '181', 'PWI, SRH', '5/19'],
            ['5', 'Sunil Narine', '180+', 'KKR', '5/19'],
          ],
        },
      },
      {
        heading: 'Most Sixes in IPL History',
        paragraphs: [
          'The six-hitting charts are led by the most destructive batters of the IPL era. The record for most sixes in IPL history is held by Chris Gayle, whose combination of power and consistency made him the defining T20 batter of the 2010s.',
        ],
        list: [
          'Chris Gayle — 357 sixes (the all-time leader)',
          'Rohit Sharma — 280+ sixes',
          'Virat Kohli — 270+ sixes',
          'MS Dhoni — 250+ sixes',
          'AB de Villiers — 250+ sixes',
        ],
      },
      {
        heading: 'Highest Individual Scores in IPL',
        paragraphs: [
          'The highest individual score in IPL history is Chris Gayle’s 175 not out for Royal Challengers Bengaluru against Pune Warriors in 2013, an innings that included 17 sixes and 13 fours and was scored off just 66 balls. It remains one of the most celebrated individual performances in T20 cricket.',
        ],
      },
      {
        heading: 'Best Bowling Figures in IPL',
        paragraphs: [
          'The best bowling figures in IPL history belong to Alzarri Joseph, who took 6 for 12 for Mumbai Indians against Sunrisers Hyderabad in 2019. The list of best IPL bowling figures is dominated by performances on helpful pitches where the bowler found early rhythm.',
        ],
        callout: 'Records are meant to be broken. Follow our IPL 2026 series page for live scores and the latest record-chasing performances.',
      },
    ],
    relatedSlugs: ['ipl-complete-guide-indian-premier-league', 'cricket-records-most-runs-in-international-cricket', 't20-world-cup-complete-guide'],
  },
  {
    slug: 't20-world-cup-complete-guide',
    title: 'T20 World Cup Complete Guide: History, Format, Records, and 2026 Outlook',
    excerpt:
      'Everything you need to know about the ICC T20 World Cup: history, format, past winners, all-time records, and a look ahead to the 2026 edition in India and Sri Lanka.',
    metaTitle: 'T20 World Cup Complete Guide: History, Format & Records (2026)',
    metaDescription:
      'The complete guide to the ICC T20 World Cup: history, format, past winners, all-time records, and a look ahead to the 2026 edition in India and Sri Lanka.',
    category: 'Tournament Guides',
    tags: ['t20 world cup', 'icc', 't20 cricket', 'world cup', 'international cricket'],
    author: 'CricketScoreHQ Editorial Team',
    publishedAt: '2025-07-26',
    readingTime: 13,
    featuredImage: '/images/blog/t20-world-cup-guide.jpg',
    featuredImageAlt: 'T20 World Cup trophy held aloft by the winning captain',
    keywords: ['t20 world cup guide', 't20 world cup history', 't20 world cup format', 't20 world cup winners', 't20 world cup 2026'],
    faqs: [
      {
        question: 'How often is the T20 World Cup held?',
        answer:
          'The ICC T20 World Cup is currently held every two years, though the schedule has varied in the past. The 2026 edition will be co-hosted by India and Sri Lanka.',
      },
      {
        question: 'Who has won the most T20 World Cup titles?',
        answer:
          'The West Indies and England are tied with two T20 World Cup titles each. India, Pakistan, Australia, and Sri Lanka have each won one title.',
      },
      {
        question: 'How many teams play in the T20 World Cup?',
        answer:
          'The 2026 T20 World Cup will feature 16 teams: the 12 Full Members plus four qualifiers from the ICC T20 World Cup Qualifier.',
      },
    ],
    sections: [
      {
        heading: 'What Is the ICC T20 World Cup?',
        paragraphs: [
          'The ICC Men’s T20 World Cup is the premier international championship of T20 cricket, organized by the International Cricket Council and first held in 2007. The tournament is contested every two years and brings together the top cricket nations and qualifying Associate members to compete for the title of world T20 champions.',
          'The T20 World Cup has grown in parallel with the rise of T20 cricket itself. The inaugural 2007 tournament in South Africa, won by India under MS Dhoni, is widely credited with launching the global T20 boom, and each subsequent edition has drawn larger broadcast audiences and bigger host bids.',
        ],
      },
      {
        heading: 'T20 World Cup Format',
        paragraphs: [
          'The 2026 T20 World Cup will feature 16 teams across four groups of four. The top two teams from each group advance to the Super 8 stage, where the eight qualifiers are split into two groups of four. The top two from each Super 8 group advance to the semi-finals, with the winners meeting in the final.',
          'This format, introduced in the 2024 edition, ensures that every team plays a meaningful number of matches and that the tournament rewards consistency across multiple stages rather than a single knockout.',
        ],
      },
      {
        heading: 'Past T20 World Cup Winners',
        paragraphs: [
          'The T20 World Cup has been won by six different teams across its first nine editions, a testament to the format’s unpredictability. The West Indies and England are the only two-time winners.',
        ],
        table: {
          headers: ['Year', 'Host', 'Winner', 'Runner-up'],
          rows: [
            ['2007', 'South Africa', 'India', 'Pakistan'],
            ['2009', 'England', 'Pakistan', 'Sri Lanka'],
            ['2010', 'West Indies', 'England', 'Australia'],
            ['2012', 'Sri Lanka', 'West Indies', 'Sri Lanka'],
            ['2014', 'Bangladesh', 'Sri Lanka', 'India'],
            ['2016', 'India', 'West Indies', 'England'],
            ['2021', 'UAE & Oman', 'Australia', 'New Zealand'],
            ['2022', 'Australia', 'England', 'Pakistan'],
            ['2024', 'USA & West Indies', 'India', 'South Africa'],
          ],
        },
      },
      {
        heading: 'T20 World Cup Records',
        paragraphs: [
          'The T20 World Cup record books are filled with the names of the game’s most explosive batters and most skilful bowlers. The tournament’s all-time leading run-scorer is Virat Kohli, whose consistency across multiple editions has been remarkable, while the leading wicket-taker is Shakib Al Hasan, the Bangladesh all-rounder.',
          'The highest individual score in T20 World Cup history is 116 not out by Aaron Finch for Australia against England in 2014, while the best bowling figures are 5 for 3 by Sri Lanka’s Ajantha Mendis against Zimbabwe in 2012.',
        ],
      },
      {
        heading: 'Looking Ahead to the 2026 T20 World Cup',
        paragraphs: [
          'The 2026 ICC T20 World Cup will be co-hosted by India and Sri Lanka from February 9 to March 15, 2026. The tournament will feature 16 teams and will open with a marquee India–Pakistan match at Eden Gardens in Kolkata, one of the most-watched fixtures in world sport.',
          'India enter the tournament as defending champions, having won the 2024 edition in the USA and West Indies. The hosts will face strong competition from Australia, England, and South Africa, all of whom have the depth to challenge for the title.',
        ],
        callout: 'Follow our T20 World Cup 2026 series page for the full schedule, fixtures, and live scores as the tournament approaches.',
      },
    ],
    relatedSlugs: ['ipl-complete-guide-indian-premier-league', 'cricket-records-most-runs-in-international-cricket', 'cricket-world-cup-complete-guide'],
  },
  {
    slug: 'cricket-world-cup-complete-guide',
    title: 'Cricket World Cup Complete Guide: History, Format, Records, and 2027 Outlook',
    excerpt:
      'Everything you need to know about the ICC Cricket World Cup: history, format, past winners, all-time records, and a look ahead to the 2027 edition in Southern Africa.',
    metaTitle: 'Cricket World Cup Complete Guide: History, Format & Records (2027)',
    metaDescription:
      'The complete guide to the ICC Cricket World Cup: history, format, past winners, all-time records, and a look ahead to the 2027 edition in South Africa, Zimbabwe, and Namibia.',
    category: 'Tournament Guides',
    tags: ['cricket world cup', 'odi world cup', 'icc', 'world cup history', 'one-day cricket'],
    author: 'CricketScoreHQ Editorial Team',
    publishedAt: '2025-07-28',
    readingTime: 14,
    featuredImage: '/images/blog/world-cup-guide.jpg',
    featuredImageAlt: 'Cricket World Cup trophy on display at a host venue',
    keywords: ['cricket world cup guide', 'world cup history', 'world cup winners', 'world cup records', '2027 world cup'],
    faqs: [
      {
        question: 'How often is the Cricket World Cup held?',
        answer:
          'The ICC Cricket World Cup (ODI format) is held every four years. The next edition will be in 2027, co-hosted by South Africa, Zimbabwe, and Namibia.',
      },
      {
        question: 'Who has won the most Cricket World Cup titles?',
        answer:
          'Australia has won the Cricket World Cup a record six times (1987, 1999, 2003, 2007, 2015, 2023), followed by India and West Indies with two each.',
      },
      {
        question: 'When was the first Cricket World Cup held?',
        answer:
          'The first Cricket World Cup was held in 1975 in England, and was won by the West Indies, who beat Australia in the final at Lord’s.',
      },
    ],
    sections: [
      {
        heading: 'What Is the ICC Cricket World Cup?',
        paragraphs: [
          'The ICC Cricket World Cup is the premier international championship of One-Day International cricket, organized by the International Cricket Council and held every four years. First contested in 1975, the tournament is one of the most-watched sporting events in the world, with the 2023 final between India and Australia drawing a global broadcast audience of hundreds of millions.',
          'The World Cup is the pinnacle of the 50-over format and is the trophy every international cricketer wants to win. Australia are the most successful team in World Cup history, with six titles, followed by India and the West Indies with two each.',
        ],
      },
      {
        heading: 'Cricket World Cup Format',
        paragraphs: [
          'The 2027 Cricket World Cup will be co-hosted by South Africa, Zimbabwe, and Namibia, and will feature 14 teams. The format will use a round-robin league stage in which each team plays every other team once, followed by semi-finals and a final. This format, last used in 2003, rewards consistency across the entire tournament.',
          'The 14 teams will comprise the 10 Full Members that qualify automatically and four teams that come through the ICC Cricket World Cup Qualifier, which includes Associate members.',
        ],
      },
      {
        heading: 'Past Cricket World Cup Winners',
        paragraphs: [
          'The Cricket World Cup has been won by six different teams across its 13 editions. Australia’s dominance, with six titles, is the defining story of the tournament, but each era has produced its own heroes and memorable finals.',
        ],
        table: {
          headers: ['Year', 'Host', 'Winner', 'Runner-up'],
          rows: [
            ['1975', 'England', 'West Indies', 'Australia'],
            ['1979', 'England', 'West Indies', 'England'],
            ['1983', 'England', 'India', 'West Indies'],
            ['1987', 'India & Pakistan', 'Australia', 'England'],
            ['1992', 'Australia & NZ', 'Pakistan', 'England'],
            ['1996', 'India, Pakistan & SL', 'Sri Lanka', 'Australia'],
            ['1999', 'England', 'Australia', 'Pakistan'],
            ['2003', 'South Africa', 'Australia', 'India'],
            ['2007', 'West Indies', 'Australia', 'Sri Lanka'],
            ['2011', 'India, SL & Bangladesh', 'India', 'Sri Lanka'],
            ['2015', 'Australia & NZ', 'Australia', 'New Zealand'],
            ['2019', 'England & Wales', 'England', 'New Zealand'],
            ['2023', 'India', 'Australia', 'India'],
          ],
        },
      },
      {
        heading: 'Cricket World Cup Records',
        paragraphs: [
          'The Cricket World Cup record books are filled with the game’s greatest names. The all-time leading run-scorer in World Cup history is Sachin Tendulkar, who scored 2,278 runs across six tournaments, while the leading wicket-taker is Glenn McGrath, who took 71 wickets across three tournaments.',
          'The highest individual score in a World Cup match is 215 by Chris Gayle for the West Indies against Zimbabwe in 2015, and the best bowling figures are 7 for 15 by Glenn McGrath for Australia against Namibia in 2003.',
        ],
      },
      {
        heading: 'Looking Ahead to the 2027 Cricket World Cup',
        paragraphs: [
          'The 2027 ICC Cricket World Cup will be the first to be held in Africa since 2003. Co-hosted by South Africa, Zimbabwe, and Namibia, the tournament will be the first World Cup to include an Associate member as a co-host, a milestone for the global growth of the game.',
          'Australia enter as defending champions, having won the 2023 edition in India, but the home advantage of South Africa — who reached the World Test Championship final in 2025 — makes them an early contender. India, with their depth of talent, will also be a major threat.',
        ],
        callout: 'Follow our Cricket World Cup 2027 series page for the full schedule, fixtures, and live scores as the tournament approaches.',
      },
    ],
    relatedSlugs: ['t20-world-cup-complete-guide', 'ipl-complete-guide-indian-premier-league', 'cricket-records-most-runs-in-international-cricket'],
  },
  {
    slug: 'cricket-records-most-runs-in-international-cricket',
    title: 'Cricket Records: Most Runs in International Cricket Across All Formats',
    excerpt:
      'The definitive guide to the highest run-scorers in international cricket across Test, ODI, and T20I cricket, with career stats and context.',
    metaTitle: 'Most Runs in International Cricket: All-Time Records (2025)',
    metaDescription:
      'The complete guide to the highest run-scorers in international cricket across Test, ODI, and T20I formats, with career stats and context for each player.',
    category: 'Cricket Records & Stats',
    tags: ['cricket records', 'most runs', 'sachin tendulkar', 'virat kohli', 'test cricket', 'odi cricket'],
    author: 'CricketScoreHQ Editorial Team',
    publishedAt: '2025-07-30',
    readingTime: 12,
    featuredImage: '/images/blog/cricket-records.jpg',
    featuredImageAlt: 'A batter raising their bat after reaching a milestone',
    keywords: ['most runs in international cricket', 'cricket run records', 'sachin tendulkar runs', 'virat kohli runs', 'cricket all-time records'],
    faqs: [
      {
        question: 'Who has scored the most runs in international cricket?',
        answer:
          'Sachin Tendulkar holds the record for the most runs in international cricket, with 34,357 runs across Test, ODI, and T20I cricket. No other player has crossed 30,000 international runs.',
      },
      {
        question: 'Who has scored the most centuries in international cricket?',
        answer:
          'Sachin Tendulkar also holds the record for the most centuries in international cricket, with 100 international hundreds (51 in Tests and 49 in ODIs).',
      },
      {
        question: 'Who is the leading run-scorer in Test cricket?',
        answer:
          'Sachin Tendulkar is the leading run-scorer in Test cricket with 15,921 runs, followed by Ricky Ponting (13,378) and Jacques Kallis (13,289).',
      },
    ],
    sections: [
      {
        heading: 'Most Runs in International Cricket',
        paragraphs: [
          'The all-time international run-scoring charts are dominated by players who combined longevity with consistent performance across all three formats. Sachin Tendulkar’s record of 34,357 international runs is one of the most enduring in the sport, and it is unlikely to be broken soon.',
        ],
        table: {
          headers: ['Rank', 'Player', 'Total Runs', 'Test Runs', 'ODI Runs', 'T20I Runs'],
          rows: [
            ['1', 'Sachin Tendulkar (India)', '34,357', '15,921', '18,426', '0 (did not play T20I)'],
            ['2', 'Kumar Sangakkara (SL)', '28,016', '12,400', '14,224', '1,380'],
            ['3', 'Ricky Ponting (Australia)', '27,483', '13,378', '13,704', '401'],
            ['4', 'Virat Kohli (India)', '27,000+', '9,000+', '14,000+', '4,000+'],
            ['5', 'Mahela Jayawardene (SL)', '25,957', '11,814', '12,750', '1,393'],
          ],
        },
      },
      {
        heading: 'Most Runs in Test Cricket',
        paragraphs: [
          'Test cricket’s all-time run-scorers are the players who combined technical excellence with the stamina to bat for long periods over a long career. Sachin Tendulkar leads with 15,921 runs, a record that has stood since his retirement in 2013 and shows no sign of being challenged soon.',
          'The top five Test run-scorers — Tendulkar, Ponting, Kallis, Dravid, and Sangakkara — all played over 130 Test matches, a testament to the longevity required to accumulate runs at the highest level.',
        ],
      },
      {
        heading: 'Most Runs in ODI Cricket',
        paragraphs: [
          'ODI cricket’s all-time run-scorers are the players who mastered the 50-over format’s balance of accumulation and acceleration. Sachin Tendulkar leads with 18,426 runs, a record built over 463 ODIs across 24 years.',
          'Virat Kohli is the active player closest to Tendulkar’s ODI record, with over 14,000 runs and the most ODI centuries by any player other than Tendulkar. Kohli’s consistency in run-chases is particularly remarkable: he averages over 60 in ODIs batting second.',
        ],
      },
      {
        heading: 'Most Runs in T20I Cricket',
        paragraphs: [
          'T20I cricket is the youngest international format, so its record books are still being written. The leading T20I run-scorers are the players who have adapted most successfully to the format’s demands for aggression and innovation.',
          'Virat Kohli, Rohit Sharma, and Babar Azam are among the leading T20I run-scorers, with Kohli’s average of over 50 in the format a standout statistic. The format’s short history means these records are likely to be broken many times in the coming years.',
        ],
        callout: 'Records are the story of cricket. For more, see our IPL records guide and our T20 World Cup complete guide.',
      },
    ],
    relatedSlugs: ['ipl-records-most-runs-wickets-sixes', 't20-world-cup-complete-guide', 'cricket-world-cup-complete-guide'],
  },
  {
    slug: 'cricket-positions-explained-fielding-positions-guide',
    title: 'Cricket Fielding Positions Explained: A Complete Visual Guide',
    excerpt:
      'A complete guide to every fielding position in cricket: slips, gully, point, cover, mid-off, mid-on, fine leg, third man, and the rest.',
    metaTitle: 'Cricket Fielding Positions Explained: A Complete Guide (2025)',
    metaDescription:
      'Learn every cricket fielding position: slips, gully, point, cover, mid-off, mid-on, square leg, fine leg, third man, and the rest, with a visual guide.',
    category: 'Cricket Rules & Formats',
    tags: ['fielding positions', 'cricket positions', 'cricket rules', 'fielding', 'cricket guide'],
    author: 'CricketScoreHQ Editorial Team',
    publishedAt: '2025-08-01',
    readingTime: 9,
    featuredImage: '/images/blog/fielding-positions.jpg',
    featuredImageAlt: 'A cricket field showing the main fielding positions',
    keywords: ['cricket fielding positions', 'cricket positions explained', 'slips gully point cover', 'cricket field layout'],
    faqs: [
      {
        question: 'Why are there so many fielding positions in cricket?',
        answer:
          'Cricket has many fielding positions because the ball can be hit in almost any direction from the pitch, and the captain places fielders to both take catches and stop runs based on the batter’s strengths and the match situation.',
      },
      {
        question: 'What is the slips position in cricket?',
        answer:
          'The slips are fielders placed behind the batter on the off side, next to the wicketkeeper, to catch edges. There can be one, two, three, or even four slips depending on the format and the bowler.',
      },
      {
        question: 'What is the difference between mid-off and mid-on?',
        answer:
          'Mid-off is on the off side (the side the batter faces), while mid-on is on the leg side (the side behind the batter). Both are straightish positions about 30 yards from the batter.',
      },
    ],
    sections: [
      {
        heading: 'Understanding Cricket Fielding Positions',
        paragraphs: [
          'Cricket has more named fielding positions than any other bat-and-ball sport, because the ball can be hit in almost any direction and the captain has 10 fielders (plus the bowler and wicketkeeper) to place. Each position has a name, and the captain moves fielders between positions based on the batter, the bowler, and the match situation.',
          'Fielding positions are described relative to the batter. The off side is the side the batter faces when standing in their normal stance; the leg side (or on side) is the side behind the batter. Positions are also described as “silly” (very close to the batter), “short” (close), “deep” (far), “square” (at a right angle to the pitch), “fine” (behind the batter), or “straight” (in line with the pitch).',
        ],
      },
      {
        heading: 'Close Catching Positions',
        paragraphs: [
          'The close catching positions are where the most dismissals happen, especially in Test cricket. These fielders stand within 15 yards of the batter and are there to take catches.',
        ],
        list: [
          'Wicketkeeper (†) — stands behind the stumps to take edges, stumpings, and run-outs',
          'Slip(s) — stand next to the wicketkeeper on the off side to catch edges',
          'Gully — stands wider than the slips on the off side',
          'Leg slip — stands next to the wicketkeeper on the leg side (rare in modern cricket)',
          'Silly point — stands very close to the batter on the off side',
          'Short leg — stands very close to the batter on the leg side',
          'Forward short leg — stands in front of the batter on the leg side',
        ],
      },
      {
        heading: 'Off-Side Fielding Positions',
        paragraphs: [
          'The off side is the side the batter faces, and most fielding positions are on the off side because most batters hit the ball there more often. The key off-side positions are:',
        ],
        list: [
          'Point — square of the wicket on the off side',
          'Cover point — between point and cover',
          'Cover — straightish on the off side, about 30 yards out',
          'Extra cover — wider than cover',
          'Mid-off — straightish on the off side, about 30 yards out',
          'Third man — behind the batter on the off side, near the boundary',
          'Deep point / Deep cover / Deep extra cover — the deep versions of those positions, on the boundary',
        ],
      },
      {
        heading: 'Leg-Side Fielding Positions',
        paragraphs: [
          'The leg side is the side behind the batter. Fewer fielders are placed on the leg side in modern cricket because of fielding restrictions, but the positions are still important.',
        ],
        list: [
          'Mid-on — straightish on the leg side, about 30 yards out',
          'Mid-wicket — square-ish on the leg side',
          'Square leg — square of the wicket on the leg side',
          'Fine leg — behind the batter on the leg side, near the boundary',
          'Deep square leg / Deep mid-wicket — the deep versions, on the boundary',
        ],
        callout: 'Fielding positions change with every ball. Watch how the captain moves fielders between deliveries to understand the tactical battle between bowler and batter. See our beginner’s guide to cricket for more.',
      },
    ],
    relatedSlugs: ['what-is-cricket-a-complete-beginners-guide', 'how-to-read-a-cricket-scorecard', 'cricket-formats-explained-test-odi-t20-differences'],
  },
  {
    slug: 'how-drs-works-in-cricket',
    title: 'How DRS Works in Cricket: The Decision Review System Explained',
    excerpt:
      'A complete guide to the Decision Review System (DRS) in cricket: how it works, the technology behind it, and how it has changed umpiring.',
    metaTitle: 'How DRS Works in Cricket: Decision Review System Explained (2025)',
    metaDescription:
      'A complete guide to the Decision Review System (DRS) in cricket: how reviews work, the technology behind ball-tracking and Snicko, and how it has changed umpiring.',
    category: 'Cricket Technology',
    tags: ['drs', 'decision review system', 'cricket technology', 'umpiring', 'ball tracking'],
    author: 'CricketScoreHQ Editorial Team',
    publishedAt: '2025-08-03',
    readingTime: 10,
    featuredImage: '/images/blog/drs.jpg',
    featuredImageAlt: 'A cricketer signalling a DRS review to the umpire',
    keywords: ['how drs works', 'decision review system cricket', 'drs technology', 'ball tracking cricket', 'cricket umpiring technology'],
    faqs: [
      {
        question: 'How many DRS reviews does each team get?',
        answer:
          'In Test cricket, each team gets two reviews per innings, with an extra review restored after 80 overs if a team has used at least one. In ODIs and T20s, each team gets one or two reviews per innings depending on the tournament.',
      },
      {
        question: 'What technology is used in DRS?',
        answer:
          'DRS uses ball-tracking technology (Hawk-Eye) for lbw decisions, Snickometer or UltraEdge for caught-behind decisions, and Hot Spot (thermal imaging) for bat-pad decisions in some series.',
      },
      {
        question: 'When was DRS introduced in cricket?',
        answer:
          'DRS was first used in a Test match in 2008, and was adopted across all formats in the years that followed. It is now standard in all ICC events and most bilateral series.',
      },
    ],
    sections: [
      {
        heading: 'What Is the Decision Review System?',
        paragraphs: [
          'The Decision Review System, commonly known as DRS, is a technology-based process that allows cricket teams to challenge the on-field umpire’s decision. Introduced in Test cricket in 2008, DRS has become a standard part of the game across all formats and has significantly improved the accuracy of umpiring decisions.',
          'Before DRS, the on-field umpire’s decision was final, and obvious errors could not be corrected. DRS gives each team a limited number of reviews per innings, allowing them to refer decisions to the third umpire, who uses ball-tracking, edge-detection, and thermal imaging technology to confirm or overturn the on-field call.',
        ],
      },
      {
        heading: 'How a DRS Review Works',
        paragraphs: [
          'When a batter is given out and believes the decision is wrong, they can signal for a review by making a T-sign with their arms. The bowler or captain can do the same if a batter is given not out and the bowling team believes they should have been dismissed. The review is then referred to the third umpire.',
          'The third umpire reviews the decision using the available technology. For lbw decisions, they use ball-tracking (Hawk-Eye) to determine where the ball pitched, whether it hit the batter in line with the stumps, and whether it would have gone on to hit the stumps. For caught-behind decisions, they use Snickometer or UltraEdge to detect whether the ball touched the bat. For bat-pad decisions, they may use Hot Spot thermal imaging.',
          'The third umpire can only overturn the on-field decision if there is clear evidence to do so. If the evidence is inconclusive, the on-field decision stands — this is known as the “umpire’s call” principle, and it is one of the most debated aspects of DRS.',
        ],
      },
      {
        heading: 'The Technology Behind DRS',
        paragraphs: [
          'DRS relies on several pieces of technology, each developed and refined over years of use in international cricket.',
        ],
        list: [
          'Hawk-Eye — ball-tracking technology that predicts the path of the ball after impact, used for lbw decisions. Six cameras track the ball from release to impact, and a computer model projects its future path.',
          'Snickometer / UltraEdge — audio-based edge detection that amplifies the sound of the ball touching the bat, used for caught-behind decisions.',
          'Hot Spot — thermal imaging that detects the heat generated when the ball touches the bat or pad, used for bat-pad decisions. Hot Spot is not used in all series due to cost.',
          'Ball-tracking replay — slow-motion replays from multiple camera angles, used for run-outs, stumpings, and boundary catches.',
        ],
      },
      {
        heading: 'How DRS Has Changed Cricket',
        paragraphs: [
          'DRS has had a profound effect on cricket. It has improved the accuracy of umpiring decisions, reduced the number of howlers (obvious errors) that can decide a match, and given players and fans more confidence in the fairness of the outcome. It has also changed the tactical dimension of the game, as teams must decide when to use their limited reviews and when to save them.',
          'The “umpire’s call” principle — where the on-field decision stands if the ball-tracking shows the ball just clipping the stumps — remains the most controversial aspect of DRS. Critics argue that it rewards the umpire for a marginal call, while supporters argue that it preserves the authority of the on-field umpire and avoids overturning decisions on the basis of marginal technological predictions.',
        ],
        callout: 'DRS is just one of the technologies changing cricket. See our cricket technology category for more on ball-tracking, analytics, and broadcasting.',
      },
    ],
    relatedSlugs: ['cricket-technology-how-data-analytics-is-changing-cricket', 'what-is-cricket-a-complete-beginners-guide', 'cricket-formats-explained-test-odi-t20-differences'],
  },
  {
    slug: 'cricket-technology-how-data-analytics-is-changing-cricket',
    title: 'How Data Analytics Is Changing Cricket: The Stats Revolution',
    excerpt:
      'A deep dive into how data analytics, wearable sensors, and video analysis are transforming cricket tactics, coaching, and player preparation.',
    metaTitle: 'How Data Analytics Is Changing Cricket (2025 Guide)',
    metaDescription:
      'A deep dive into how data analytics, wearable sensors, and video analysis are transforming cricket tactics, coaching, and player preparation.',
    category: 'Cricket Technology',
    tags: ['cricket analytics', 'data in cricket', 'cricket technology', 'cricket coaching', 'sports analytics'],
    author: 'CricketScoreHQ Editorial Team',
    publishedAt: '2025-08-05',
    readingTime: 11,
    featuredImage: '/images/blog/cricket-analytics.jpg',
    featuredImageAlt: 'A coach reviewing cricket data on a laptop in the dressing room',
    keywords: ['cricket data analytics', 'cricket technology', 'sports analytics cricket', 'cricket coaching technology', 'cricket video analysis'],
    faqs: [
      {
        question: 'How do cricket teams use data analytics?',
        answer:
          'Cricket teams use data analytics to analyse opposition batters’ weaknesses, plan bowling strategies, optimise fielding placements, track player workload, and inform selection decisions. Every major international team now employs dedicated analysts.',
      },
      {
        question: 'What is a cricket data analyst?',
        answer:
          'A cricket data analyst is a specialist who collects, cleans, and interprets cricket data to help coaches and captains make tactical decisions. They use video analysis, ball-tracking data, and statistical modelling to find patterns and weaknesses.',
      },
      {
        question: 'Do cricket players wear sensors?',
        answer:
          'Yes. Many professional cricketers wear GPS and accelerometer sensors during training and matches to track speed, distance covered, heart rate, and bowling workloads, helping to prevent injuries and optimise performance.',
      },
    ],
    sections: [
      {
        heading: 'The Data Revolution in Cricket',
        paragraphs: [
          'Cricket has always been a numbers game — scorecards, averages, and strike rates have been part of the sport since the 19th century. But in the last two decades, the volume and granularity of cricket data have exploded, and data analytics has become an integral part of how professional teams prepare, play, and review.',
          'Every major international team and franchise now employs dedicated analysts, and the insights they produce shape selection, tactics, and in-game decisions in ways that would have been unimaginable a generation ago.',
        ],
      },
      {
        heading: 'How Teams Use Data',
        paragraphs: [
          'Modern cricket teams use data at every stage of preparation and play. Here are the main ways analytics is applied:',
        ],
        list: [
          'Opposition analysis — identifying each opposition batter’s scoring zones, weaknesses against specific types of bowling, and preferred areas to hit the ball, then setting fields and bowling plans to exploit those weaknesses.',
          'Bowling strategies — determining which bowler is most effective against which batter, which lines and lengths to bowl, and which phases of the innings to bowl each bowler.',
          'Fielding placements — using ball-tracking data to place fielders where the batter is most likely to hit the ball, maximising the chance of a catch and minimising the chance of a boundary.',
          'Player workload management — tracking bowling workloads via GPS and accelerometer data to prevent injuries and optimise fast bowler availability across a series or tournament.',
          'Selection decisions — using data to inform squad selection, especially in franchise cricket where teams have large squads and must choose between players with similar profiles.',
        ],
      },
      {
        heading: 'Wearable Technology and Player Tracking',
        paragraphs: [
          'Wearable technology has become standard in professional cricket. GPS vests and accelerometer sensors, worn under the playing shirt, track a player’s speed, distance covered, heart rate, and — for bowlers — the number of deliveries bowled at high intensity. This data is used to manage workloads and prevent the injuries that have become more common as the cricket calendar has grown more crowded.',
          'For fast bowlers in particular, workload management is a science. Teams track the number of balls bowled in matches and training, the intensity of those balls, and the bowler’s biomechanical data, and use this to decide when to rest a bowler and when to push them. The best teams have reduced fast-bowler injuries significantly by using this data well.',
        ],
      },
      {
        heading: 'Video Analysis and the Coach’s iPad',
        paragraphs: [
          'Video analysis is the other pillar of modern cricket preparation. Every international and franchise match is filmed from multiple angles, and analysts break down each batter’s technique, each bowler’s action, and each fielding team’s patterns to find areas to exploit. A coach’s iPad on the team bus is now as common as a cricket bat.',
          'For batters, video analysis can reveal a technical flaw — a head that falls to the off side, a backlift that goes to gully, a trigger movement that leaves them vulnerable to the moving ball. For bowlers, it can reveal a tell in the run-up that gives away the type of delivery, or a release point that has dropped. These insights are shared with players and used to make marginal gains that, over a season, add up to significant improvements.',
        ],
        callout: 'Data analytics is changing every sport, and cricket is no exception. See our guide to DRS for how technology is changing umpiring, and our cricket technology category for more.',
      },
    ],
    relatedSlugs: ['how-drs-works-in-cricket', 'what-is-cricket-a-complete-beginners-guide', 'cricket-records-most-runs-in-international-cricket'],
  },
  {
    slug: 'virat-kohli-complete-player-profile',
    title: 'Virat Kohli: A Complete Player Profile and Career Breakdown',
    excerpt:
      'A detailed profile of Virat Kohli: career statistics, playing style, records, captaincy, and his place among the greatest batters of all time.',
    metaTitle: 'Virat Kohli: Complete Player Profile & Career Stats (2025)',
    metaDescription:
      'A detailed profile of Virat Kohli: career statistics, playing style, records, captaincy, and his place among the greatest batters of all time.',
    category: 'Player Profiles',
    tags: ['virat kohli', 'india cricket', 'player profile', 'batting', 'cricket records'],
    author: 'CricketScoreHQ Editorial Team',
    publishedAt: '2025-08-07',
    readingTime: 13,
    featuredImage: '/images/blog/virat-kohli.jpg',
    featuredImageAlt: 'Virat Kohli batting for India',
    keywords: ['virat kohli profile', 'virat kohli career stats', 'virat kohli records', 'virat kohli batting', 'india cricket team'],
    faqs: [
      {
        question: 'How many centuries has Virat Kohli scored in international cricket?',
        answer:
          'Virat Kohli has scored over 80 international centuries across Test, ODI, and T20I cricket, making him the second-highest century-maker in history after Sachin Tendulkar.',
      },
      {
        question: 'What is Virat Kohli’s highest Test score?',
        answer:
          'Virat Kohli’s highest Test score is 254 not out, scored against South Africa in Pune in 2019.',
      },
      {
        question: 'How many runs has Virat Kohli scored in international cricket?',
        answer:
          'Virat Kohli has scored over 27,000 international runs across all three formats, making him one of the highest run-scorers in the history of the game.',
      },
    ],
    sections: [
      {
        heading: 'Virat Kohli: An Overview',
        paragraphs: [
          'Virat Kohli is an Indian international cricketer and one of the greatest batters of the modern era. Born in Delhi in 1988, Kohli made his international debut in 2008 and has since scored over 27,000 international runs and more than 80 international centuries, placing him second on the all-time century-making list behind Sachin Tendulkar.',
          'Kohli’s career is defined by his consistency across all three formats, his mastery of run-chases in limited-overs cricket, and his intensity as a competitor. He captained India across all three formats from 2014 to 2022, leading the side to the top of the ICC Test rankings and to the final of the inaugural World Test Championship in 2021.',
        ],
      },
      {
        heading: 'Career Statistics',
        paragraphs: [
          'Kohli’s career statistics place him among the greatest batters in the history of the game. His averages across all three formats are remarkable for a player who has played as many matches as he has.',
        ],
        table: {
          headers: ['Format', 'Matches', 'Runs', 'Highest', 'Average', 'Centuries'],
          rows: [
            ['Test', '110+', '9,000+', '254*', '49+', '30+'],
            ['ODI', '290+', '14,000+', '183', '58+', '50+'],
            ['T20I', '110+', '4,000+', '122*', '51+', '1'],
          ],
        },
      },
      {
        heading: 'Playing Style',
        paragraphs: [
          'Kohli’s batting is built on three pillars: a technically sound foundation, exceptional fitness, and an unyielding mental approach. He is not the most naturally gifted timer of the ball in the Tendulkar mould, but he has developed his game through relentless practice and conditioning to the point where he is one of the most complete batters in the world.',
          'In Test cricket, Kohli is at his best when he trusts his defence and waits for the bad ball, as his series-winning hundreds in Australia and England demonstrated. In ODIs, he is the master of the run-chase, with an average of over 60 batting second — a statistic that no other player in history can match. In T20 cricket, he has adapted his game to become a consistent run-scorer even as the format has become more aggressive.',
        ],
      },
      {
        heading: 'Captaincy',
        paragraphs: [
          'Kohli captained India in all three formats from 2014 (full-time from 2017) until 2022, and under his leadership India became the number-one ranked Test side and reached the final of the inaugural World Test Championship in 2021. His captaincy was defined by an emphasis on fast-bowling depth, fitness, and a willingness to chase results overseas.',
          'While Kohli did not win an ICC trophy as captain — India lost the 2017 Champions Trophy final, the 2019 World Cup semi-final, and the 2021 WTC final — his legacy as captain is a Test side that won consistently both at home and away, and a team culture that demanded fitness and intensity.',
        ],
      },
      {
        heading: 'Records and Milestones',
        paragraphs: [
          'Kohli’s record list is among the longest in modern cricket. He is the fastest player to 8,000, 9,000, 10,000, 11,000, 12,000, and 13,000 ODI runs, the fastest to 25,000 international runs, and the second-highest century-maker in international cricket. He holds the record for the most runs in a single IPL season (973 in 2016) and is the leading run-scorer in T20 World Cup history.',
        ],
        callout: 'Kohli is one of the defining players of his generation. See our India team guide for more on the side he led, and our cricket records guide for the all-time numbers.',
      },
    ],
    relatedSlugs: ['cricket-records-most-runs-in-international-cricket', 'ipl-records-most-runs-wickets-sixes', 'india-cricket-team-complete-guide'],
  },
  {
    slug: 'india-cricket-team-complete-guide',
    title: 'India Cricket Team: A Complete Guide to the Men in Blue',
    excerpt:
      'A complete guide to the India national cricket team: history, current squad, captains, home grounds, major titles, and what to expect next.',
    metaTitle: 'India Cricket Team: Complete Guide to the Men in Blue (2025)',
    metaDescription:
      'A complete guide to the India national cricket team: history, current squad, captains, home grounds, major titles, and what to expect next.',
    category: 'Team Guides',
    tags: ['india cricket team', 'men in blue', 'bcci', 'india cricket', 'team guide'],
    author: 'CricketScoreHQ Editorial Team',
    publishedAt: '2025-08-09',
    readingTime: 12,
    featuredImage: '/images/blog/india-team.jpg',
    featuredImageAlt: 'India cricket team celebrating a wicket',
    keywords: ['india cricket team guide', 'india cricket squad', 'india cricket captains', 'bcci', 'india cricket history'],
    faqs: [
      {
        question: 'Who is the current captain of the India cricket team?',
        answer:
          'As of 2025, Rohit Sharma captains the ODI side, Jasprit Bumrah leads the Test side, and Hardik Pandya leads the T20I side. Captains can change based on workload and format.',
      },
      {
        question: 'How many World Cups has India won?',
        answer:
          'India has won the ODI World Cup twice (1983 and 2011), the T20 World Cup twice (2007 and 2024), and the World Test Championship once (2024).',
      },
      {
        question: 'When did India play its first Test match?',
        answer:
          'India played its first Test match in 1932 against England at Lord’s, becoming the sixth team to play Test cricket.',
      },
    ],
    sections: [
      {
        heading: 'The India National Cricket Team',
        paragraphs: [
          'The India national cricket team, known as the Men in Blue and governed by the Board of Control for Cricket in India (BCCI), is one of the most successful and most followed cricket teams in the world. A Full Member of the ICC since 1926, India has won the ODI World Cup twice (1983 and 2011), the T20 World Cup twice (2007 and 2024), and the World Test Championship in 2024.',
          'India’s rise to the top of world cricket has been one of the defining stories of the modern game. From the underdog World Cup win of 1983 to the economic powerhouse of the BCCI and the IPL, India has transformed from a cricket-loving nation into the commercial and competitive centre of the global game.',
        ],
      },
      {
        heading: 'Current Squad',
        paragraphs: [
          'The India squad in 2025 blends experienced legends with a generation of young talent that has emerged through the IPL and the India A system. The team’s depth across all three formats is the deepest in world cricket.',
        ],
        list: [
          'Rohit Sharma — opener, ODI captain, one of the great white-ball batters',
          'Jasprit Bumrah — fast bowler, Test captain, the number-one ranked Test bowler in the world',
          'Virat Kohli — middle-order batter, former captain, one of the greatest of all time',
          'Shubman Gill — opener, the leading young batter in world cricket',
          'Rishabh Pant — wicketkeeper-batter, a game-changer in Test cricket',
          'Ravindra Jadeja — all-rounder, the best fielder in world cricket',
          'Hardik Pandya — all-rounder, T20I captain, the finisher India has long sought',
          'Yashasvi Jaiswal — opener, the breakout star of 2024',
          'Mohammed Siraj — fast bowler, the leader of India’s pace attack in Bumrah’s absence',
          'Kuldeep Yadav — wrist spinner, India’s leading white-ball wicket-taker',
        ],
      },
      {
        heading: 'Captains Through the Years',
        paragraphs: [
          'India has been led by some of the most influential captains in cricket history. Each has left a distinct mark on the team.',
        ],
        list: [
          'CK Nayudu — India’s first Test captain, 1932',
          'Lala Amarnath — led India to its first Test win, 1952',
          'Mansoor Ali Khan Pataudi — the youngest India captain, led the side through the 1960s',
          'Sunil Gavaskar — the great opener, captain through the late 1970s and early 1980s',
          'Kapil Dev — led India to the 1983 World Cup, the defining moment in Indian cricket',
          'Mohammad Azharuddin — captain through the 1990s, led India in three World Cups',
          'Sourav Ganguly — the captain who gave India its aggressive edge, 2000–2005',
          'MS Dhoni — the most decorated India captain, won all three ICC trophies',
          'Virat Kohli — took India to number one in Tests, 2014–2022',
          'Rohit Sharma — led India to the 2024 T20 World Cup title',
        ],
      },
      {
        heading: 'Home Grounds',
        paragraphs: [
          'India play their home matches across the country, with major venues including the Wankhede Stadium in Mumbai, the Eden Gardens in Kolkata, the MA Chidambaram Stadium in Chennai, the M. Chinnaswamy Stadium in Bengaluru, and the Narendra Modi Stadium in Ahmedabad, the largest cricket stadium in the world by capacity.',
          'Each venue has its own character and pitch conditions. The Wankhede and Chinnaswamy typically produce high-scoring white-ball games, while Chennai and Ahmedabad tend to favour spinners as the match progresses.',
        ],
        callout: 'Follow our India series page for live scores and fixtures, and our Virat Kohli player profile for more on one of India’s greatest batters.',
      },
    ],
    relatedSlugs: ['virat-kohli-complete-player-profile', 'cricket-world-cup-complete-guide', 'ipl-complete-guide-indian-premier-league'],
  },
];

// Helper: get all blog slugs for static generation
export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

// Helper: get posts by category slug
export function getPostsByCategory(categorySlug: string): BlogPost[] {
  const categoryMap: Record<string, string> = {
    'match-previews': 'Match Previews',
    'match-reviews': 'Match Reviews',
    'player-profiles': 'Player Profiles',
    'team-guides': 'Team Guides',
    'tournament-guides': 'Tournament Guides',
    'cricket-rules': 'Cricket Rules & Formats',
    'cricket-records': 'Cricket Records & Stats',
    'cricket-news': 'Cricket News',
    'cricket-technology': 'Cricket Technology',
    'cricket-history': 'Cricket History',
  };
  const categoryName = categoryMap[categorySlug];
  if (!categoryName) return [];
  return blogPosts.filter((p) => p.category === categoryName);
}

// Helper: get related posts
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return [];
  const related = post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is BlogPost => Boolean(p));
  if (related.length >= limit) return related.slice(0, limit);
  // Fill with same-category posts
  const sameCategory = blogPosts.filter((p) => p.category === post.category && p.slug !== slug && !post.relatedSlugs.includes(p.slug));
  return [...related, ...sameCategory].slice(0, limit);
}
