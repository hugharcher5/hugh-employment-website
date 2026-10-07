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
];

export type Feature = {
  name: string;
  kind: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  tags: string[];
  links: { label: string; href: string }[];
};

export const skillify: Feature = {
  name: "Skillify customer console",
  kind: "Built at Blackkite Ventures · Live",
  image: "/skillify-console.webp",
  imageAlt: "Skillify customer console sign-in page with tabs for account, API keys, usage, credits, help and settings",
  paragraphs: [
    "The customer console for Skillify, the AI tool for hedge fund portfolio managers I work on at Blackkite Ventures. I built its Supabase backend: accounts, Google sign-in, one-time verification codes for new sign-ups, issuing and storing API keys, and tracking each customer's credits.",
    "I also built the routing system behind the API, which runs on two LLMs. One picks which heuristics and skills a request needs and returns the answer through the customer's API key. The other checks and rates each response, flagging weak ones for review so we can improve Skillify's answers.",
    "The setup instructions in the console are mine too, written so people who aren't technical can get started.",
  ],
  tags: ["Supabase", "PostgreSQL", "Google OAuth", "LLM routing", "Node.js"],
  links: [{ label: "Open the console", href: "https://console.skillify.so" }],
};

export const skillifySite: Feature = {
  name: "Skillify website",
  kind: "Blackkite Ventures · Live",
  image: "/skillify-site.webp",
  imageAlt: "Skillify homepage: turning expert judgment into validated, reusable AI capability for investment workflows",
  paragraphs: [
    "Skillify's public website. It explains what Skillify does, turning expert judgment into validated, reusable AI capability for investment workflows, and lets investment teams book an intro call.",
    "I worked on the frontend alongside the rest of the team, mainly improving the UI.",
  ],
  tags: ["HTML", "CSS", "JavaScript"],
  links: [{ label: "Visit skillify.so", href: "https://skillify.so" }],
};

export const archerVentures: Feature = {
  name: "Archer Ventures",
  kind: "Irish limited company · Live",
  image: "/archer-ventures.webp",
  imageAlt: "Archer Ventures homepage with the AV monogram: we build and run consumer products on the internet",
  paragraphs: [
    "Archer Ventures Limited is the Irish company I set up in September 2026 to build and run my own consumer products. I own it outright and handled its registration with the CRO, Revenue and the beneficial ownership register myself.",
    "I built the company website myself: plain HTML and CSS with no cookies or tracking, and full privacy and terms pages written for Irish company and GDPR requirements.",
  ],
  tags: ["HTML", "CSS", "GDPR", "Company admin"],
  links: [{ label: "Visit the site", href: "https://archer-ventures.vercel.app" }],
};

export const doomscroll: Feature = {
  name: "The Doomscroll Book",
  kind: "Archer Ventures · Pre-launch",
  image: "/doomscroll-book.webp",
  imageAlt: "The Doomscroll Book homepage: your algorithm, but it's a book",
  paragraphs: [
    "The first product from Archer Ventures. You pick the categories you actually watch, and it prints the feed you would have scrolled anyway as a real, bound book. Each post gets a page, with its comments on the facing page.",
    "I built it on my own: the website, the waitlist and creator sign-up, and a pipeline that pulls public posts and comment threads, curates them and lays them out as a printable PDF.",
  ],
  tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
  links: [{ label: "Visit the site", href: "https://www.thedoomscrollbook.com" }],
};

export const geograil: Feature = {
  name: "GeoGrail",
  kind: "Side project · Live",
  image: "/geograil.webp",
  imageAlt: "GeoGrail title screen: a golden chalice holding a map of the world, surrounded by five game modes",
  paragraphs: [
    "A geography game I built for fun while learning to code. There are five ways to play: name the flag, guess a country from its border, find it on a 3D globe, name the capital, and pin famous landmarks.",
    "You can sign in with Google, add friends, climb the leaderboards and track your stats. It also lets misspellings through. I started it to teach myself web development and kept building on it.",
  ],
  tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "MapLibre"],
  links: [{ label: "Play GeoGrail", href: "https://geograil.vercel.app" }],
};

export type Tool = {
  name: string;
  blurb: string;
  tags: string[];
  href: string;
  linkLabel: string;
};

export const tools: Tool[] = [
  {
    name: "Screen Capture to PDF",
    blurb:
      "A Chrome extension I use every day, and a couple of friends use it too. One keyboard shortcut saves the whole page you're on as a PDF in Downloads, ready to hand to an AI model. Handy when I'm using AI to work through websites, though some sites print badly, so it's worth checking the PDF.",
    tags: ["Chrome extension", "JavaScript"],
    href: "https://github.com/hugharcher5/Screen-Grab-PDF",
    linkLabel: "View on GitHub",
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
