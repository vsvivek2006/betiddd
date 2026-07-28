import { siteConfig } from '@/lib/site-config';
import { blogPosts } from '@/lib/data/blog-posts';

export const dynamic = 'force-static';

export async function GET() {
  const items = blogPosts
    .map((post) => {
      const url = `${siteConfig.url}/blog/${post.slug}`;
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>${post.category}</category>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteConfig.name} — Cricket Blog]]></title>
    <link>${siteConfig.url}/blog</link>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />
    <description><![CDATA[${siteConfig.description}]]></description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
