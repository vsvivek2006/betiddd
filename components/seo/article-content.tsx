import type { BlogSection } from '@/lib/data/types';

export default function ArticleContent({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="prose-cricket max-w-none">
      {sections.map((section, i) => {
        const Tag = section.level === 3 ? 'h3' : section.level === 4 ? 'h4' : 'h2';
        return (
          <section key={i}>
            <Tag id={`section-${i}`}>{section.heading}</Tag>
            {section.paragraphs.map((p, j) => (
              <p key={j} dangerouslySetInnerHTML={{ __html: linkify(p) }} />
            ))}
            {section.list && (
              <ul>
                {section.list.map((item, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: linkify(item) }} />
                ))}
              </ul>
            )}
            {section.table && (
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      {section.table.headers.map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k} dangerouslySetInnerHTML={{ __html: linkify(cell) }} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {section.callout && (
              <blockquote dangerouslySetInnerHTML={{ __html: linkify(section.callout) }} />
            )}
          </section>
        );
      })}
    </div>
  );
}

// Lightweight internal link converter: [[text|/path]] -> <a href="/path">text</a>
function linkify(text: string): string {
  return text.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '<a href="$2">$1</a>');
}
