import { archerVentures, doomscroll, geograil, profile, projects, roles, skillify, skillifySite, skills, tools, type Feature } from "./content";

const wrap = "mx-auto max-w-[880px] px-4 sm:px-6";
const btn =
  "inline-flex min-h-11 items-center rounded-lg border border-line px-[18px] text-[0.95rem] font-medium transition-colors hover:border-muted";
const btnPrimary =
  "inline-flex min-h-11 items-center rounded-lg border border-text bg-text px-[18px] text-[0.95rem] font-medium text-bg transition-opacity hover:opacity-85";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-16">
      <h2 className="mb-8 font-serif text-[1.75rem] font-medium">{title}</h2>
      {children}
    </section>
  );
}

const arrow = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

/** Large screenshot card. One link: the whole card is clickable. Several: the image opens the first. */
function FeatureCard({ feature: f }: { feature: Feature }) {
  const single = f.links.length === 1 && !f.imageHref;
  const ext = { target: "_blank", rel: "noopener noreferrer" };
  const shot = (
    <div className="aspect-[16/10] overflow-hidden rounded-xl bg-tag">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={f.image}
        alt={f.imageAlt ?? ""}
        width={1200}
        height={750}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
      />
    </div>
  );
  const body = (
    <div className="flex flex-col gap-3 px-1 pb-2 md:py-2 md:pr-3 md:pl-0">
      <span className="text-xs font-semibold tracking-wider text-accent uppercase">{f.kind}</span>
      <h3 className="font-serif text-[1.6rem] leading-tight font-medium">{f.name}</h3>
      {f.paragraphs.map((p) => (
        <p key={p} className="text-[0.95rem] text-muted">{p}</p>
      ))}
      <div className="flex flex-wrap gap-1.5 pt-0.5">
        {f.tags.map((t) => (
          <span key={t} className="rounded-md bg-tag px-2 py-0.5 text-xs text-muted">{t}</span>
        ))}
      </div>
      <div className="mt-1 flex flex-wrap gap-2.5">
        {f.links.map((l, i) =>
          single ? (
            <span key={l.href} className={`${btnPrimary} gap-2`}>{l.label}{arrow}</span>
          ) : (
            <a key={l.href} href={l.href} {...ext} className={`${i ? btn : btnPrimary} gap-2`}>{l.label}{arrow}</a>
          ),
        )}
      </div>
    </div>
  );
  const featureList = f.features && (
    <ul className="grid gap-x-5 gap-y-1 text-sm text-muted sm:grid-cols-2">
      {f.features.map((x) => (
        <li key={x} className="flex gap-2"><span className="text-accent" aria-hidden>·</span>{x}</li>
      ))}
    </ul>
  );
  if (!f.image) {
    return (
      <a href={f.links[0].href} {...ext} className="group flex flex-col gap-3 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-muted">
        <span className="text-xs font-semibold tracking-wider text-accent uppercase">{f.kind}</span>
        <h3 className="font-serif text-[1.3rem] leading-tight font-medium">{f.name}</h3>
        {f.paragraphs.map((p) => (
          <p key={p} className="text-[0.95rem] text-muted">{p}</p>
        ))}
        {featureList}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {f.tags.map((t) => (
            <span key={t} className="rounded-md bg-tag px-2 py-0.5 text-xs text-muted">{t}</span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline">
            {f.links[0].label}
            {arrow}
          </span>
        </div>
      </a>
    );
  }
  const card =
    "group grid items-start gap-4 rounded-2xl border border-line bg-surface p-4 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-muted hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:grid-cols-[1.15fr_1fr] md:gap-7";
  return single ? (
    <a href={f.links[0].href} {...ext} className={card}>{shot}{body}</a>
  ) : (
    <div className={card}>
      <a href={f.imageHref ?? f.links[0].href} {...ext} aria-label={f.imageHref ? `Open the example: ${f.name}` : `${f.links[0].label}: ${f.name}`}>{shot}</a>
      {body}
    </div>
  );
}

export default function Home() {
  const links = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
  ].filter((l) => l.href);

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-bg">
        <nav className={`${wrap} flex h-15 items-center justify-between`}>
          <a href="#top" className="font-serif text-lg font-medium">
            {profile.name}
          </a>
          <ul className="flex gap-5 text-sm text-muted">
            <li className="hidden sm:block"><a className="hover:text-text" href="#experience">Experience</a></li>
            <li className="hidden lg:block"><a className="hover:text-text" href="#skillify">Skillify</a></li>
            <li className="hidden lg:block"><a className="hover:text-text" href="#doomscroll">My company</a></li>
            <li className="hidden lg:block"><a className="hover:text-text" href="#geograil">GeoGrail</a></li>
            <li><a className="hover:text-text" href="#projects">Projects</a></li>
            <li className="hidden sm:block"><a className="hover:text-text" href="#skills">Skills</a></li>
            <li><a className="hover:text-text" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="top" className={wrap}>
        <div className="pt-22 pb-16">
          <h1 className="mb-5 font-serif text-[clamp(2.2rem,5.5vw,3.4rem)] leading-[1.1] font-medium tracking-tight">
            {profile.headline}
          </h1>
          <p className="max-w-[60ch] text-lg text-muted">{profile.intro}</p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <a className={btnPrimary} href={`mailto:${profile.email}`}>Email me</a>
            {links.map((l) => (
              <a key={l.label} className={btn} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <Section id="experience" title="Experience">
          {roles.map((r, i) => (
            <article
              key={r.title}
              className={`grid gap-1 py-6 sm:grid-cols-[160px_1fr] sm:gap-6 ${i ? "border-t border-line" : "pt-0"}`}
            >
              <div className="pt-0.5 text-sm text-muted">{r.when}</div>
              <div>
                <h3 className="font-semibold">{r.title}</h3>
                <p className="mb-2 text-[0.95rem] text-muted">{r.org}</p>
                <ul className="list-disc space-y-1 pl-[18px] marker:text-accent">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Section>

        <Section id="skillify" title="At work">
          <div className="flex flex-col gap-5">
            <FeatureCard feature={skillify} />
            <FeatureCard feature={skillifySite} />
          </div>
        </Section>

        <Section id="doomscroll" title="My company">
          <div className="flex flex-col gap-5">
            <FeatureCard feature={archerVentures} />
            <FeatureCard feature={doomscroll} />
          </div>
        </Section>

        <Section id="geograil" title="For fun">
          <FeatureCard feature={geograil} />
        </Section>

        <Section id="tools" title="Daily tools">
          <div className="flex flex-col gap-5">
            {tools.map((t) => (
              <FeatureCard key={t.name} feature={t} />
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.name}
                className="flex flex-col gap-2.5 rounded-xl border border-line bg-surface p-6 transition-colors hover:border-muted"
              >
                <span className="text-xs font-semibold tracking-wider text-accent uppercase">{p.kind}</span>
                <h3 className="font-serif text-[1.3rem] leading-tight font-medium">{p.name}</h3>
                <p className="text-[0.95rem] text-muted">{p.blurb}</p>
                {p.todo && <p className="text-xs text-[#B4540A]">{p.todo}</p>}
                {p.href && (
                  <a className="text-sm font-medium text-accent hover:underline" href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.linkLabel ?? "View →"}
                  </a>
                )}
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md bg-tag px-2 py-0.5 text-xs text-muted">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-7 md:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="mb-2 text-xs font-semibold tracking-wider text-muted uppercase">{s.group}</h3>
                <ul>
                  {s.items.map((it) => (
                    <li key={it} className="border-b border-line py-1.5">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Get in touch">
          <p className="max-w-[56ch] text-muted">{profile.contactNote}</p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <a className={btnPrimary} href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              Message me on LinkedIn
            </a>
            <a className={btn} href={`mailto:${profile.email}`}>Email</a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line py-7 text-sm text-muted">
        <div className={wrap}>© 2026 {profile.name} · Dublin</div>
      </footer>
    </>
  );
}
