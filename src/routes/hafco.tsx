import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudy, type Lang } from "@/lib/content";
import companyScreen from "@/assets/projects/hafco-1.webp";

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
    </header>
    <div className="grid gap-10 border-y border-border py-8 md:grid-cols-3">
      {[{ value: "13", label: lang === "en" ? "ERP modules" : "وحدة ERP" }, { value: "190", label: lang === "en" ? "Employees on payroll" : "موظفاً في مسيّر الرواتب" }, { value: lang === "en" ? "2–3 days → seconds" : "2–3 أيام ← ثوانٍ", label: lang === "en" ? "Payroll processing" : "معالجة الرواتب" }].map(stat => <div key={stat.label}><strong className="font-display text-3xl text-gold">{stat.value}</strong><p className="mt-2 text-muted-foreground">{stat.label}</p></div>)}
    </div>
    <div className="divide-y divide-border">{c.sections.map((section, i) => <section key={section.title} className="grid gap-6 py-12 md:grid-cols-[1fr_2fr]"><h2 className="font-display text-2xl"><span className="me-3 text-sm text-gold">0{i+1}</span>{section.title}</h2><p className="text-lg leading-relaxed text-muted-foreground">{section.body}</p></section>)}</div>
    <figure className="mt-8"><img src={companyScreen} alt={c.imageNote} className="aspect-[16/10] w-full rounded-lg border border-border object-cover"/><figcaption className="mt-3 text-sm text-muted-foreground">{c.imageNote}</figcaption></figure>
    <div className="flex flex-wrap gap-4 py-12"><Button asChild><a href="https://www.hafcobigmovers.com/" target="_blank" rel="noreferrer">{c.website}</a></Button><Button asChild variant="outline"><Link to="/">{c.back}</Link></Button></div>
  </main>;
}