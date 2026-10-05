export type Role = {
  title: string;
  org: string;
  when: string;
  points: string[];
};

export type Project = {
  kind: string;
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
  todo?: string;
};

export const profile = {
  name: "Hugh Archer",
  headline: "Finance student building AI tools for investors.",
  intro:
    "I study Commerce at UCD and work as an Investment Fund Intern at IBM's pension fund in Dublin. I also build software: AI for hedge fund portfolio managers, valuation models, and my own products under Archer Ventures.",
  email: "archerh2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/hugh-archer-9230a5297",
  github: "",
  contactNote: "Message me on LinkedIn. I'm always happy to jump on a call.",
};

export const roles: Role[] = [
  {
    title: "Investment Fund Intern",
    org: "IBM · Retirement Fund · Dublin",
    when: "Sep 2026 – Present",
    points: [
      "Support the investment team at IBM's RFSC, overseeing $100bn+ in global pension assets",
      "FX and interest rate hedging with forwards and swaps across multi-asset portfolios",
      "Liability-driven investment (LDI) across defined benefit pension portfolios",
      "Asked to drive AI automation of manual investment workflows",
    ],
  },
  {
    title: "Artificial Intelligence Engineer",
    org: "Blackkite Ventures · Dublin · Full-time summer, part-time since Sep",
    when: "Jun 2026 – Present",
    points: [
      "Built LLM pipelines and backend services for Skillify, an AI tool that stress-tests hedge fund PMs' trade ideas",
      "Interviewed portfolio managers and traders to codify macro and FX decision frameworks",
      "One of three on a lean, AI-first team founded by a former Hong Kong hedge fund professional",
    ],
  },
  {
    title: "Sales Associate",
    org: "Harvey Nichols · Dublin",
    when: "Aug 2024 – Jan 2026",
    points: ["Commission-based role; built a base of repeat luxury retail clients"],
  },
  {
    title: "Exchange Semester & Rugby Coach",
    org: "Singapore Management University · Singapore Irish Rugby Club",
    when: "Jan 2026 – May 2026",
    points: ["Coached boys' and girls' teams from U11 to U17 and a women's team"],
  },
];

export const projects: Project[] = [
  {
    kind: "Valuation",
    name: "Monte Carlo DCF Calculator",
    blurb:
      "A discounted cash flow model that runs thousands of scenarios instead of one estimate, with correlated inputs and Brownian motion for currency paths.",
    tags: ["Python", "NumPy", "Monte Carlo"],
    todo: "To add: screenshot, GitHub link",
  },
  {
    kind: "Quant",
    name: "Strategy Backtester",
    blurb:
      "Tested a range of systematic trading strategies on historical data and compared risk-adjusted returns.",
    tags: ["Python", "pandas"],
    todo: "To add: strategies tested, key results",
  },
  {
    kind: "AI · Fintech",
    name: "Skillify",
    blurb:
      "AI decision support for hedge fund portfolio managers. It turns expert interviews into reusable heuristics that stress-test macro and FX trade ideas. Built at Blackkite Ventures.",
    tags: ["LLMs", "Node.js", "Supabase"],
  },
  {
    kind: "Archer Ventures",
    name: "The Doomscroll Book",
    blurb:
      "Turns your social media feed into a printed 300-page book. The first product from Archer Ventures, the company I set up in September 2026.",
    tags: ["Next.js", "Supabase"],
  },
  {
    kind: "Full-stack",
    name: "GeoGrail",
    blurb:
      "A geography game with five modes (flags, borders, globe, capitals and landmarks), plus Google sign-in, friends, leaderboards and detailed stats.",
    tags: ["Next.js", "Supabase", "OAuth"],
    href: "https://geograil.vercel.app",
    linkLabel: "Play →",
  },
  {
    kind: "Tooling",
    name: "Screen-to-AI Extensions",
    blurb: "Chrome extensions that capture your screen and send it straight to an AI model.",
    tags: ["JavaScript", "Chrome"],
    todo: "To add: link, what it solves",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Finance",
    items: ["DCF valuation", "FX & rates hedging", "Liability-driven investment", "Monte Carlo simulation"],
  },
  {
    group: "Technical",
    items: ["Python (pandas, NumPy)", "SQL / PostgreSQL", "LLM APIs & agents", "Excel, Bloomberg"],
  },
  { group: "Outside work", items: ["Rugby", "Chess", "Skiing", "Markets"] },
];
