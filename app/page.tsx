import { profile, projects, roles, skills } from "./content";

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
