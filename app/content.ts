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
    "I study Commerce at UCD and work as an Investment Fund Intern at IBM's pension fund in Dublin. I also build software: AI for hedge fund portfolio managers, valuation models, and my own products under Archer Ventures. I'm studying for the CFA Level I exam in May 2027.",
  email: "archerh2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/hugh-archer-9230a5297",
  github: "https://github.com/hugharcher5",
  cv: "/Hugh-Archer-CV.pdf",
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
    title: "Rugby Coach",
    org: "Singapore Irish Rugby Club · Singapore",
    when: "Jan 2026 – May 2026",
    points: ["Coached boys' and girls' teams from U11 to U17 and a women's team during my exchange semester"],
  },
  {
    title: "Transition Year Work Experience",
    org: "Murex · Dublin",
    when: "Nov 2021",
    points: ["Spent time with the trading, risk and technology teams at the capital markets software firm"],
  },
];

export type School = {
  name: string;
  detail: string;
  where: string;
  when: string;
  points: string[];
};

export const education: School[] = [
  {
    name: "University College Dublin · Quinn School of Business",
    detail: "Bachelor of Commerce, graduating May 2028",
    where: "Dublin",
    when: "Sep 2024 – May 2028",
    points: [
      "Cumulative GPA 3.8, First Class Honours",
      "Coursework: Principles of Finance, Financial and Management Accounting, Data Analysis",
    ],
  },
  {
    name: "Singapore Management University",
    detail: "Exchange semester (Quinn exchange programme)",
    where: "Singapore",
    when: "Jan 2026 – May 2026",
    points: [],
  },
  {
    name: "Wesley College Dublin",
    detail: "Leaving Certificate: 601 points; Award for Academic Excellence",
    where: "Dublin",
    when: "Sep 2017 – May 2024",
    points: [],
  },
];

// Strategy Backtester hidden until the strategies are reviewed
export const projects: Project[] = [];

export type Feature = {
  name: string;
  kind: string;
  image?: string;
  imageAlt?: string;
  paragraphs: string[];
  /** Short bullet list shown under the text (compact cards) */
  features?: string[];
  tags: string[];
  links: { label: string; href: string }[];
  /** Where the screenshot links to, if not the first link */
  imageHref?: string;
  /** Audio sample with a built-in player (compact cards) */
  audio?: { src: string; label: string };
  /** Where the data comes from, shown in small print at the bottom (compact cards) */
  sources?: string;
};

export const skillify: Feature = {
  name: "Skillify customer console",
  kind: "Built at Blackkite Ventures · Live",
  image: "/skillify-console.webp",
  imageAlt: "Skillify customer console sign-in page with tabs for account, API keys, usage, credits, help and settings",
  paragraphs: [
    "The customer console for Skillify, the AI tool for hedge fund portfolio managers I work on at Blackkite Ventures. I built its Supabase backend: accounts, Google sign-in, one-time verification codes for new sign-ups, issuing and storing API keys, and tracking each customer's credits.",
    "I also built the routing system behind the API, which runs on two LLMs. One picks which heuristics and skills a request needs and returns the answer through the customer's API key. The other checks and rates each response, flagging weak ones for review so we can improve Skillify's answers.",
    "The setup instructions in the console are mine too, written so people who aren't technical can get started. I also worked on the frontend of Skillify's public website.",
  ],
  tags: ["Supabase", "PostgreSQL", "Google OAuth", "LLM routing", "Node.js"],
  links: [
    { label: "Console (sign-in)", href: "https://console.skillify.so" },
    { label: "Visit skillify.so", href: "https://skillify.so" },
  ],
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

export const monteCarloDcf: Feature = {
  name: "Monte Carlo DCF",
  kind: "Valuation tool · Open source",
  image: "/monte-carlo-dcf.webp",
  imageAlt: "The Monte Carlo DCF valuing Home Depot: price, median value, P10 to P90 range, the growth the price implies, and the distribution of 10,000 simulated values",
  paragraphs: [
    "Type in a ticker and it values the company 10,000 times with different inputs. It shows the range of values, how many scenarios beat today's price, and the growth the price implies.",
    "Growth and margins are pulled toward what similar US companies actually achieved, fitted on 16,000 company-years of SEC filings, and the inputs are linked by estimated correlations. Foreign companies are valued in their own currency and converted at today's rate.",
    "It pulls from SEC EDGAR, FMP and Yahoo, and checks the sources against each other. Tested on 100 large stocks, the price fell inside its P10 to P90 range for 60% of them. In a 2015 to 2020 backtest on US small caps, including companies that later delisted, it picked stocks at least as well as P/E, P/S and P/B.",
  ],
  tags: ["Python", "NumPy", "SciPy", "Streamlit", "SEC EDGAR"],
  links: [
    { label: "Open the app", href: "https://hugh-dcf-calculator.streamlit.app/" },
    { label: "View on GitHub", href: "https://github.com/hugharcher5/Monte-Carlo-DCF" },
  ],
};

export const skillifyTrading: Feature = {
  name: "Skillify Trading",
  kind: "Personal project · Trading every weekday",
  image: "/skillify-trading.webp",
  imageAlt: "Skillify Trading triggers page: live one-standard-deviation thresholds for the S&P 500, long Treasuries, USD/JPY, gold and oil",
  paragraphs: [
    "My own project, separate from my work at Blackkite: a test of whether Skillify's market calls make money when nobody steps in. It trades an Interactive Brokers paper account completely on its own. Every weekday at the London open, a scheduled job checks the market is open and the risk limits allow trading, sends Skillify a snapshot of the portfolio and the market, and places the trades Skillify asks for after sizing them and checking each against the limits.",
    "Between sessions, a monitor checks the S&P 500, long-dated Treasuries, USD/JPY, gold and oil every 15 minutes, and wakes the system to reassess whenever one moves more than one standard deviation in a day. A drawdown kill switch stops new trades if losses pass a set limit, and every call, decision and order is logged to a dashboard.",
    "The account limits what it can trade. It is a cash account, which IBKR only upgrades to margin from age 21, so it can't short most stocks and ETFs. EU rules also block US-listed ETFs, so it trades their European (UCITS) versions instead.",
  ],
  tags: ["Python", "Interactive Brokers API", "Supabase", "GitHub Actions", "Streamlit"],
  links: [{ label: "Open the dashboard", href: "https://skillify-trading-ibkr.streamlit.app/" }],
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
  links: [
    { label: "Play GeoGrail", href: "https://geograil.vercel.app" },
    { label: "View on GitHub", href: "https://github.com/hugharcher5/Flag-Guesser" },
  ],
};

export const tools: Feature[] = [
  {
    name: "Screen Capture to PDF",
    kind: "Chrome extension · Daily use",
    image: "/screen-capture-example.webp",
    imageAlt: "First page of the PDF the extension saved from Wikipedia's Golf article",
    imageHref: "/screen-capture-example.pdf",
    paragraphs: [
      "A Chrome extension I use every day, and a couple of friends use it too. One keyboard shortcut saves the whole page you're on as a PDF in your Downloads folder, ready to hand to an AI model. It's handy when I'm using AI to work through websites.",
      "The example pictured took one step: I opened Wikipedia's Golf article and pressed Ctrl+Shift+C. The full 28-page PDF was in my Downloads folder straight away.",
    ],
    tags: ["Chrome extension", "JavaScript"],
    links: [
      { label: "View on GitHub", href: "https://github.com/hugharcher5/Screen-Grab-PDF" },
      { label: "Example PDF", href: "/screen-capture-example.pdf" },
    ],
  },
  {
    name: "Morning Brief",
    kind: "Personal tool · Open source",
    paragraphs: [
      "A short audio briefing on markets and news, emailed to me each morning, which I listen to on the way to work. It covers rates, the major indices, gold and EUR/USD, explains any move bigger than 1.5 standard deviations of its one-year daily range, and says what's priced for the next Fed and ECB meetings, then the news I follow. Claude writes the script and ElevenLabs reads it.",
    ],
    audio: { src: "/morning-brief-sample.mp3", label: "Sample briefing, 10 October 2026 (about 11 minutes)" },
    tags: ["Python", "Claude API", "ElevenLabs", "GitHub Actions"],
    links: [{ label: "View on GitHub", href: "https://github.com/hugharcher5/morning-brief" }],
  },
  {
    name: "Claude Code workflows",
    kind: "Personal kit · Open source",
    paragraphs: ["My personal Claude Code setup, reused across every project: hooks, memory and model routing."],
    tags: ["Claude Code", "Python", "Hooks", "Agents"],
    links: [{ label: "View on GitHub", href: "https://github.com/hugharcher5/claude-code-workflow" }],
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
  {
    group: "Certifications",
    items: [
      "CFA Level I Candidate (May 2027)",
      "Bloomberg Market Concepts (BMC)",
      "IBM Python for Data Science, AI & Development",
    ],
  },
];
