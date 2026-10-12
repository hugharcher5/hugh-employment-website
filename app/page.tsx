import {
  archerVentures,
  doomscroll,
  education,
  geograil,
  monteCarloDcf,
  profile,
  roles,
  skillify,
  skillifyTrading,
  skills,
  tools,
  type Feature,
} from "./content";

const wrap = "mx-auto w-full max-w-[1120px] px-5 sm:px-8";
const ext = { target: "_blank", rel: "noopener noreferrer" };
const btn =
  "inline-flex min-h-11 items-center gap-2 rounded-md border border-line bg-surface px-4 text-[0.95rem] font-medium text-text transition-colors duration-200 hover:border-text";
const btnPrimary =
  "inline-flex min-h-11 items-center gap-2 rounded-md border border-text bg-text px-4 text-[0.95rem] font-medium text-bg transition-opacity duration-200 hover:opacity-85";
const label = "font-mono text-[0.72rem] tracking-[0.14em] text-muted uppercase";
const newTab = <span className="sr-only"> (opens in a new tab)</span>;

const arrow = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

const linkedinLogo = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);
const githubLogo = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.62-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3" />
  </svg>
);

const nav = [
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Section({ id, n, title, intro, children }: { id: string; n: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="grid gap-8 border-t border-line py-16 md:py-20 lg:grid-cols-[230px_1fr] lg:gap-12">
      <header className="self-start lg:sticky lg:top-24">
        <p className={label}>{n}</p>
        <h2 className="mt-2 font-serif text-[2rem] leading-tight font-medium tracking-tight">{title}</h2>
        {intro && <p className="mt-3 max-w-[34ch] text-[0.95rem] text-muted">{intro}</p>}
      </header>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Built with">
      {tags.map((t) => (
        <li key={t} className="rounded bg-tag px-2 py-0.5 font-mono text-[0.72rem] text-muted">{t}</li>
      ))}
    </ul>
  );
}

function host(href: string) {
  return href.startsWith("http") ? new URL(href).host.replace(/^www\./, "") : "hugharcher.vercel.app";
}

/** Screenshot in a thin window frame that shows where it lives. */
function Shot({ f, className = "" }: { f: Feature; className?: string }) {
  const href = f.imageHref ?? f.links[0].href;
  return (
    <a href={href} {...ext} className={`group block overflow-hidden rounded-lg border border-line bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.05)] ${className}`}>
      <span className="flex items-center gap-2 border-b border-line bg-tag px-3 py-1.5 font-mono text-[0.7rem] text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
        {host(href)}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={f.image} alt={f.imageAlt ?? ""} width={1200} height={750} loading="lazy" className="shot aspect-[16/10] w-full object-cover object-top" />
      <span className="sr-only">Open {f.name}{newTab}</span>
    </a>
  );
}

function Links({ f }: { f: Feature }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {f.links.map((l, i) => (
        <a key={l.href} href={l.href} {...ext} className={i === 0 ? btnPrimary : btn}>
          {l.label}
          {arrow}
          {newTab}
        </a>
      ))}
    </div>
  );
}

/** Large card for the projects that matter most: screenshot beside the write-up. */
function Featured({ f, flip = false }: { f: Feature; flip?: boolean }) {
  return (
    <article className={`grid items-start gap-6 md:gap-9 ${flip ? "md:grid-cols-[1fr_1.2fr]" : "md:grid-cols-[1.2fr_1fr]"}`}>
      {f.image && <Shot f={f} className={`md:sticky md:top-24 ${flip ? "md:order-2" : ""}`} />}
      <div className="flex flex-col gap-4">
        <p className="font-mono text-[0.72rem] tracking-[0.14em] text-accent uppercase">{f.kind}</p>
        <h3 className="font-serif text-[1.75rem] leading-tight font-medium tracking-tight">{f.name}</h3>
        {f.paragraphs.map((p) => (
          <p key={p} className="text-[0.97rem] leading-7 text-body">{p}</p>
        ))}
        <Tags tags={f.tags} />
        <Links f={f} />
      </div>
    </article>
  );
}

/** Smaller card for side projects and everyday tools. */
function Compact({ f }: { f: Feature }) {
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-line bg-surface p-5">
      {f.image && <Shot f={f} className="mb-1" />}
      <p className="font-mono text-[0.7rem] tracking-[0.14em] text-accent uppercase">{f.kind}</p>
      <h3 className="font-serif text-[1.35rem] leading-tight font-medium">{f.name}</h3>
      {f.paragraphs.map((p) => (
        <p key={p} className="text-[0.93rem] leading-6 text-body">{p}</p>
      ))}
      {f.features && (
        <ul className="grid gap-x-5 gap-y-1 text-sm text-body sm:grid-cols-2">
          {f.features.map((x) => (
            <li key={x} className="flex gap-2"><span className="text-accent" aria-hidden>–</span>{x}</li>
          ))}
        </ul>
      )}
      {f.audio && (
        <figure className="flex flex-col gap-1.5 rounded-md bg-tag p-3">
          <figcaption className="font-mono text-[0.7rem] text-muted">{f.audio.label}</figcaption>
          <audio controls preload="metadata" src={f.audio.src} className="w-full">
            <a href={f.audio.src}>Download the sample briefing</a>
          </audio>
        </figure>
      )}
      <div className="mt-auto flex flex-col gap-2 pt-2">
        <Tags tags={f.tags} />
        <div className="flex flex-wrap gap-x-5">
          {f.links.map((l) => (
            <a key={l.href} href={l.href} {...ext} className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent hover:underline">
              {l.label}
              {arrow}
              {newTab}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function Timeline({ rows }: { rows: { key: string; when: string; title: string; sub: string; points: string[] }[] }) {
  return (
    <ol className="flex flex-col">
      {rows.map((r, i) => (
        <li key={r.key} className={`grid gap-1 py-6 sm:grid-cols-[150px_1fr] sm:gap-8 ${i ? "border-t border-line" : "pt-1"}`}>
          <p className="pt-1 font-mono text-[0.78rem] text-muted tabular-nums">{r.when}</p>
          <div>
            <h3 className="text-[1.05rem] font-semibold">{r.title}</h3>
            <p className="text-[0.95rem] text-muted">{r.sub}</p>
            {r.points.length > 0 && (
              <ul className="mt-2.5 flex flex-col gap-1.5">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-[0.97rem] text-body">
                    <span className="mt-[0.75em] h-px w-3 flex-none bg-accent" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  const facts = [
    { k: "Studying", v: "BComm, UCD Quinn School · 2028" },
    { k: "Grades", v: "GPA 3.8 · First Class Honours" },
    { k: "Now", v: "IBM Retirement Fund · Blackkite Ventures" },
    { k: "Exchange", v: "Singapore Management University" },
    { k: "Based", v: "Dublin" },
  ];
  const others = [geograil, ...tools];

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-text focus:px-3 focus:py-2 focus:text-bg">
        Skip to content
      </a>
      <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur">
        <nav className={`${wrap} flex h-14 items-center gap-6`} aria-label="Main">
          <a href="#top" className="flex-none font-serif text-lg font-medium">{profile.name}</a>
          <ul className="ml-auto flex min-w-0 gap-5 overflow-x-auto text-sm whitespace-nowrap text-muted">
            {nav.map((n) => (
              <li key={n.href} className={n.href === "#education" || n.href === "#work" ? "hidden md:block" : n.href === "#contact" ? "hidden sm:block" : ""}>
                <a className="inline-flex min-h-11 items-center hover:text-text" href={n.href}>{n.label}</a>
              </li>
            ))}
            <li><a className="inline-flex min-h-11 items-center font-medium text-text hover:text-accent" href={profile.cv} {...ext}>CV{newTab}</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <div id="top" className={`${wrap} grid gap-12 pt-16 pb-16 md:pt-24 lg:grid-cols-[1.35fr_1fr] lg:items-end`}>
          <div>
            <p className={label}>Finance · AI · Dublin</p>
            <h1 className="mt-5 font-serif text-[clamp(2.4rem,6vw,4.1rem)] leading-[1.04] font-medium tracking-tight text-balance">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-[58ch] text-lg leading-8 text-body">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <a className={btnPrimary} href={profile.cv} {...ext}>View my CV{arrow}{newTab}</a>
              <a className={btn} href={`mailto:${profile.email}`}>Email</a>
              <a className={btn} href={profile.linkedin} {...ext}>{linkedinLogo}LinkedIn{newTab}</a>
              <a className={btn} href={profile.github} {...ext}>{githubLogo}GitHub{newTab}</a>
            </div>
          </div>
          <dl className="rounded-lg border border-line bg-surface">
            {facts.map((f, i) => (
              <div key={f.k} className={`grid grid-cols-[92px_1fr] gap-4 px-5 py-3.5 ${i ? "border-t border-line" : ""}`}>
                <dt className="pt-0.5 font-mono text-[0.7rem] tracking-[0.12em] text-muted uppercase">{f.k}</dt>
                <dd className="text-[0.95rem] font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={wrap}>
          <Section id="education" n="01" title="Education">
            <Timeline rows={education.map((e) => ({ key: e.name, when: e.when, title: e.name, sub: `${e.detail} · ${e.where}`, points: e.points }))} />
          </Section>

          <Section id="experience" n="02" title="Experience">
            <Timeline rows={roles.map((r) => ({ key: r.title, when: r.when, title: r.title, sub: r.org, points: r.points }))} />
          </Section>

          <Section id="work" n="03" title="At work" intro="Skillify is the AI tool for hedge fund portfolio managers I build at Blackkite Ventures.">
            <Featured f={skillify} />
          </Section>

          <Section id="projects" n="04" title="Finance projects" intro="Trading and valuation systems I built in my own time.">
            <div className="flex flex-col gap-14">
              <Featured f={skillifyTrading} />
              <Featured f={monteCarloDcf} flip />
            </div>
          </Section>

          <Section id="company" n="05" title="My company" intro="Archer Ventures Limited, the Irish company I set up to build and run my own products.">
            <div className="flex flex-col gap-14">
              <Featured f={archerVentures} />
              <Featured f={doomscroll} flip />
            </div>
          </Section>

          <Section id="other" n="06" title="Other things I've built" intro="A game I built while learning to code, and tools I use every day.">
            <div className="grid gap-5 md:grid-cols-2">
              {others.map((f) => (
                <Compact key={f.name} f={f} />
              ))}
            </div>
          </Section>

          <Section id="skills" n="07" title="Skills">
            <div className="flex flex-col gap-7">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3 className={label}>{s.group}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <li key={it} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.93rem]">{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section id="contact" n="08" title="Get in touch">
            <p className="max-w-[56ch] text-lg text-body">{profile.contactNote}</p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <a className={btnPrimary} href={profile.linkedin} {...ext}>{linkedinLogo}Message me on LinkedIn{newTab}</a>
              <a className={btn} href={`mailto:${profile.email}`}>{profile.email}</a>
              <a className={btn} href={profile.cv} {...ext}>CV{newTab}</a>
            </div>
          </Section>
        </div>
      </main>

      <footer className="border-t border-line py-8 text-sm text-muted">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-4`}>
          <p>© 2026 {profile.name} · Dublin · Updated October 2026</p>
          <ul className="flex gap-5">
            <li><a className="hover:text-text" href={profile.linkedin} {...ext}>LinkedIn{newTab}</a></li>
            <li><a className="hover:text-text" href={profile.github} {...ext}>GitHub{newTab}</a></li>
            <li><a className="hover:text-text" href={`mailto:${profile.email}`}>Email</a></li>
            <li><a className="hover:text-text" href={profile.cv} {...ext}>CV{newTab}</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
