import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Rafael Pérez",
  initials: "RP",
  location: "Santo Dominigo, Dominican Republic, AST",
  locationLink: "https://www.google.com/maps/place/Santo+Domingo",
  about: "Data Analyst with procurement background, optimizing decisions through analytics.",
  summary:
    "Data Analyst with experience in procurement analysis and process optimization. Skilled in Excel, SQL, Power BI and Python, developing data-driven solutions that transform business information into actionable strategies.",
  avatarUrl: "https://avatars.githubusercontent.com/u/121272791?s=400&u=be74eb4b85a3f057931e05ca3fe5f656eae27692&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "imralf77@gmail.com",
    tel: "+8494458799",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Imralf",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/imralf/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Universidad Abierta para Adultos (UAPA)",
      degree: "Software Engineering undergraduate student",
    },
    {
      school: "DataCamp",
      degree: "Intermediate SQL",
      certificate: "https://media.licdn.com/dms/image/v2/D4E2DAQHo0CKuUTJHGA/profile-treasury-document-images_1920/B4EaBRW2ZvIgAo-/1/1788071341198?e=1789603200&v=beta&t=uhvkhmZ_qACd7KlGy8wh_O02nt_SDI2I4bYIQNQXMWs",
    },
  ],
  work: [
    {
      company: "Ministry of Education",
      link: "https://www.ministeriodeeducacion.gob.do/",
      badges: ["On Site", "Excel", "SIGEF", "SECP"],
      title: "Operations & Procurement Analyst",
      start: "2014",
      end: "2026",
      description:
        "Directed end-to-end operational processes utilizing government technology platforms (SIGEF and SECP), ensuring seamless tracking from initial request through final project closure.",
      highlights: [
        "Facilitated cross-functional communication and negotiated with internal and external stakeholders by conducting comprehensive and analytical market research",
        "Resolved daily operational demands rapidly and efficiently, guaranteeing strict adherence to institutional timelines and regulatory compliance",
      ],
    },
    {
      company: "Ministry of Education",
      link: "https://parabol.co",
      badges: [
        "On Site",
        "Excel",
      ],
      title: "Operations Support Assistant",
      start: "2013",
      end: "2014",
      description:
        "Provided continuous operational support by processing, drafting, and issuing accurate purchase orders through the institutional system (SIGEF)",
      highlights: [
        "Streamlined the execution of multiple operational workflows, maintaining a consistent, highly efficient process focused on fulfilling stakeholder requirements and institutional goals",
      ],
    },
  ],
  skills: [
    "Excel",
    "SQL",
    "PostgreSQL",
    "Git/Github",
    "Power BI",
    "Python",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "AI", "Browser Extension"],
      description: "Autonomous QA AI agent for web applications",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "43frames",
      techStack: ["TypeScript", "Next.js", "AI"],
      description: "AI-powered image and video generation studio",
      link: {
        label: "43frames.com",
        href: "https://43frames.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "Open source, print-friendly CV template. 9,600+ stars on GitHub",
      link: {
        label: "Minimalist CV",
        href: "https://github.com/Imralf/cv",
      },
    },
  ],
} as const;
