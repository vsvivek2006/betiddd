import type { Metadata } from 'next';
import { siteConfig } from './site-config';

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  image = siteConfig.ogImage,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image.startsWith('http') ? image : `${siteConfig.url}${image}`;

  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url,
      title: type === 'article' ? title : `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: type === 'article' ? title : `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
      creator: siteConfig.twitter,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  };
}
