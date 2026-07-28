import { siteConfig } from './site-config';
import type { BlogPost, Provider, FaqItem } from './data/types';

type Schema = Record<string, unknown>;

export function organizationSchema(): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.social),
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.contact.email,
      contactType: 'editorial',
    },
  };
}

export function websiteSchema(): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function webpageSchema(path: string, title: string, description: string): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url: `${siteConfig.url}${path}`,
    description,
    isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: FaqItem[]): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function articleSchema(post: BlogPost): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: [`${siteConfig.url}${post.featuredImage}`],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/logo.png` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  };
}

export function reviewSchema(provider: Provider): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: provider.name,
      url: `${siteConfig.url}/providers/${provider.slug}`,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: provider.rating,
      bestRating: 5,
    },
    author: { '@type': 'Organization', name: siteConfig.author.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
  };
}

export function ratingSchema(provider: Provider): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: { '@type': 'Organization', name: provider.name },
    ratingValue: provider.rating,
    bestRating: 5,
    ratingCount: provider.reviewCount,
  };
}

export function collectionPageSchema(
  name: string,
  path: string,
  description: string,
  items: { title: string; url: string }[],
): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    url: `${siteConfig.url}${path}`,
    description,
    hasPart: items.map((it) => ({
      '@type': 'Article',
      headline: it.title,
      url: `${siteConfig.url}${it.url}`,
    })),
  };
}

export function videoSchema(video: {
  title: string;
  description: string;
  thumbnail: string;
  uploadDate: string;
  duration: string;
  url: string;
}): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: `${siteConfig.url}${video.thumbnail}`,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: `${siteConfig.url}${video.url}`,
  };
}

export function combineSchemas(...schemas: Schema[]): Schema {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.map((s) => {
      const { '@context': _ctx, ...rest } = s;
      return rest;
    }),
  };
}
