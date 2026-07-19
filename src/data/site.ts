export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Profile = {
  name: string;
  chineseName: string;
  title: string;
  affiliation: string;
  email: string;
  github: string;
  avatar: string;
};

export type NewsItem = {
  date: string;
  text: string;
};

export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  note?: string;
  summary: string;
  links: PublicationLink[];
  tone: "pine" | "stone";
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  details: string[];
};

export type Experience = {
  organization: string;
  role: string;
  period: string;
  location?: string;
  details: string[];
};

export type Project = {
  title: string;
  role: string;
  period: string;
  description: string;
  stack: string;
  href?: string;
};

export type AwardGroup = {
  title: string;
  items: Array<{
    year?: string;
    name: string;
  }>;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "News", href: "#news" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
];

export const profile: Profile = {
  name: "Hao Wu",
  chineseName: "伍浩",
  title: "Software Engineering Undergraduate",
  affiliation: "Southeast University",
  email: "haobits5@gmail.com",
  github: "https://github.com/River177",
  avatar: "/hao-wu.webp",
};

export const news: NewsItem[] = [
  {
    date: "2026.05",
    text: "Joined Microsoft Research Asia as a Research Intern, focusing on AI safety, responsible LLMs, and LLM copyright.",
  },
  {
    date: "2026.05",
    text: "Our work on accurate curvilinear structure segmentation was published at ICASSP 2026.",
  },
  {
    date: "2026",
    text: "Received the Software Innovation Scholarship at Southeast University.",
  },
  {
    date: "2026.02",
    text: "Joined vivo as an AI and Web Development Intern.",
  },
  {
    date: "2025",
    text: "Received the China National Scholarship.",
  },
];

export const publications: Publication[] = [
  {
    title:
      "HARC: Coupling Harmfulness and Refusal Directions for Robust Safety Alignment",
    authors: "Shei Pern Chua, Hao Wu, Qianli Ma, Fangzhao Wu",
    venue: "arXiv Preprint",
    year: "2026",
    summary:
      "A safety alignment method that couples harmfulness and refusal directions across prompt and response positions.",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2607.00572",
      },
    ],
    tone: "pine",
  },
  {
    title:
      "SteerPrint: Steering-Vector-Guided Fingerprints for Black-Box LVLM Ownership Verification",
    authors:
      "Qianli Ma, Jiahao Chen, Hao Wu, Shei Pern Chua, Yueqi Xie, Fangzhao Wu",
    venue: "ACL ARR",
    year: "2026",
    summary:
      "A representation-driven framework that turns internal steering directions into visual fingerprints for black-box LVLM ownership verification.",
    links: [
      {
        label: "OpenReview",
        href: "https://openreview.net/forum?id=rGIJ51NlbM#discussion",
      },
    ],
    tone: "stone",
  },
  {
    title:
      "Progressively Injecting Structural Semantics from the Frequency Domain into Mamba for Accurate Curvilinear Structure Segmentation",
    authors:
      "Wanqiang Cai*, Hao Wu*, Yifan Xue, Yingyao Ma, Jiasong Wu, Bin Wang, Zongyuan Ge",
    venue: "ICASSP",
    year: "2026",
    note: "* Equal contribution",
    summary:
      "A frequency-aware Mamba framework for accurate segmentation of thin and curvilinear structures.",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1109/ICASSP55912.2026.11463769",
      },
    ],
    tone: "pine",
  },
  {
    title: "Graph Prompt Learning: A Comprehensive Survey and Beyond",
    authors: "Hao Wu (first author)",
    venue: "arXiv Preprint",
    year: "Forthcoming",
    summary:
      "A structured survey of graph prompt learning, its methods, applications, and open research questions.",
    links: [],
    tone: "stone",
  },
];

export const education: Education[] = [
  {
    institution: "Southeast University",
    degree: "B.Eng. in Software Engineering",
    period: "Sep 2023 - Jun 2027",
    details: [
      "GPA: 4.08 / 4.8, ranked 6 / 124.",
      "Lead of Herald Studio",
    ],
  },
];

export const experiences: Experience[] = [
  {
    organization: "Microsoft Research Asia",
    role: "Research Intern",
    period: "May 2026 - Present",
    location: "Beijing, China",
    details: [
      "Conducting research on AI safety, responsible language models, and LLM copyright.",
      "Studying reliable model behavior and the effects of post-training interventions.",
    ],
  },
  {
    organization: "vivo",
    role: "AI and Web Development Intern",
    period: "Feb 2026 - Apr 2026",
    details: [
      "Developed and improved an engineering productivity platform for automated workflows.",
      "Built Android UI automation with MCP and LangChain, then packaged Midscene workflows in Electron.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Counseling Center Appointment System",
    role: "Project Lead and Backend Developer",
    period: "Jul 2025 - Dec 2025",
    description:
      "Designed the system architecture, REST APIs, appointment workflows, and consultation management modules.",
    stack: "Spring Boot, REST API",
    href: "https://psy.seu.edu.cn",
  },
  {
    title: "Enterprise Knowledge Base and AI Agent",
    role: "AI Engineer",
    period: "Apr 2025 - Jul 2025",
    description:
      "Cleaned and vectorized enterprise data, improved retrieval with RAG, and automated business workflows with Dify agents.",
    stack: "RAG, vector search, Dify",
  },
  {
    title: "Student Financial Aid Growth Portfolio",
    role: "Frontend Developer",
    period: "Aug 2024 - Oct 2024",
    description:
      "Built reusable Vue interfaces for conversation records, information management, and structured student support workflows.",
    stack: "Vue, component systems",
  },
];

export const awardGroups: AwardGroup[] = [
  {
    title: "Scholarships",
    items: [
      { year: "2026", name: "Software Innovation Scholarship" },
      { year: "2025", name: "China National Scholarship" },
      { year: "2024", name: "Tencent Scholarship" },
    ],
  },
  {
    title: "Competitions",
    items: [
      { name: "MCM Finalist Award" },
      {
        name: "Global Campus AI Algorithm Elite Challenge, National Third Prize",
      },
      {
        name: "Huawei Software Elite Challenge, Regional Second Prize",
      },
    ],
  },
];
