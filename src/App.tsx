import {
  ArrowUpRight,
  BookOpenText,
  Briefcase,
  GraduationCap,
  Medal,
  Newspaper,
  SquaresFour,
  UserFocus,
} from "@phosphor-icons/react";
import { ProfileSidebar } from "./components/ProfileSidebar";
import { PublicationCard } from "./components/PublicationCard";
import { SectionHeading } from "./components/SectionHeading";
import { SiteHeader } from "./components/SiteHeader";
import {
  awardGroups,
  education,
  experiences,
  news,
  profile,
  projects,
  publications,
} from "./data/site";

function App() {
  return (
    <>
      <SiteHeader />

      <div className="page-shell">
        <ProfileSidebar />

        <main id="main-content" className="main-content">
          <section id="about" className="content-section about-section" aria-labelledby="about-heading">
            <SectionHeading id="about" title="About" icon={UserFocus} />
            <p className="intro-lead">
              Hello, I am Hao, a Software Engineering undergraduate at Southeast University and a Research Intern at Microsoft Research Asia.
            </p>
            <p className="intro-body">
              My current interests center on AI safety, responsible language models, and the copyright and provenance questions surrounding large-scale models. I also enjoy building reliable AI systems that connect research ideas with practical software.
            </p>
            <div className="focus-grid" aria-label="Research interests">
              <div>
                <img
                  className="focus-illustration"
                  src="/ai-safety-illustration.webp"
                  alt=""
                  aria-hidden="true"
                />
                <strong>AI Safety</strong>
                <span>Understanding and improving reliable model behavior.</span>
              </div>
              <div>
                <strong>Responsible LLMs</strong>
                <span>Studying post-training effects, evaluation, and model risks.</span>
              </div>
              <div>
                <strong>LLM Copyright</strong>
                <span>Exploring provenance, attribution, and responsible model use.</span>
              </div>
            </div>
          </section>

          <section id="news" className="content-section" aria-labelledby="news-heading">
            <SectionHeading id="news" title="News" icon={Newspaper} />
            <ol className="news-list">
              {news.map((item, index) => (
                <li key={`${item.date}-${index}`}>
                  <time>{item.date}</time>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="research" className="content-section" aria-labelledby="research-heading">
            <SectionHeading id="research" title="Research" icon={BookOpenText} />
            <div className="publication-list">
              {publications.map((publication) => (
                <PublicationCard key={publication.title} publication={publication} />
              ))}
            </div>
          </section>

          <section id="education" className="content-section" aria-labelledby="education-heading">
            <SectionHeading id="education" title="Education" icon={GraduationCap} />
            <div className="education-list">
              {education.map((item) => (
                <article key={item.institution} className="education-entry">
                  <div className="entry-header">
                    <div>
                      <h3>{item.institution}</h3>
                      <p>{item.degree}</p>
                    </div>
                    <time>{item.period}</time>
                  </div>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail.text}>
                        {detail.href ? (
                          <a
                            className="education-link"
                            href={detail.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {detail.text}
                            <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                          </a>
                        ) : (
                          detail.text
                        )}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="content-section" aria-labelledby="experience-heading">
            <SectionHeading id="experience" title="Experience" icon={Briefcase} />
            <div className="experience-list">
              {experiences.map((item) => (
                <article key={item.organization} className="experience-entry">
                  <div className="experience-marker" aria-hidden="true" />
                  <div>
                    <div className="entry-header">
                      <div>
                        <h3>{item.organization}</h3>
                        <p>{item.role}</p>
                      </div>
                      <time>{item.period}</time>
                    </div>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="content-section" aria-labelledby="projects-heading">
            <SectionHeading id="projects" title="Selected Projects" icon={SquaresFour} />
            <div className="project-grid">
              {projects.map((project, index) => (
                <article key={project.title} className={`project-card project-${index + 1}`}>
                  <div className="project-header">
                    <h3>
                      {project.href ? (
                        <a href={project.href} target="_blank" rel="noreferrer">
                          {project.title}
                          <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <time>{project.period}</time>
                  </div>
                  <p className="project-role">{project.role}</p>
                  <p>{project.description}</p>
                  <p className="project-stack">{project.stack}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="awards" className="content-section" aria-labelledby="awards-heading">
            <SectionHeading id="awards" title="Awards" icon={Medal} />
            <div className="award-groups">
              {awardGroups.map((group) => (
                <section key={group.title} className="award-group" aria-labelledby={`award-${group.title.toLowerCase()}`}>
                  <h3 id={`award-${group.title.toLowerCase()}`}>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <span>{item.name}</span>
                        {item.year ? <time>{item.year}</time> : null}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <footer className="site-footer">
            <p>Hao Wu <span lang="zh-CN">伍浩</span></p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
