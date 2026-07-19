import {
  EnvelopeSimple,
  GithubLogo,
  GraduationCap,
  Microscope,
} from "@phosphor-icons/react";
import { profile } from "../data/site";

export function ProfileSidebar() {
  return (
    <aside className="profile-sidebar" aria-label="Profile">
      <div className="portrait-frame">
        <img
          className="portrait"
          src={profile.avatar}
          alt="Portrait of Hao Wu"
          width="480"
          height="480"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <div className="profile-copy">
        <h1>
          {profile.name} <span lang="zh-CN">{profile.chineseName}</span>
        </h1>
        <p className="profile-title">{profile.title}</p>
        <p className="profile-affiliation">{profile.affiliation}</p>
      </div>

      <p className="current-role">
        <Microscope size={18} weight="regular" aria-hidden="true" />
        Research Intern at Microsoft Research Asia
      </p>

      <ul className="profile-links" aria-label="Contact and profile links">
        <li>
          <GraduationCap size={19} aria-hidden="true" />
          <span>School of Software Engineering</span>
        </li>
        <li>
          <EnvelopeSimple size={19} aria-hidden="true" />
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <GithubLogo size={19} aria-hidden="true" />
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </aside>
  );
}
