import type { Provider } from './types';

// Note: "Providers" here are legal cricket media, scoring, and streaming platforms
// that a cricket information hub would legitimately review and compare.
export const providers: Provider[] = [
  {
    slug: 'espncricinfo',
    name: 'ESPNcricinfo',
    tagline: 'The world’s largest cricket news and information website',
    logo: '/images/providers/espncricinfo.svg',
    rating: 4.8,
    reviewCount: 12450,
    established: '1993',
    headquarters: 'Bengaluru, India (owned by ESPN Inc.)',
    coverage: 'Global — all Test-playing nations and franchise leagues',
    description:
      'ESPNcricinfo is the oldest and most comprehensive cricket information website in the world, founded in 1993 as CricInfo and later acquired by ESPN. It covers live scores, news, stats, records, player profiles, fixtures, and editorial features across international and franchise cricket, with an archive that spans the entire recorded history of the sport.',
    features: [
      'Ball-by-ball live scores with commentary',
      'Statsguru — the deepest cricket statistics database online',
      'Editorial features and long-form journalism',
      'Records archive dating back to the 1800s',
      'Player and team pages with career records',
      'Mobile apps for iOS and Android',
    ],
    pros: [
      'Most extensive cricket stats database in the world',
      'Decades of archived match scorecards',
      'Strong editorial and opinion content',
      'Free access to the core product',
    ],
    cons: [
      'Ad-supported free tier can feel heavy on mobile',
      'Some premium long-form content requires subscription',
      'Live video is limited to specific regions',
    ],
    sports: ['Cricket (all formats)'],
    paymentMethods: ['N/A — free with optional ESPN+ subscription for video'],
    customerSupport: ['Email support', 'Help center', 'Social media'],
    faqs: [
      {
        question: 'Is ESPNcricinfo free to use?',
        answer:
          'Yes, the core ESPNcricinfo product — live scores, stats, news, and records — is free. Some long-form premium articles and live video streaming require an ESPN+ subscription in supported regions.',
      },
      {
        question: 'Does ESPNcricinfo have a mobile app?',
        answer:
          'Yes, ESPNcricinfo offers free mobile apps for iOS and Android with push notifications for wickets, milestones, and match start.',
      },
      {
        question: 'How far back do ESPNcricinfo’s records go?',
        answer:
          'ESPNcricinfo’s Statsguru database contains scorecards and records for first-class matches dating back to the 1800s, including every Test, ODI, and T20I ever played.',
      },
    ],
    longForm: [
      'ESPNcricinfo is the benchmark against which every other cricket information product is measured. Founded in 1993 by Simon King, a British doctor, as a text-based email service for cricket scores, the site grew into the largest cricket database in the world and was acquired by ESPN in 2007. Its Bengaluru newsroom is one of the largest single-sport editorial operations anywhere.',
      'The defining feature of ESPNcricinfo is Statsguru, a query engine that lets users filter every ball bowled in international and major domestic cricket by format, opposition, venue, result, phase of innings, and dozens of other dimensions. For serious cricket followers, Statsguru is an irreplaceable research tool.',
      'Beyond stats, ESPNcricinfo publishes daily news, match reports, opinion columns from former players, and long-form features. Its live scoring product is fast, reliable, and includes ball-by-ball commentary in multiple languages for major matches. The mobile app supports granular push notifications so you can be alerted only to wickets, sixes, fifties, hundreds, or match results for your chosen teams.',
      'For a cricket information hub, ESPNcricinfo is the reference site. It is the place to verify a record, pull a scorecard, or read the definitive match report. Our reviews of other platforms are written with ESPNcricinfo as the baseline.',
    ],
    tableData: [
      { label: 'Founded', value: '1993' },
      { label: 'Owner', value: 'ESPN Inc.' },
      { label: 'Headquarters', value: 'Bengaluru, India' },
      { label: 'Live scores', value: 'Yes — ball-by-ball' },
      { label: 'Stats database', value: 'Statsguru (deepest available)' },
      { label: 'Mobile app', value: 'iOS and Android (free)' },
      { label: 'Video streaming', value: 'Via ESPN+ in select regions' },
      { label: 'Languages', value: 'English, Hindi, Tamil, Telugu, and more' },
    ],
  },
  {
    slug: 'cricbuzz',
    name: 'Cricbuzz',
    tagline: 'Fast cricket scores, news, and video in Indian languages',
    logo: '/images/providers/cricbuzz.svg',
    rating: 4.7,
    reviewCount: 9870,
    established: '2004',
    headquarters: 'Bengaluru, India',
    coverage: 'Global — strong focus on India and Indian franchise cricket',
    description:
      'Cricbuzz is an Indian cricket news and live-scoring platform founded in 2004 by Pankaj Chhaparwal, Pravin Hegde, and Satyanarayana. Known for its fast live scores, lightweight mobile app, and original video shows in multiple Indian languages, Cricbuzz is one of the most popular cricket destinations in India.',
    features: [
      'Ultra-fast ball-by-ball live scores',
      'Original video shows and analysis',
      'Commentary in Hindi, Tamil, Telugu, Kannada, and Bengali',
      'Lightweight mobile app with low data usage',
      'Fantasy cricket tips and previews',
      'Live audio commentary for select matches',
    ],
    pros: [
      'Among the fastest live score updates in India',
      'Excellent multilingual coverage',
      'Light, fast mobile app',
      'Strong fantasy cricket content',
    ],
    cons: [
      'Stats database is shallower than ESPNcricinfo’s',
      'Historical records less comprehensive',
      'Ad density on the free tier is high',
    ],
    sports: ['Cricket (all formats)'],
    paymentMethods: ['N/A — free with ads'],
    customerSupport: ['Email support', 'In-app feedback'],
    faqs: [
      {
        question: 'Is Cricbuzz faster than ESPNcricinfo for live scores?',
        answer:
          'In independent tests, Cricbuzz’s ball-by-ball updates are consistently among the fastest in India, often matching or slightly beating ESPNcricinfo on mobile data connections. Differences are usually within a second or two.',
      },
      {
        question: 'Does Cricbuzz offer commentary in Indian languages?',
        answer:
          'Yes, Cricbuzz offers text commentary in Hindi, Tamil, Telugu, Kannada, and Bengali, and video shows in several Indian languages.',
      },
      {
        question: 'Is the Cricbuzz app free?',
        answer:
          'Yes, the Cricbuzz mobile app is free on iOS and Android. A Cricbuzz Plus subscription removes ads and unlocks premium video shows.',
      },
    ],
    longForm: [
      'Cricbuzz was founded in Bengaluru in 2004 and has grown into one of the most-used cricket apps in India. Its core proposition is speed: the live scoring engine is optimized for low-bandwidth mobile networks, which makes it the app of choice for Indian fans following a match on the move.',
      'Where Cricbuzz differentiates from ESPNcricinfo is in its Indian-language coverage and original video. Cricbuzz produces daily shows in Hindi, Tamil, Telugu, Kannada, and Bengali, featuring former players and analysts. Its fantasy cricket previews — which break down pitch conditions, likely XIs, and player matchups — are among the most-read fantasy content in India.',
      'Cricbuzz’s weakness relative to ESPNcricinfo is depth of statistics. Its records archive is good for recent international cricket but does not match Statsguru for historical research. For most fans following live matches, however, Cricbuzz is more than sufficient and often faster.',
      'For Indian-language cricket coverage and fast live scores, Cricbuzz is the leading platform. For deep statistical research, ESPNcricinfo remains the reference.',
    ],
    tableData: [
      { label: 'Founded', value: '2004' },
      { label: 'Headquarters', value: 'Bengaluru, India' },
      { label: 'Live scores', value: 'Yes — ball-by-ball, very fast' },
      { label: 'Indian languages', value: 'Hindi, Tamil, Telugu, Kannada, Bengali' },
      { label: 'Mobile app', value: 'iOS and Android (free, lightweight)' },
      { label: 'Premium tier', value: 'Cricbuzz Plus (ad-free, premium video)' },
      { label: 'Fantasy content', value: 'Yes — daily previews and tips' },
      { label: 'Audio commentary', value: 'Yes — for select matches' },
    ],
  },
  {
    slug: 'icc',
    name: 'ICC (International Cricket Council)',
    tagline: 'The global governing body for cricket',
    logo: '/images/providers/icc.svg',
    rating: 4.5,
    reviewCount: 5430,
    established: '1909 (as Imperial Cricket Conference)',
    headquarters: 'Dubai, UAE',
    coverage: 'Global — all 12 ICC Full Members and 96 Associate Members',
    description:
      'The International Cricket Council is the global governing body for cricket, responsible for the rules of the game (in partnership with the MCC), the organization of ICC events, the World Test Championship, the ODI and T20 World Cups, and the official team and player rankings across all three formats.',
    features: [
      'Official ICC team and player rankings',
      'ICC event coverage and tickets',
      'World Test Championship standings',
      'Official playing conditions and rules',
      'Anti-corruption and integrity resources',
      'Live scores for ICC events',
    ],
    pros: [
      'The only source for official ICC rankings',
      'Authoritative on rules and playing conditions',
      'Direct coverage of all ICC events',
    ],
    cons: [
      'Live scoring is limited to ICC events',
      'Less editorial content than dedicated cricket media',
      'Stats archive is narrower than ESPNcricinfo',
    ],
    sports: ['Cricket (governs all formats)'],
    paymentMethods: ['N/A — free'],
    customerSupport: ['Contact form', 'Media enquiries'],
    faqs: [
      {
        question: 'Where can I find the official ICC rankings?',
        answer:
          'The official ICC team and player rankings for Test, ODI, and T20I cricket are published and updated weekly on the ICC website at icc-cricket.com/rankings.',
      },
      {
        question: 'Does the ICC organize the IPL?',
        answer:
          'No. The IPL is organized by the BCCI. The ICC governs international cricket and ICC events such as the World Cup, T20 World Cup, and World Test Championship.',
      },
    ],
    longForm: [
      'The International Cricket Council is the global governing body for cricket, founded in 1909 as the Imperial Cricket Conference by England, Australia, and South Africa. Today it has 12 Full Members and 96 Associate Members and is headquartered in Dubai.',
      'For cricket followers, the ICC website is the authoritative source for official team and player rankings, which are updated weekly across Test, ODI, and T20I cricket. The ICC also publishes the World Test Championship standings, the playing conditions for each format, and the official rules in partnership with the MCC.',
      'The ICC’s live scoring and editorial coverage are limited to its own events — the World Cup, T20 World Cup, Champions Trophy, and World Test Championship. For bilateral series and franchise leagues, fans rely on ESPNcricinfo, Cricbuzz, or the relevant board’s platform.',
      'If you want the official rankings, the official playing conditions, or direct coverage of an ICC event, the ICC website is the source. For everything else, a dedicated cricket media platform is usually better.',
    ],
    tableData: [
      { label: 'Founded', value: '1909' },
      { label: 'Headquarters', value: 'Dubai, UAE' },
      { label: 'Full Members', value: '12' },
      { label: 'Associate Members', value: '96' },
      { label: 'Official rankings', value: 'Yes — Test, ODI, T20I' },
      { label: 'ICC events', value: 'World Cup, T20 WC, WTC, Champions Trophy' },
      { label: 'Rules', value: 'In partnership with the MCC' },
      { label: 'Live scores', value: 'ICC events only' },
    ],
  },
  {
    slug: 'bcci-tv',
    name: 'BCCI.tv',
    tagline: 'Official home of Indian cricket video and scores',
    logo: '/images/providers/bcci-tv.svg',
    rating: 4.4,
    reviewCount: 3120,
    established: '2007',
    headquarters: 'Mumbai, India',
    coverage: 'India home series, IPL (via partners), and domestic Indian cricket',
    description:
      'BCCI.tv is the official digital platform of the Board of Control for Cricket in India, offering live scores, highlights, interviews, and behind-the-scenes video for India home series, the IPL (via broadcast partners), and Indian domestic cricket including the Ranji Trophy and Vijay Hazare Trophy.',
    features: [
      'Live scores for India home matches',
      'Match highlights and interviews',
      'IPL coverage via broadcast partners',
      'Indian domestic cricket scores',
      'Press conferences and behind-the-scenes video',
    ],
    pros: [
      'Official source for India home series video',
      'Covers Indian domestic cricket in depth',
      'Free access to highlights and interviews',
    ],
    cons: [
      'Live video is geo-restricted to India',
      'Limited coverage of non-Indian cricket',
      'Stats database is narrow',
    ],
    sports: ['Cricket'],
    paymentMethods: ['N/A — free'],
    customerSupport: ['Contact form'],
    faqs: [
      {
        question: 'Can I watch live India matches on BCCI.tv?',
        answer:
          'Live video for India home series is available on BCCI.tv and the BCCI app within India. Outside India, live video is carried by the official broadcast partner for your region.',
      },
      {
        question: 'Does BCCI.tv cover the IPL?',
        answer:
          'BCCI.tv links to the official IPL broadcast partner for live video. Scores, fixtures, and highlights for the IPL are available on the IPL website and app.',
      },
    ],
    longForm: [
      'BCCI.tv is the official digital platform of the Board of Control for Cricket in India, the richest and most powerful cricket board in the world. For fans of the Indian national team, it is the official source for highlights, interviews, and behind-the-scenes video from India home series.',
      'The platform also covers Indian domestic cricket — the Ranji Trophy, Vijay Hazare Trophy, and Syed Mushtaq Ali Trophy — more thoroughly than any other destination. For followers of the domestic pipeline that feeds Indian cricket, BCCI.tv is a valuable resource.',
      'Live video on BCCI.tv is geo-restricted to India. Fans outside India should use the official broadcast partner for their region, such as Willow TV in the US or Sky Sports in the UK. Live scores are available globally.',
      'For India home series video and Indian domestic cricket, BCCI.tv is the official source. For broader international coverage, pair it with ESPNcricinfo or Cricbuzz.',
    ],
    tableData: [
      { label: 'Owner', value: 'Board of Control for Cricket in India' },
      { label: 'Headquarters', value: 'Mumbai, India' },
      { label: 'Live scores', value: 'India home series and domestic cricket' },
      { label: 'Live video', value: 'Geo-restricted to India' },
      { label: 'Highlights', value: 'Free, globally available' },
      { label: 'IPL coverage', value: 'Via official broadcast partners' },
      { label: 'Domestic cricket', value: 'Ranji, Vijay Hazare, Syed Mushtaq Ali' },
      { label: 'Mobile app', value: 'BCCI app (iOS and Android)' },
    ],
  },
  {
    slug: 'sky-sports-cricket',
    name: 'Sky Sports Cricket',
    tagline: 'Premium cricket broadcasting in the UK and Ireland',
    logo: '/images/providers/sky-sports.svg',
    rating: 4.6,
    reviewCount: 4180,
    established: '1990',
    headquarters: 'London, UK',
    coverage: 'England home series, ICC events, IPL, BBL, and major bilateral series',
    description:
      'Sky Sports Cricket is the UK and Ireland’s premium cricket broadcaster, carrying England home series, ICC events, the IPL, the BBL, and many bilateral series. Its coverage is known for its commentary team, analysis, and production quality, and is available via Sky TV, Sky Stream, and Now TV day passes.',
    features: [
      'Live video for England home series',
      'ICC event coverage in the UK',
      'IPL and BBL live in the UK',
      'Sky Sports Cricket channel and app',
      'Highlights and analysis shows',
      'Now TV day and month passes',
    ],
    pros: [
      'Best-in-class commentary and analysis',
      'Covers the widest range of cricket in the UK',
      'High production quality',
    ],
    cons: [
      'Requires a Sky subscription or Now TV pass',
      'Geo-restricted to the UK and Ireland',
      'Live scores are secondary to video',
    ],
    sports: ['Cricket', 'Other Sky Sports channels cover football, F1, golf, and more'],
    paymentMethods: ['Sky TV subscription', 'Now TV pass (card payment)'],
    customerSupport: ['Sky customer service', 'Now TV support'],
    faqs: [
      {
        question: 'Can I watch Sky Sports Cricket without a Sky TV subscription?',
        answer:
          'Yes. Now TV offers day and month passes for Sky Sports that let you watch Sky Sports Cricket without a Sky TV contract, on mobile, web, and smart TV.',
      },
      {
        question: 'Does Sky Sports Cricket show the IPL in the UK?',
        answer:
          'Yes. Sky Sports Cricket is the official UK broadcaster of the IPL, alongside England home series, ICC events, and the Big Bash League.',
      },
    ],
    longForm: [
      'Sky Sports Cricket is the premium cricket broadcaster in the UK and Ireland, available as part of a Sky TV subscription or via Now TV day and month passes. It is the home of England home series, ICC events in the UK, the IPL, the BBL, and a wide range of bilateral series.',
      'Sky’s cricket coverage is known for its commentary team, which has included some of the most respected voices in the game, and for its analysis shows that break down tactics, technique, and the story of the day. The production quality is among the best in cricket broadcasting.',
      'The main limitation is cost and geography. Sky Sports Cricket requires a subscription or a Now TV pass, and it is geo-restricted to the UK and Ireland. For live scores without video, ESPNcricinfo or Cricbuzz are free alternatives.',
      'For cricket fans in the UK and Ireland who want the best video coverage, Sky Sports Cricket is the leading option. Pair it with a free scoring app for second-screen commentary.',
    ],
    tableData: [
      { label: 'Owner', value: 'Sky Group (Comcast)' },
      { label: 'Headquarters', value: 'London, UK' },
      { label: 'Coverage region', value: 'UK and Ireland' },
      { label: 'England home series', value: 'Yes — exclusive' },
      { label: 'ICC events', value: 'Yes — in the UK' },
      { label: 'IPL', value: 'Yes — live in the UK' },
      { label: 'Subscription', value: 'Sky TV or Now TV pass' },
      { label: 'Streaming', value: 'Sky Go and Sky Stream' },
    ],
  },
  {
    slug: 'willow-tv',
    name: 'Willow TV',
    tagline: 'The leading cricket broadcaster in North America',
    logo: '/images/providers/willow.svg',
    rating: 4.3,
    reviewCount: 2890,
    established: '2003',
    headquarters: 'Sunnyvale, California, USA',
    coverage: 'India, Pakistan, and South Africa home series, ICC events, and major leagues in the US and Canada',
    description:
      'Willow TV is the leading cricket broadcaster in the United States and Canada, carrying India, Pakistan, and South Africa home series, ICC events, the IPL, the PSL, and other major leagues. Willow is available via cable, satellite, and streaming on the Willow app and web.',
    features: [
      'Live video for India home series in North America',
      'ICC event coverage in the US and Canada',
      'IPL, PSL, BBL, and other franchise leagues',
      'Willow app for iOS, Android, and smart TV',
      'Highlights and replays',
      'Monthly subscription with no contract',
    ],
    pros: [
      'Widest cricket coverage in North America',
      'Monthly subscription with no long contract',
      'Good app and streaming quality',
    ],
    cons: [
      'Geo-restricted to the US and Canada',
      'Subscription required — no free tier',
      'Occasional broadcast rights gaps',
    ],
    sports: ['Cricket'],
    paymentMethods: ['Monthly subscription (card)', 'Cable and satellite add-on'],
    customerSupport: ['Email support', 'Help center'],
    faqs: [
      {
        question: 'How much does Willow TV cost?',
        answer:
          'Willow TV’s streaming subscription is billed monthly with no long-term contract. It is also available as an add-on channel on major US cable and satellite providers. See willow.tv for current pricing.',
      },
      {
        question: 'Can I watch the IPL on Willow TV in the US?',
        answer:
          'Willow TV has historically carried the IPL in the US. Broadcast rights for specific seasons can vary, so check willow.tv for the current season’s schedule.',
      },
    ],
    longForm: [
      'Willow TV, headquartered in Sunnyvale, California, is the leading cricket broadcaster in North America. For the large South Asian diaspora in the US and Canada, Willow is the primary way to watch India, Pakistan, and South Africa home series, as well as the IPL, PSL, and other major leagues.',
      'Willow offers a streaming subscription billed monthly with no long-term contract, which makes it easy to subscribe for a specific series and cancel afterward. The Willow app is available on iOS, Android, Roku, Apple TV, Fire TV, and Chromecast, with good streaming quality on most home internet connections.',
      'The main limitations are geography and cost. Willow is geo-restricted to the US and Canada, and there is no free tier. For fans who want only live scores and not video, ESPNcricinfo and Cricbuzz are free alternatives.',
      'For cricket fans in North America who want live video, Willow TV is the leading option. Pair it with a free scoring app for second-screen commentary and stats.',
    ],
    tableData: [
      { label: 'Owner', value: 'Willow TV Inc.' },
      { label: 'Headquarters', value: 'Sunnyvale, California, USA' },
      { label: 'Coverage region', value: 'USA and Canada' },
      { label: 'India home series', value: 'Yes — live' },
      { label: 'ICC events', value: 'Yes — in the US and Canada' },
      { label: 'IPL and PSL', value: 'Yes — live' },
      { label: 'Subscription', value: 'Monthly, no contract' },
      { label: 'Devices', value: 'iOS, Android, Roku, Apple TV, Fire TV, Chromecast' },
    ],
  },
  {
    slug: 'jiocinema',
    name: 'JioCinema',
    tagline: 'Free streaming of India cricket and the IPL',
    logo: '/images/providers/jiocinema.svg',
    rating: 4.2,
    reviewCount: 6740,
    established: '2016',
    headquarters: 'Mumbai, India',
    coverage: 'India home series, IPL, and Indian domestic cricket — free in India',
    description:
      'JioCinema is the free streaming platform of Reliance’s Jio ecosystem, offering live video for India home series, the IPL, and selected Indian domestic cricket at no cost within India. It is available on web, iOS, Android, and smart TV, and is one of the most-used streaming apps in India.',
    features: [
      'Free live IPL streaming in India',
      'Free India home series streaming in India',
      'Multi-language commentary feeds',
      '4K streaming for select matches',
      'Catch-up and highlights',
      'Available on web, mobile, and smart TV',
    ],
    pros: [
      'Free in India with no subscription',
      'Multi-language commentary for major matches',
      '4K streaming for select events',
      'Wide device support',
    ],
    cons: [
      'Geo-restricted to India',
      'Ad-supported free tier',
      'Server load during peak IPL matches can cause buffering',
    ],
    sports: ['Cricket', 'Football', 'Other sports via JioSports'],
    paymentMethods: ['N/A — free with ads', 'JioCinema Premium for ad-free and premium content'],
    customerSupport: ['In-app support', 'Help center'],
    faqs: [
      {
        question: 'Is JioCinema really free for the IPL?',
        answer:
          'Yes. JioCinema streamed the IPL free in India with multi-language commentary. A JioCinema Premium subscription removes ads and unlocks premium movies and shows.',
      },
      {
        question: 'Can I watch JioCinema outside India?',
        answer:
          'JioCinema’s live sports streaming is geo-restricted to India. Outside India, use the official broadcast partner for your region, such as Willow TV in the US or Sky Sports in the UK.',
      },
    ],
    longForm: [
      'JioCinema is the free streaming platform of Reliance’s Jio ecosystem and the official digital streaming home of the IPL and India home series within India. Its decision to stream the IPL free in 2023 reshaped the Indian sports streaming market and drove record concurrent viewership.',
      'For cricket fans in India, JioCinema is the easiest way to watch the IPL and India home matches without a paid subscription. Multi-language commentary feeds — including Hindi, Tamil, Telugu, Kannada, and Bhojpuri — are a standout feature. The app is available on web, iOS, Android, and most smart TV platforms.',
      'The main limitations are geography and server load. JioCinema’s live sports streaming is geo-restricted to India, and during peak IPL matches the free tier has occasionally experienced buffering under record concurrent viewership. A JioCinema Premium subscription removes ads but does not guarantee a buffer-free experience during the most-watched matches.',
      'For free, legal IPL and India home series streaming in India, JioCinema is the leading option. Pair it with Cricbuzz or ESPNcricinfo for second-screen scores and commentary.',
    ],
    tableData: [
      { label: 'Owner', value: 'Reliance Jio (Viacom18)' },
      { label: 'Headquarters', value: 'Mumbai, India' },
      { label: 'Coverage region', value: 'India' },
      { label: 'IPL', value: 'Free live streaming in India' },
      { label: 'India home series', value: 'Free live streaming in India' },
      { label: 'Languages', value: 'Multi-language commentary' },
      { label: 'Max quality', value: '4K for select matches' },
      { label: 'Premium tier', value: 'JioCinema Premium (ad-free)' },
    ],
  },
  {
    slug: 'hotstar',
    name: 'Disney+ Hotstar',
    tagline: 'Streaming for India cricket and Disney entertainment',
    logo: '/images/providers/hotstar.svg',
    rating: 4.1,
    reviewCount: 5210,
    established: '2015',
    headquarters: 'Mumbai, India',
    coverage: 'India home series (via JioCinema partnership), ICC events, and Disney entertainment',
    description:
      'Disney+ Hotstar is the Indian streaming service of The Walt Disney Company, combining Disney’s entertainment library with live sports including select India cricket and ICC events. Following the Reliance–Disney joint venture, live IPL streaming has moved to JioCinema, with Hotstar retaining other cricket and entertainment rights.',
    features: [
      'Live ICC event streaming in India',
      'Select India cricket streaming',
      'Disney, Pixar, Marvel, and Star Wars library',
      'Hotstar Specials original series',
      'Multi-language sports commentary',
      'Mobile, web, and smart TV apps',
    ],
    pros: [
      'Combines cricket and Disney entertainment',
      'Strong multi-language sports coverage',
      'Good streaming quality on mobile',
    ],
    cons: [
      'IPL has moved to JioCinema',
      'Subscription required for premium content',
      'Rights split between Hotstar and JioCinema can be confusing',
    ],
    sports: ['Cricket', 'Football', 'Kabaddi', 'Other sports'],
    paymentMethods: ['Mobile plan', 'Super plan', 'Premium plan (card and UPI)'],
    customerSupport: ['In-app support', 'Help center'],
    faqs: [
      {
        question: 'Can I watch the IPL on Disney+ Hotstar?',
        answer:
          'No. Following the Reliance–Disney joint venture, live IPL streaming in India has moved to JioCinema. Hotstar retains other cricket rights including select India cricket and ICC events.',
      },
      {
        question: 'What cricket can I watch on Disney+ Hotstar?',
        answer:
          'Disney+ Hotstar streams select India cricket and ICC events in India, alongside its entertainment library. Check the Hotstar app for the current cricket schedule.',
      },
    ],
    longForm: [
      'Disney+ Hotstar is the Indian streaming service of The Walt Disney Company, formed from the merger of Hotstar (originally a Star India product) with Disney+. It combines Disney’s entertainment library with live sports, including select India cricket and ICC events in India.',
      'Following the Reliance–Disney joint venture in 2024, the live streaming rights landscape in India shifted. Live IPL streaming moved to JioCinema, while Hotstar retained other cricket and entertainment rights. For fans, this means the platform to use depends on the specific series.',
      'Hotstar’s strengths are its entertainment library and its multi-language sports commentary. Its mobile-first streaming quality is good, and the app is widely available. The main complexity for cricket fans is tracking which platform holds the rights to which series.',
      'For Disney entertainment plus select India cricket and ICC events, Disney+ Hotstar remains a major platform. For the IPL specifically, use JioCinema.',
    ],
    tableData: [
      { label: 'Owner', value: 'The Walt Disney Company / Reliance JV' },
      { label: 'Headquarters', value: 'Mumbai, India' },
      { label: 'Coverage region', value: 'India and select Southeast Asian markets' },
      { label: 'IPL', value: 'Moved to JioCinema' },
      { label: 'ICC events', value: 'Yes — in India' },
      { label: 'Entertainment', value: 'Disney, Pixar, Marvel, Star Wars' },
      { label: 'Plans', value: 'Mobile, Super, Premium' },
      { label: 'Devices', value: 'Web, iOS, Android, smart TV' },
    ],
  },
];
