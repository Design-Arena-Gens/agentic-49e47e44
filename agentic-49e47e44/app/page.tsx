import Image from "next/image";
import Link from "next/link";
import { study } from "@/lib/study";

function formatId(id: string) {
  return id.replace(/[^a-z0-9-]/gi, "-").toLowerCase();
}

export default function Home() {
  return (
    <div className="bg-stone-100">
      <header className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-50">
              Mémoire d&apos;ingénieure
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {study.title}
            </h1>
            <p className="max-w-2xl text-base font-light text-emerald-100 sm:text-lg">
              {study.subtitle}
            </p>
          </div>
          <div className="rounded-xl bg-white/10 px-6 py-4 text-sm text-emerald-50 backdrop-blur">
            <p className="font-semibold uppercase tracking-widest text-emerald-100">
              {study.authorship.institution}
            </p>
            <p className="mt-2">
              Auteur·e : <span className="font-semibold">{study.authorship.author}</span>
            </p>
            <p>
              Encadrant :{" "}
              <span className="font-semibold">{study.authorship.supervisor}</span>
            </p>
            <p>{study.authorship.academicYear}</p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 lg:flex-row">
        <aside className="top-8 hidden w-full max-w-xs shrink-0 lg:sticky lg:block">
          <div className="rounded-2xl bg-white p-6 shadow-lg shadow-emerald-950/5">
            <h2 className="text-lg font-semibold uppercase text-emerald-700">
              Table des matières
            </h2>
            <nav className="mt-4 space-y-4 text-sm leading-6">
              {study.sections.map((section) => (
                <div key={section.id} className="space-y-2">
                  <Link
                    href={`#${formatId(section.id)}`}
                    className="block font-semibold text-stone-800 transition hover:text-emerald-600"
                  >
                    {section.title}
                  </Link>
                  <ul className="space-y-1 pl-3 text-stone-600">
                    {section.subsections.map((subsection) => (
                      <li key={subsection.id}>
                        <Link
                          href={`#${formatId(subsection.id)}`}
                          className="text-stone-500 transition hover:text-emerald-600"
                        >
                          {subsection.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 text-sm text-emerald-50 shadow-lg shadow-emerald-950/10">
            <h2 className="text-base font-semibold uppercase tracking-widest text-emerald-100">
              Mots-clés
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <article className="flex-1 space-y-16">
          <section className="rounded-3xl bg-white p-8 shadow-xl shadow-stone-900/5">
            <h2 className="text-2xl font-semibold text-stone-800">Résumé</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-stone-700">
              {study.abstract.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-xl shadow-stone-900/5">
            <h2 className="text-2xl font-semibold text-stone-800">
              Synthèse exécutive
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-stone-700">
              {study.executiveSummary.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          {study.sections.map((section) => (
            <section
              key={section.id}
              id={formatId(section.id)}
              className="scroll-mt-24 rounded-3xl bg-white p-10 shadow-xl shadow-stone-900/5"
            >
              <header className="border-b border-stone-100 pb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                  Partie
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-stone-900">
                  {section.title}
                </h2>
                <p className="mt-3 text-base text-stone-500">{section.summary}</p>
              </header>
              <div className="mt-8 space-y-12">
                {section.subsections.map((subsection) => (
                  <div key={subsection.id} id={formatId(subsection.id)} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-stone-800">
                        {subsection.title}
                      </h3>
                    </div>
                    <div className="space-y-4 text-lg leading-relaxed text-stone-700">
                      {subsection.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                      {subsection.bullets && (
                        <ul className="mt-4 list-disc space-y-2 pl-6 text-stone-700">
                          {subsection.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {subsection.figures && subsection.figures.length > 0 && (
                      <div className="grid gap-6 md:grid-cols-2">
                        {subsection.figures.map((figure) => (
                          <figure
                            key={figure.id}
                            className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-sm transition hover:shadow-lg"
                          >
                            <Image
                              src={figure.src}
                              alt={figure.alt}
                              width={800}
                              height={600}
                              className="h-auto w-full"
                              priority={figure.id === "fig-marche"}
                            />
                            <figcaption className="space-y-1 p-4 text-sm text-stone-600">
                              <p className="font-semibold text-stone-700">{figure.title}</p>
                              <p>{figure.description}</p>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section
            id="conclusion"
            className="scroll-mt-24 rounded-3xl bg-white p-10 shadow-xl shadow-stone-900/5"
          >
            <header className="border-b border-stone-100 pb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Conclusion
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-stone-900">
                Conclusion générale
              </h2>
            </header>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-stone-700">
              {study.conclusion.synthesis.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-lg text-emerald-900">
              <h3 className="text-xl font-semibold">Recommandations</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                {study.conclusion.recommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="bibliographie"
            className="scroll-mt-24 rounded-3xl bg-white p-10 shadow-xl shadow-stone-900/5"
          >
            <header className="border-b border-stone-100 pb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Références
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-stone-900">Bibliographie</h2>
            </header>
            <ol className="mt-6 space-y-3 text-lg text-stone-700">
              {study.bibliography.map((ref, index) => (
                <li key={index} className="pl-2">
                  {ref}
                </li>
              ))}
            </ol>
          </section>

          <section
            id="annexes"
            className="scroll-mt-24 rounded-3xl bg-white p-10 shadow-xl shadow-stone-900/5"
          >
            <header className="border-b border-stone-100 pb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Annexes
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-stone-900">
                Annexes techniques
              </h2>
            </header>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {study.appendices.map((appendix) => (
                <div
                  key={appendix.title}
                  className="rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-stone-800">{appendix.title}</h3>
                  <div className="mt-3 space-y-2 text-sm text-stone-600">
                    {appendix.content.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>

      <footer className="bg-stone-900 py-10 text-stone-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
              Mémoire d&apos;ingénieure
            </p>
            <p className="mt-2 text-lg font-semibold text-white">{study.title}</p>
          </div>
          <div className="text-sm text-stone-400">
            <p>{study.authorship.institution}</p>
            <p>{study.authorship.academicYear}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
