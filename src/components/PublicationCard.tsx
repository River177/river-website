import { ArrowUpRight } from "@phosphor-icons/react";
import type { Publication } from "../data/site";

type PublicationCardProps = {
  publication: Publication;
};

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <article className="publication-card">
      <div className={`publication-cover cover-${publication.tone}`} aria-hidden="true">
        <span>{publication.venue}</span>
        <strong>{publication.year}</strong>
        <small>Research paper</small>
      </div>

      <div className="publication-content">
        <div className="publication-meta">
          <span>{publication.venue}</span>
          <span>{publication.year}</span>
        </div>
        <h3>{publication.title}</h3>
        <p className="authors">{publication.authors}</p>
        {publication.note ? <p className="contribution-note">{publication.note}</p> : null}
        <p className="publication-summary">{publication.summary}</p>

        {publication.links.length > 0 ? (
          <div className="publication-links" aria-label={`Links for ${publication.title}`}>
            {publication.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : (
          <p className="link-pending">Public link forthcoming</p>
        )}
      </div>
    </article>
  );
}
