export type FaqItem = { question: string; answer: string };

export type Provider = {
  slug: string;
  name: string;
  tagline: string;
  logo: string;
  rating: number;
  reviewCount: number;
  established: string;
  headquarters: string;
  coverage: string;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  sports: string[];
  paymentMethods: string[];
  customerSupport: string[];
  faqs: FaqItem[];
  longForm: string[]; // paragraphs of the long-form review
  tableData: { label: string; value: string }[];
};

export type Team = {
  slug: string;
  name: string;
  shortName: string;
  country: string;
  logo: string;
  format: 'Test' | 'ODI' | 'T20' | 'Franchise';
  league?: string;
  description: string;
  founded: string;
  homeGround: string;
  titles: string[];
  squad: { name: string; role: string }[];
};

export type Series = {
  slug: string;
  name: string;
  shortName: string;
  format: string;
  startDate: string;
  endDate: string;
  teams: string[];
  host: string;
  description: string;
  status: 'upcoming' | 'live' | 'completed';
  matches: { label: string; date: string; venue: string; teams: string[]; status: string }[];
};

export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  featuredImage: string;
  featuredImageAlt: string;
  keywords: string[];
  faqs: FaqItem[];
  // Rendered as sections: each section has a heading + paragraphs + optional list
  sections: BlogSection[];
  relatedSlugs: string[];
};

export type BlogSection = {
  heading: string;
  level?: 2 | 3 | 4;
  paragraphs: string[];
  list?: string[];
  table?: { headers: string[]; rows: string[][] };
  callout?: string;
};

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  image: string;
  imageAlt: string;
  source: string;
  body: string[];
};

export type LiveMatch = {
  id: string;
  series: string;
  format: string;
  teamA: string;
  teamB: string;
  teamAScore: string;
  teamBScore: string;
  status: string;
  venue: string;
  matchNumber: string;
};
