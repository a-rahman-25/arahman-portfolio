import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudy, ERP_DEMO_URL, type Lang } from "@/lib/content";
import erp1 from "@/assets/projects/hafco-erp-1.webp";
import erp2 from "@/assets/projects/hafco-erp-2.webp";
import erp3 from "@/assets/projects/hafco-erp-3.webp";

export const Route = createFileRoute("/hafco")({
  head: () => ({ meta: [
    { title: "Hafco Base ERP Case Study · Abdelrahman Mohamed" },
    { name: "description", content: "How Abdelrahman built a bilingual 13-module ERP for HAFCO, automating payroll for 190 employees and connecting Saudi government platforms." },
    { property: "og:title", content: "Hafco Base ERP · Engineering Case Study" },
    { property: "og:description", content: "Sole development of a 13-module ERP, Android driver app, payroll automation and Saudi integrations." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HafcoCaseStudy,
});

function HafcoCaseStudy() {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => { if (localStorage.getItem("lang") === "ar") setLang("ar"); }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const c = caseStudy[lang];
  return <main className="mx-auto max-w-5xl px-5 py-10 md:px-10">
    <nav className="flex items-center justify-between gap-4">
      <Button asChild variant="ghost"><Link to="/"><ArrowLeft className="h-4 w-4 rtl:rotate-180"/>{c.back}</Link></Button>
      <Button variant="outline" onClick={() => { const next = lang === "en" ? "ar" : "en"; setLang(next); localStorage.setItem("lang", next); }}><Globe className="h-4 w-4"/>{lang === "en" ? "عربي" : "EN"}</Button>
    </nav>
    <header className="py-16 md:py-24">
      <p className="text-gold">{c.role}</p>
      <h1 className="mt-5 font-display text-4xl font-semibold md:text-6xl">{c.title}</h1>
      <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">{c.intro}</p>
      <div className="mt-8 flex flex-wrap items-center gap-4"><Button asChild size="lg"><a href={ERP_DEMO_URL} target="_blank" rel="noreferrer">{c.demo}<ArrowUpRight className="h-4 w-4 rtl:-scale-x-100"/></a></Button><span className="text-sm text-muted-foreground">{c.demoNote}</span></div>
    </header>
    <div className="grid gap-8 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-4">
      {c.results.map(r => <div key={r.label}><strong dir="ltr" className="block font-display text-2xl text-gold">{r.value}</strong><p className="mt-2 text-muted-foreground">{r.label}</p></div>)}
    </div>
    <div className="divide-y divide-border">{c.sections.map((section, i) => <section key={section.title} className="grid gap-6 py-12 md:grid-cols-[1fr_2fr]"><h2 className="font-display text-2xl"><span className="me-3 text-sm text-gold">0{i+1}</span>{section.title}</h2><p className="text-lg leading-relaxed text-muted-foreground">{section.body}</p></section>)}</div>
    <section className="border-t border-border py-12"><h2 className="font-display text-3xl">{c.decisionsTitle}</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">{c.decisions.map((d, i) => <div key={d.title} className="rounded-lg border border-border bg-card p-6"><span className="text-sm text-gold">0{i+1}</span><h3 className="mt-2 font-display text-xl">{d.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{d.body}</p></div>)}</div>
    </section>
    <section className="border-t border-border py-12"><h2 className="font-display text-3xl">{c.archTitle}</h2>
      <div className="mt-8 flex flex-col items-stretch gap-3 text-center text-sm">
        <div className="grid grid-cols-2 gap-3">{c.arch.clients.map(x => <div key={x} className="rounded-lg border border-border bg-card p-4">{x}</div>)}</div>
        <span aria-hidden className="text-gold">↓</span>
        <div className="rounded-lg border border-gold/60 bg-accent p-4 font-semibold">{c.arch.core}</div>
        <span aria-hidden className="text-gold">↓</span>
        <div className="grid grid-cols-3 gap-3">{c.arch.services.map(x => <div key={x} className="rounded-lg border border-border bg-card p-4">{x}</div>)}</div>
        <span aria-hidden className="text-gold">↓</span>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{c.arch.external.map(x => <div key={x} className="rounded-lg border border-dashed border-gold/50 p-3">{x}</div>)}</div>
      </div>
    </section>
    <section className="border-t border-border py-12"><h2 className="font-display text-3xl">{c.galleryTitle}</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">{[erp1, erp2, erp3].map((src, i) => <img key={src} src={src} alt={`${c.imageNote} ${i+1}`} loading="lazy" className="aspect-[16/10] w-full rounded-lg border border-border object-cover"/>)}</div>
      <p className="mt-3 text-sm text-muted-foreground">{c.imageNote}</p>
    </section>
    <div className="flex flex-wrap gap-4 py-12"><Button asChild><a href={ERP_DEMO_URL} target="_blank" rel="noreferrer">{c.demo}</a></Button><Button asChild variant="outline"><a href="https://www.hafcobigmovers.com/" target="_blank" rel="noreferrer">{c.website}</a></Button><Button asChild variant="ghost"><Link to="/">{c.back}</Link></Button></div>
  </main>;
}