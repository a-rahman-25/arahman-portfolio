import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ElementType, type MouseEvent, type ReactNode } from "react";
import {
  ArrowUpRight, Boxes, Check, Copy, Eye, FileScan, Github, Globe, Landmark, Linkedin, Mail,
  MapPin, Menu, Send, Smartphone, X,
} from "lucide-react";
import { buildMailto, EMAIL, GITHUB, LINKEDIN, projects, t, type Lang, type Project } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdelrahman Mohamed · Full Stack Engineer | AM Launch Web" },
      { name: "description", content: "Full stack engineer in Dammam who built a 13-module bilingual ERP solo. ERP, mobile apps, AI document automation and Saudi integrations." },
      { property: "og:title", content: "Abdelrahman Mohamed · Full Stack Engineer" },
      { property: "og:description", content: "13-module ERP built solo, from the database to Google Play. Bilingual EN/AR portfolio and client redesigns." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type MEv = MouseEvent<HTMLElement>;
const spotlight = {
  onMouseMove: (e: MEv) => {
    const el = e.currentTarget, r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  },
};
const tiltMove = (e: MEv) => {
  const el = e.currentTarget, r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
  el.style.transform = `perspective(900px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translateY(-6px)`;
};
const reset = (e: MEv) => { e.currentTarget.style.transform = ""; };
const tiltGlow = { onMouseMove: (e: MEv) => { spotlight.onMouseMove(e); tiltMove(e); }, onMouseLeave: reset };
const magnetic = {
  onMouseMove: (e: MEv) => {
    const el = e.currentTarget, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translate(${(x * 10).toFixed(2)}px, ${(y * 8 - 3).toFixed(2)}px)`;
  },
  onMouseLeave: reset,
};

function useScrollLinkedFrames() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
    const update = () => {
      const frames = Array.from(document.querySelectorAll<HTMLElement>(".stack-frame"));
      const vh = window.innerHeight;
      frames.forEach((frame, i) => {
        const next = frames[i + 1];
        let cover = 0;
        if (next) cover = clamp01((vh - next.getBoundingClientRect().top) / vh);
        frame.style.setProperty("--frame-cover", cover.toFixed(4));
      });
      const hero = document.getElementById("top");
      if (hero) {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty("--hero-exit", clamp01(-r.top / Math.max(r.height * 0.85, 1)).toFixed(4));
      }
      const chapter = document.querySelector<HTMLElement>(".services-chapter");
      if (chapter) {
        const r = chapter.getBoundingClientRect();
        const p = clamp01(-r.top / Math.max(r.height - vh, 1));
        chapter.style.setProperty("--feed-progress", `${(p * 100).toFixed(2)}%`);
        chapter.dispatchEvent(new CustomEvent("feed", { detail: p }));
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); }); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);
}

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: ElementType }) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const [exitUp, setExitUp] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { setShown(true); setExitUp(false); }
        else { setShown(false); setExitUp(e.boundingClientRect.top < 0); }
      }
    }, { threshold: 0.12, rootMargin: "-8% 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`cine-reveal ${shown ? "is-visible" : ""} ${!shown && exitUp ? "is-exit-up" : ""} ${className}`}>
      {children}
    </Tag>
  );
}

function CountUp({ target, suffix, display }: { target: number; suffix: string; display?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el || target === 0) return;
    let raf = 0, start = 0;
    const tick = (now: number) => {
      const k = Math.min(1, (now - start) / 1400);
      setN(Math.round(target * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      cancelAnimationFrame(raf);
      if (!entries.some((e) => e.isIntersecting)) { setN(0); return; }
      start = performance.now(); raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [target]);
  return <strong ref={ref} dir="ltr" className="block font-display text-4xl font-semibold text-gold md:text-5xl">{target === 0 ? display : `${n}${suffix}`}</strong>;
}

function Logo() {
  return (
    <span className="flex items-center gap-3">
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden>
        <rect width="64" height="64" rx="14" className="fill-forest" />
        <rect x="1" y="1" width="62" height="62" rx="13" fill="none" className="stroke-gold" strokeOpacity=".5" />
        <path d="M14 46 26 16h4l12 30h-6l-3-8H22l-3 8zm10-13h8l-4-11z" className="fill-gold" />
        <path d="M40 46V22h5l4 10 4-10h5v24h-5V32l-4 9-4-9v14z" className="fill-gold" opacity=".8" />
      </svg>
      <span className="leading-tight">
        <span className="block font-display text-base font-semibold">Abdelrahman</span>
        <span className="no-ar-track block text-[0.65rem] uppercase tracking-[0.2em] text-gold">AM Launch Web</span>
      </span>
    </span>
  );
}

function Header({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const c = t[lang];
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let timer = 0, last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 80 && y > last) setHidden(true);
      last = y;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setHidden(false), 260);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); window.clearTimeout(timer); };
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const keys = ["about", "services", "work", "contact"] as const;
  const isHidden = hidden && !open;
  return (
    <header className={`chrome-hide fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 ${isHidden ? "is-hidden" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-start justify-between gap-3">
        <a href="#top" aria-label="Home" className="rounded-xl border border-border bg-background/70 px-3 py-2 backdrop-blur-md">
          <Logo />
        </a>
        <div className="flex items-center gap-2">
          <nav aria-label="Main" aria-hidden={!open}
            className={`hidden items-center overflow-hidden rounded-xl border border-border bg-card/90 backdrop-blur-md transition-all duration-500 ease-out lg:flex ${open ? "max-w-[40rem] px-6 opacity-100" : "pointer-events-none max-w-0 border-transparent px-0 opacity-0"}`}>
            <ul className="flex h-14 items-center gap-7 whitespace-nowrap">
              {keys.map((k, i) => (
                <li key={k} style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                  className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}>
                  <a href={`#${k}`} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="menu-link link-underline text-sm font-medium">
                    <span className="me-1.5 text-[0.65rem] text-gold">0{i + 1}</span>{c.nav[k]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button type="button" onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="h-14 rounded-xl border border-border bg-background/70 px-4 text-sm font-semibold backdrop-blur-md transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
            aria-label={lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}>
            {c.langSwitch}
          </button>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={c.menu}
            className="grid h-14 w-14 place-items-center rounded-xl bg-gold text-primary-foreground shadow-lg transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
            <span className={`transition-transform duration-500 ${open ? "rotate-180" : ""}`}>{open ? <X /> : <Menu />}</span>
          </button>
        </div>
      </div>
      <nav aria-label="Mobile" aria-hidden={!open}
        className={`mx-auto max-w-7xl overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-md transition-all duration-300 ease-out lg:hidden ${open ? "mt-2 max-h-96 opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0"}`}>
        <ul className="p-3">
          {keys.map((k, i) => (
            <li key={k}>
              <a href={`#${k}`} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}
                className="menu-link flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium hover:bg-accent">
                <span><span className="me-2 text-xs text-gold">0{i + 1}</span>{c.nav[k]}</span>
                <ArrowUpRight className="h-4 w-4 text-gold rtl:-scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/* Self-contained SVG/CSS "slides" so no image can ever fail to load */
function DashboardArt() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden>
      <rect width="400" height="260" rx="14" className="fill-card" />
      <rect x="0" y="0" width="80" height="260" rx="14" className="fill-forest" />
      {[30, 55, 80, 105, 130].map((y) => <rect key={y} x="16" y={y} width="48" height="8" rx="4" className="fill-gold" opacity=".35" />)}
      {[100, 200, 300].map((x, i) => (
        <g key={x}><rect x={x} y="20" width="88" height="54" rx="8" className="fill-muted" />
          <rect x={x + 10} y="32" width="40" height="6" rx="3" className="fill-gold" opacity=".6" />
          <text x={x + 10} y="62" className="fill-foreground" fontSize="16" fontWeight="700">{["13", "190", "ZATCA"][i]}</text></g>
      ))}
      <polyline points="100,220 140,180 180,195 220,140 260,160 300,110 340,130 380,90" fill="none" className="stroke-gold" strokeWidth="3" />
      {[100, 140, 180, 220, 260, 300, 340].map((x, i) => <rect key={x} x={x} y={230 - (i % 3 + 1) * 10} width="20" height={(i % 3 + 1) * 10} className="fill-gold" opacity=".25" />)}
    </svg>
  );
}
function PhoneArt() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden>
      <rect width="400" height="260" rx="14" className="fill-forest" />
      <rect x="150" y="18" width="100" height="224" rx="18" className="fill-card stroke-gold" strokeWidth="2" />
      <rect x="164" y="44" width="72" height="40" rx="8" className="fill-muted" />
      {[96, 116, 136, 156].map((y) => <rect key={y} x="164" y={y} width="72" height="12" rx="6" className="fill-gold" opacity=".3" />)}
      <rect x="164" y="190" width="72" height="22" rx="11" className="fill-gold" />
      <circle cx="80" cy="80" r="30" fill="none" className="stroke-gold" strokeDasharray="4 6" />
      <path d="M300 180 l30 -40 l30 40z" className="fill-gold" opacity=".3" />
    </svg>
  );
}
function DocArt() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden>
      <rect width="400" height="260" rx="14" className="fill-card" />
      <rect x="60" y="30" width="130" height="190" rx="8" className="fill-muted" />
      {[60, 80, 100, 120, 140, 160].map((y) => <rect key={y} x="76" y={y} width={y % 40 ? 90 : 70} height="7" rx="3" className="fill-foreground" opacity=".25" />)}
      <rect x="60" y="110" width="130" height="3" className="fill-gold" />
      <path d="M205 125 h30 m-10 -10 l10 10 l-10 10" className="stroke-gold" strokeWidth="3" fill="none" />
      <rect x="250" y="50" width="100" height="150" rx="8" className="fill-forest stroke-gold" strokeOpacity=".5" />
      {[70, 100, 130, 160].map((y) => <g key={y}><rect x="262" y={y} width="30" height="8" rx="4" className="fill-gold" opacity=".6" /><rect x="298" y={y} width="40" height="8" rx="4" className="fill-foreground" opacity=".3" /></g>)}
    </svg>
  );
}
const slides = [DashboardArt, PhoneArt, DocArt];

function Hero({ lang }: { lang: Lang }) {
  const c = t[lang];
  return (
    <section id="top" className="hero-stage relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-32 md:px-8">
      <div aria-hidden className="pointer-events-none absolute -end-40 top-20 h-[36rem] w-[36rem] rounded-full border border-gold/20 animate-spin-slow">
        <div className="absolute start-1/2 top-0 h-3 w-3 rounded-full bg-gold" />
      </div>
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal><p className="no-ar-track mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-gold">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />{c.role}</p></Reveal>
          <Reveal delay={100}><h1 className="font-display text-4xl leading-[1.08] font-semibold text-balance md:text-6xl lg:text-7xl">{c.hero}</h1></Reveal>
          <Reveal delay={200}><p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{c.bio}</p></Reveal>
          <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
            <a href="#work" {...magnetic} className="magnetic inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-4 font-semibold text-primary-foreground shadow-lg">
              {c.ctaWork}<ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" /></a>
            <a href="#contact" {...magnetic} className="magnetic inline-flex items-center gap-2 rounded-xl border border-gold/60 px-7 py-4 font-semibold hover:bg-accent">{c.ctaContact}</a>
          </Reveal>
        </div>
        <Reveal delay={200} className="relative">
          <div className="animate-float relative aspect-[400/260] overflow-hidden rounded-2xl border border-gold/40 shadow-2xl">
            {slides.map((S, i) => (
              <div key={i} className="hero-slide" style={{ animationDelay: `${i * 5}s` }}>
                <div className="animate-slow-zoom h-full w-full"><S /></div>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-6 start-6 rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-xl animate-float" style={{ animationDelay: "1.5s" }}>
            <span className="text-gold">●</span> Google Play · Android
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stats({ lang }: { lang: Lang }) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-4 md:px-8">
      {t[lang].stats.map((s, i) => (
        <Reveal key={i} delay={i * 90}>
          <div {...tiltGlow} className="spot tilt h-full rounded-2xl border border-border bg-card/70 p-6">
            <CountUp target={s.value} suffix={s.suffix} display={"display" in s ? s.display : undefined} />
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="no-ar-track mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">— {children}</p>;
}

function About({ lang }: { lang: Lang }) {
  const c = t[lang];
  return (
    <section id="about" className="stack-frame sticky top-0 bg-card px-4 py-24 md:px-8 md:py-32">
      <div className="stack-frame-body mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal><Kicker>{c.aboutKicker}</Kicker></Reveal>
          <Reveal delay={100}><h2 className="font-display text-4xl font-semibold md:text-5xl">{c.aboutTitle}</h2></Reveal>
          <Reveal delay={200} className="mt-8 flex flex-wrap gap-2">
            {["TypeScript", "React", "PostgreSQL", "ZATCA", "OCR · AI", "Android"].map((s) => (
              <span key={s} className="rounded-full border border-border px-3 py-1 text-xs" dir="ltr">{s}</span>
            ))}
          </Reveal>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          {c.about.map((p, i) => <Reveal key={i} delay={i * 60}><p className={i === 0 ? "text-foreground" : ""}>{p}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}

const serviceIcons = [Boxes, Smartphone, FileScan, Landmark, Globe];

function Services({ lang }: { lang: Lang }) {
  const c = t[lang];
  const ref = useRef<HTMLElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onFeed = (e: Event) => {
      const p = (e as CustomEvent<number>).detail;
      const reel = reelRef.current, win = windowRef.current;
      if (reel && win) {
        const max = Math.max(reel.scrollHeight - win.clientHeight, 0);
        reel.style.transform = `translate3d(0, ${-p * max}px, 0)`;
      }
      setActive(Math.min(c.services.length - 1, Math.floor(p * c.services.length)));
    };
    el.addEventListener("feed", onFeed);
    return () => el.removeEventListener("feed", onFeed);
  }, [c.services.length]);
  return (
    <section id="services" ref={ref} className="services-chapter stack-frame bg-forest">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden px-4 md:px-8">
        {c.services.map((_, i) => (
          <div key={i} aria-hidden className={`service-backdrop ${i === active ? "is-active" : ""}`}
            style={{ background: `radial-gradient(ellipse at ${20 + i * 15}% 40%, oklch(0.32 0.07 ${80 + i * 20} / .55), transparent 60%)` }} />
        ))}
        <div className="relative z-[2] mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_0.7fr] lg:gap-24">
          <div>
            <Kicker>{c.servicesKicker}</Kicker>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">{c.servicesTitle}</h2>
            <p className="mt-6 flex items-baseline gap-2" dir="ltr">
              <strong className="font-display text-5xl text-gold">0{active + 1}</strong>
              <span className="text-muted-foreground">/ 0{c.services.length}</span>
            </p>
            <p className="no-ar-track mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold">{c.servicesCue}</p>
            <div className="service-feed-progress mt-4 h-0.5 w-48 bg-border"><span /></div>
          </div>
          <div ref={windowRef} className="service-feed-window">
            <div ref={reelRef} className="service-feed-reel">
              {c.services.map((s, i) => {
                const Icon = serviceIcons[i];
                return (
                  <article key={i} {...spotlight} className={`service-feed-card spot group ${i === active ? "is-active" : ""}`}>
                    <div className="relative grid h-36 place-items-center overflow-hidden bg-gradient-to-br from-accent to-forest md:h-44">
                      <Icon className="h-16 w-16 text-gold transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6" strokeWidth={1.2} />
                      <span className="absolute end-4 top-4 font-display text-5xl text-gold/20" dir="ltr">0{i + 1}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-muted-foreground">{s.desc}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteMock({ p }: { p: Project }) {
  const h = p.hue;
  return (
    <div className="relative aspect-[16/10] overflow-hidden" style={{ background: `linear-gradient(135deg, oklch(0.3 0.05 ${h}), oklch(0.17 0.03 ${h + 40}))` }}>
      <div className="absolute inset-x-6 top-5 flex items-center justify-between">
        <span className="h-3 w-16 rounded-full" style={{ background: `oklch(0.78 0.11 ${h})` }} />
        <span className="h-6 w-6 rounded-md" style={{ background: `oklch(0.78 0.11 ${h})` }} />
      </div>
      <div className="absolute inset-x-6 top-1/3 space-y-2 transition-transform duration-700 group-hover:-translate-y-2">
        <div className="h-4 w-3/4 rounded bg-foreground/80" />
        <div className="h-4 w-1/2 rounded bg-foreground/60" />
        <div className="h-2 w-2/3 rounded bg-foreground/25" />
        <div className="mt-3 h-6 w-24 rounded-md" style={{ background: `oklch(0.78 0.11 ${h})` }} />
      </div>
      <div className="absolute -bottom-10 -end-10 h-40 w-40 rounded-full border transition-transform duration-700 group-hover:scale-125" style={{ borderColor: `oklch(0.78 0.11 ${h} / .5)` }} />
      <div className="absolute inset-0 grid place-items-center bg-ink/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
        <Eye className="h-10 w-10 translate-y-3 text-gold transition-transform duration-300 group-hover:translate-y-0" />
      </div>
    </div>
  );
}

function Work({ lang, onPreview }: { lang: Lang; onPreview: (p: Project) => void }) {
  const c = t[lang];
  const flag = projects[0]!;
  const rest = projects.slice(1);
  return (
    <section id="work" className="stack-frame bg-background px-4 py-24 md:px-8 md:py-32">
      <div className="stack-frame-body mx-auto max-w-7xl">
        <Reveal><Kicker>{c.workKicker}</Kicker></Reveal>
        <Reveal delay={100}><h2 className="max-w-3xl font-display text-4xl font-semibold md:text-5xl">{c.workTitle}</h2></Reveal>

        <Reveal delay={150} className="mt-14">
          <article {...spotlight} className="spot group grid overflow-hidden rounded-3xl border border-gold/50 bg-card lg:grid-cols-2">
            <button type="button" onClick={() => onPreview(flag)} className="relative block text-start" aria-label={`${c.preview}: ${flag.title[lang]}`}>
              <BrowserBar host={flag.host} />
              <div className="aspect-[16/10]"><DashboardArt /></div>
            </button>
            <div className="relative z-[2] flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-semibold uppercase text-gold">{flag.kind[lang]}</p>
              <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{flag.title[lang]}</h3>
              <p className="mt-4 text-muted-foreground">{flag.desc[lang]}</p>
              <Tags tags={flag.tags} />
              <Actions p={flag} lang={lang} onPreview={onPreview} />
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90}>
              <article {...tiltGlow} className="spot tilt group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                {p.url ? (
                  <button type="button" onClick={() => onPreview(p)} className="block text-start" aria-label={`${c.preview}: ${p.title[lang]}`}>
                    <BrowserBar host={p.host} /><SiteMock p={p} />
                  </button>
                ) : (<div><BrowserBar host={p.host} /><div className="aspect-[16/10]"><DocArt /></div></div>)}
                <div className="relative z-[2] flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase text-gold">{p.kind[lang]}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{p.title[lang]}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.desc[lang]}</p>
                  <Tags tags={p.tags} />
                  {p.url && <Actions p={p} lang={lang} onPreview={onPreview} />}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrowserBar({ host }: { host: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5" dir="ltr">
      <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" /><span className="h-2.5 w-2.5 rounded-full bg-gold/70" /><span className="h-2.5 w-2.5 rounded-full bg-chart-2/70" />
      <span className="ms-2 truncate rounded-md bg-background/60 px-3 py-0.5 text-xs text-muted-foreground">{host}</span>
    </div>
  );
}
function Tags({ tags }: { tags: string[] }) {
  return <div className="mt-5 flex flex-wrap gap-2" dir="ltr">{tags.map((tg) => <span key={tg} className="rounded-full bg-accent px-3 py-1 text-xs">{tg}</span>)}</div>;
}
function Actions({ p, lang, onPreview }: { p: Project; lang: Lang; onPreview: (p: Project) => void }) {
  const c = t[lang];
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a href={p.url} target="_blank" rel="noreferrer" {...magnetic} className="magnetic inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-primary-foreground">
        {c.visit}<ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" /></a>
      <button type="button" onClick={() => onPreview(p)} className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:border-gold hover:text-gold">
        <Eye className="h-4 w-4" />{c.preview}</button>
    </div>
  );
}

function PreviewModal({ p, lang, onClose }: { p: Project | null; lang: Lang; onClose: () => void }) {
  const c = t[lang];
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!p) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [p, onClose]);
  if (!p?.url) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={p.title[lang]} className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/85 p-3 backdrop-blur-sm md:p-8" onClick={onClose}>
      <div className="flex h-full max-h-[90svh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-gold/50 bg-card" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <div className="min-w-0"><p className="truncate font-semibold">{p.title[lang]}</p><p className="truncate text-xs text-muted-foreground">{c.previewNote}</p></div>
          <div className="flex shrink-0 gap-2">
            <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-lg bg-gold px-3 py-2 text-sm font-semibold text-primary-foreground">{c.visit}<ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" /></a>
            <button ref={closeRef} type="button" onClick={onClose} aria-label={c.close} className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-gold"><X className="h-4 w-4" /></button>
          </div>
        </div>
        <iframe title={p.title[lang]} src={p.url} className="w-full flex-1 bg-background" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups" />
      </div>
    </div>
  );
}

function CopyCard({ icon: Icon, label, value, href, lang }: { icon: ElementType; label: string; value: string; href?: string; lang: Lang }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(value); setDone(true); setTimeout(() => setDone(false), 1600); } catch { /* clipboard unavailable */ }
  };
  return (
    <div {...tiltGlow} className="spot tilt group flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
      <span className="relative z-[2] grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-gold transition group-hover:bg-gold group-hover:text-primary-foreground"><Icon className="h-5 w-5" /></span>
      <div className="relative z-[2] min-w-0 flex-1">
        <p className="text-xs text-muted-foreground">{label}</p>
        {href ? <a href={href} target="_blank" rel="noreferrer" className="link-underline block truncate font-medium" dir="ltr">{value.replace(/^https?:\/\//, "")}</a>
          : <p className="truncate font-medium">{value}</p>}
      </div>
      <button type="button" onClick={copy} aria-label={`${t[lang].copy} ${label}`} className="relative z-[2] grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border hover:border-gold hover:text-gold">
        {done ? <Check className="h-4 w-4 text-gold" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}

function Contact({ lang }: { lang: Lang }) {
  const c = t[lang];
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: typeof errors = {};
    if (!form.name.trim() || form.name.length > 100) er.name = c.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) || form.email.length > 255) er.email = c.errors.email;
    if (form.message.trim().length < 5 || form.message.length > 2000) er.message = c.errors.message;
    setErrors(er);
    if (Object.keys(er).length) return;
    window.location.href = buildMailto(form.name.trim(), form.email.trim(), form.message.trim());
    setSent(true);
  };
  const field = "mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 outline-none transition focus:border-gold focus:ring-2 focus:ring-ring/40";
  return (
    <section id="contact" className="stack-frame bg-card px-4 py-24 md:px-8 md:py-32">
      <div className="stack-frame-body mx-auto max-w-7xl">
        <Reveal><Kicker>{c.contactKicker}</Kicker></Reveal>
        <Reveal delay={100}><h2 className="font-display text-4xl font-semibold md:text-6xl">{c.contactTitle}</h2></Reveal>
        <Reveal delay={150}><p className="mt-4 max-w-2xl text-muted-foreground">{c.openTo}</p></Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <Reveal><CopyCard icon={Mail} label="Email" value={EMAIL} lang={lang} /></Reveal>
            <Reveal delay={60}><CopyCard icon={Github} label="GitHub" value={GITHUB} href={GITHUB} lang={lang} /></Reveal>
            <Reveal delay={120}><CopyCard icon={Linkedin} label="LinkedIn" value={LINKEDIN} href={LINKEDIN} lang={lang} /></Reveal>
            <Reveal delay={180}><CopyCard icon={MapPin} label={c.location} value={c.locationValue} lang={lang} /></Reveal>
          </div>
          <Reveal delay={100}>
            <form onSubmit={submit} noValidate className="rounded-3xl border border-gold/40 bg-background/50 p-6 md:p-8">
              {(["name", "email"] as const).map((k) => (
                <label key={k} className="mb-5 block text-sm">{c.form[k]}
                  <input type={k === "email" ? "email" : "text"} dir={k === "email" ? "ltr" : undefined} value={form[k]} maxLength={k === "email" ? 255 : 100}
                    onChange={(e) => setForm({ ...form, [k]: e.target.value })} aria-invalid={!!errors[k]} className={field} />
                  {errors[k] && <span className="mt-1 block text-xs text-destructive">{errors[k]}</span>}
                </label>
              ))}
              <label className="mb-6 block text-sm">{c.form.message}
                <textarea rows={5} value={form.message} maxLength={2000} onChange={(e) => setForm({ ...form, message: e.target.value })} aria-invalid={!!errors.message} className={field} />
                {errors.message && <span className="mt-1 block text-xs text-destructive">{errors.message}</span>}
              </label>
              <button type="submit" {...magnetic} className="magnetic inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 font-semibold text-primary-foreground">
                <Send className="h-4 w-4 rtl:-scale-x-100" />{c.form.send}</button>
              {sent && <p role="status" className="mt-4 text-sm text-gold">{c.form.sent}</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const [lang, setLangState] = useState<Lang>("en");
  const [preview, setPreview] = useState<Project | null>(null);
  useScrollLinkedFrames();
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "ar" || saved === "en") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const setLang = (l: Lang) => { setLangState(l); localStorage.setItem("lang", l); };

  return (
    <div className="relative overflow-x-clip">
      <div aria-hidden className="pointer-events-none fixed bottom-6 end-6 z-0 select-none font-display text-[clamp(3rem,10vw,8rem)] font-semibold text-gold opacity-[0.04]">AM</div>
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <div className="pb-24"><Stats lang={lang} /></div>
        <About lang={lang} />
        <Services lang={lang} />
        <Work lang={lang} onPreview={setPreview} />
        <Contact lang={lang} />
      </main>
      <footer className="border-t border-border bg-ink px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <Logo />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Abdelrahman Mohamed · <span className="text-gold">{t[lang].footer}</span></p>
        </div>
      </footer>
      <PreviewModal p={preview} lang={lang} onClose={() => setPreview(null)} />
    </div>
  );
}
