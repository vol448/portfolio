// All site text lives here — edit this file to update the portfolio.

export const profile = {
  name: "Valentine Horodetskyi",
  role: "Front-end developer · Data Science & AI student",
  intro:
    "I'm a Data Science and Artificial Intelligence student at Leiden University and a junior developer at Nextra Software, where I mainly work on the front end with TypeScript, React and Next.js. I also have experience working with Python and SQL.",
  email: "valentin.horodetskyi@gmail.com",
  github: "https://github.com/vol448",
  linkedin: "https://www.linkedin.com/in/valentine-horodetskyi-b34b9731a",
  cv: "/Valentine_Horodetskyi_CV.pdf",
};

export type Project = {
  title: string;
  context: string;
  description: string;
  myPart: string[];
  stack: string[];
  links: { label: string; href: string }[];
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Nextra Software website",
    context: "Team project · Nextra Software · 2026",
    description:
      "Company website for a Leiden-based software agency. It presents the agency's services, pricing, development process and tech stack, and lets potential clients get in touch.",
    myPart: [
      "Built the base layout of the site",
      "Built the FAQ section",
      "Built the “Why choose us” section",
      "Built the “Get in touch” contact section",
    ],
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    links: [{ label: "Live site", href: "https://nextrasoftware.nl/en" }],
  },
  {
    title: "AandelenXpress — B.V. registration app",
    context: "Team project · Nextra Software · 2026",
    description:
      "iOS app for AandelenXpress, a service for setting up a Dutch B.V. through a notary. Clients follow every step of their company registration — from the briefing with the notary and signing the deed to registration with the Chamber of Commerce — and receive their documents in the app.",
    myPart: ["Contributed to the FastAPI back end"],
    stack: ["React", "FastAPI", "Python", "SQL database"],
    links: [{ label: "App Store", href: "https://apps.apple.com/nl/app/aandelenxpress/id6759283793" }],
    note: "Source code and client data are confidential, so the code can't be shared.",
  },
  {
    title: "This portfolio",
    context: "Personal project",
    description:
      "The site you're looking at — a small, responsive portfolio built from scratch and deployed on Vercel.",
    myPart: ["Everything: layout, components, content and deployment"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    links: [{ label: "Source code", href: "https://github.com/vol448/portfolio" }],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Front end", items: ["TypeScript", "JavaScript", "React", "Next.js", "HTML/CSS", "Tailwind CSS"] },
  { group: "Back end & data", items: ["Node.js", "FastAPI", "Python", "SQL"] },
  { group: "Tools", items: ["Git", "Vercel"] },
];
