import { profile, projects, skills } from "@/data/content";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-12 border-t border-slate-200">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
        <nav className="mx-auto max-w-3xl px-4 h-14 flex items-center justify-between">
          <a href="#top" className="font-semibold">VH</a>
          <div className="flex gap-5 text-sm text-slate-600">
            <a href="#projects" className="hover:text-ink">Projects</a>
            <a href="#skills" className="hover:text-ink">Skills</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-4">
        <div className="py-16 sm:py-24">
          <p className="text-sm font-medium text-accent">{profile.role}</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.cv} className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90">
              Download CV
            </a>
            <a href={profile.github} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50">
              GitHub
            </a>
            <a href={profile.linkedin} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50">
              LinkedIn
            </a>
          </div>
        </div>

        <Section id="projects" title="Projects">
          <div className="space-y-6">
            {projects.map((p) => (
              <article key={p.title} className="rounded-xl border border-slate-200 p-5 sm:p-6 hover:shadow-sm transition">
                <p className="text-xs text-slate-500">{p.context}</p>
                <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{p.description}</p>

                <h4 className="mt-4 text-sm font-semibold">My part</h4>
                <ul className="mt-1 list-disc pl-5 text-slate-600 space-y-0.5">
                  {p.myPart.map((m) => <li key={m}>{m}</li>)}
                </ul>

                {p.note && <p className="mt-3 text-sm italic text-slate-500">{p.note}</p>}

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">{s}</span>
                  ))}
                </div>

                {p.links.length > 0 && (
                  <div className="mt-4 flex gap-4 text-sm font-medium">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                        {l.label} →
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-6 sm:grid-cols-3">
            {skills.map((g) => (
              <div key={g.group}>
                <h3 className="font-semibold">{g.group}</h3>
                <p className="mt-1 text-slate-600">{g.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-slate-600">
            The easiest way to reach me is by email:{" "}
            <a href={`mailto:${profile.email}`} className="font-medium text-accent hover:underline">{profile.email}</a>
          </p>
        </Section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
