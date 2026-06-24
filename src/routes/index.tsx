import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  BookOpen, Laptop, Projector, GraduationCap, Users, Coffee, Gamepad2,
  Wifi, MapPin, Phone, MessageCircle, Star, ArrowLeft, Menu, X,
  Calendar, Send, ChevronLeft, ChevronRight, Instagram, Facebook, Plus,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safe Space — مساحتك الآمنة للنمو والتطور" },
      { name: "description", content: "مساحة عمل مجتمعية حديثة للمذاكرة والعمل وورش العمل في برج العرب الجديدة. احجز مكانك اليوم." },
      { property: "og:title", content: "Safe Space — Your Comfort Zone To Grow" },
      { property: "og:description", content: "مساحة عمل مجتمعية في برج العرب الجديدة." },
    ],
  }),
  component: HomePage,
});

/* ---------------- Reveal on scroll ---------------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------------- Navbar ---------------- */
const NAV = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "الخدمات" },
  { href: "#pricing", label: "الأسعار" },
  { href: "#events", label: "الفعاليات" },
  { href: "#gallery", label: "المعرض" },
  { href: "#faq", label: "الأسئلة" },
  { href: "#contact", label: "تواصل" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <span className="font-display text-lg italic">S</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight">Safe Space</span>
            <span className="text-[10px] text-muted-foreground">Your Comfort Zone To Grow</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-2 text-sm text-foreground/75 transition-colors hover:bg-accent hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:scale-[1.02] hover:bg-primary/90"
          >
            احجز مكانك
          </a>
        </div>

        <button
          aria-label="القائمة"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/80 backdrop-blur lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container-x flex flex-col py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm hover:bg-accent"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              احجز مكانك
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute -top-32 right-1/2 h-[40rem] w-[40rem] translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-secondary/10 blur-3xl" />

      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary float-soft" />
            مساحة مجتمعية في برج العرب الجديدة
          </span>

          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.15] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            مساحتك الآمنة
            <br />
            <span className="text-primary">للنمو والتطور</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            مكان هادئ للمذاكرة والعمل والاجتماعات وورش العمل — صُمِّم خصيصاً للطلاب،
            الفريلانسرز، والمبدعين الطموحين في برج العرب الجديدة.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-all hover:scale-[1.02] hover:bg-primary/90"
            >
              احجز مكانك
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-accent"
            >
              تواصل معنا
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {[
              { v: "Study", l: "Space" },
              { v: "Community", l: "Events" },
              { v: "High-Speed", l: "WiFi" },
              { v: "Projector", l: "Room" },
            ].map((s) => (
              <div key={s.v} className="border-r border-border/70 pr-4 ltr:border-l ltr:border-r-0 ltr:pl-4">
                <dt className="font-display text-lg font-semibold text-foreground">{s.v}</dt>
                <dd className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative" style={{ animationDelay: "120ms" }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-muted shadow-[var(--shadow-card)]">
            <img
              src={heroImg}
              alt="Safe Space cozy workspace interior"
              width={1920}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <div className="absolute -bottom-6 right-4 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-[var(--shadow-card)] backdrop-blur sm:flex sm:items-center sm:gap-3 float-soft">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <Wifi className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">إنترنت فائق السرعة</p>
              <p className="text-xs text-muted-foreground">جاهز للاجتماعات أونلاين</p>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-[var(--shadow-card)] backdrop-blur md:flex md:items-center md:gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/15 text-secondary">
              <Coffee className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">قهوة طازجة</p>
              <p className="text-xs text-muted-foreground">طوال اليوم</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">About Us</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">من نحن</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            وُلِدت <span className="font-semibold text-foreground">Safe Space</span> من فكرة بسيطة:
            التركيز يحتاج بيئة مناسبة. نحن نوفّر مساحة مريحة يجتمع فيها الناس للمذاكرة،
            العمل، تعلّم مهارات جديدة، والتواصل مع أشخاص يشاركونهم نفس الطموح.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-xs uppercase tracking-wider text-primary">رسالتنا</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                مساعدة الشباب على النمو من خلال التعلّم، الإنتاجية، والمجتمع.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-xs uppercase tracking-wider text-secondary">رؤيتنا</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                أن نكون مساحة العمل المجتمعية الأولى في برج العرب.
              </p>
            </div>
          </div>
        </div>

        <div data-reveal className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src={g1} alt="Study" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
            <img src={g3} alt="Workspace" width={1024} height={1024} loading="lazy" className="mt-10 aspect-square w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
          </div>
          <div aria-hidden className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full bg-primary/15 blur-2xl" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const SERVICES = [
  { icon: BookOpen, title: "Study Space", ar: "مساحة مذاكرة", desc: "منطقة هادئة ومريحة للمذاكرة والتركيز العميق." },
  { icon: Laptop, title: "Workspace", ar: "مساحة عمل", desc: "بيئة مثالية للفريلانسرز والعاملين عن بُعد." },
  { icon: Projector, title: "Projector Room", ar: "غرفة عرض", desc: "مناسبة للعروض، الاجتماعات، وورش التدريب." },
  { icon: GraduationCap, title: "Workshops & Events", ar: "ورش وفعاليات", desc: "أنشطة تعليمية وتنموية لبناء المهارات." },
  { icon: Users, title: "Community", ar: "مجتمع", desc: "تعرّف على أشخاص موهوبين وطموحين مثلك." },
  { icon: Coffee, title: "Coffee & Snacks", ar: "قهوة وسناكس", desc: "راحة أثناء المذاكرة والعمل." },
  { icon: Gamepad2, title: "PS5 Entertainment", ar: "ترفيه", desc: "خد بريك واسترخِ بين الجلسات." },
];

function Services() {
  return (
    <section id="services" className="relative bg-muted/60 py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Services</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">كل ما تحتاجه تحت سقف واحد</h2>
          <p className="mt-4 text-muted-foreground">
            خدمات مصمّمة بعناية لتناسب الطلاب، المحترفين، والمبدعين.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              style={{ animationDelay: `${i * 60}ms` }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-xs italic text-muted-foreground">0{(i + 1).toString()}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.ar}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-primary/80">{s.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
const PRICING = [
  {
    title: "General Space",
    ar: "المساحة العامة",
    desc: "للمذاكرة، العمل، أو الاسترخاء في المساحة المشتركة.",
    accent: "primary" as const,
    tiers: [
      { dur: "ساعة واحدة", price: "25" },
      { dur: "ساعتين", price: "50" },
      { dur: "3 ساعات أو أكثر", price: "65" },
    ],
  },
  {
    title: "Projector Room",
    ar: "غرفة البروجيكتور",
    desc: "خاصة للعروض، الاجتماعات، وورش العمل.",
    accent: "secondary" as const,
    tiers: [
      { dur: "ساعة واحدة", price: "200" },
      { dur: "ساعتين", price: "400" },
      { dur: "3 ساعات", price: "550" },
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Pricing</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">أسعار شفافة ومناسبة</h2>
          <p className="mt-4 text-muted-foreground">احجز بالساعة. بدون اشتراكات. بدون مفاجآت.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PRICING.map((p) => (
            <article
              key={p.title}
              data-reveal
              className={`relative overflow-hidden rounded-3xl border bg-card p-8 shadow-[var(--shadow-soft)] md:p-10 ${
                p.accent === "primary" ? "border-primary/30" : "border-secondary/30"
              }`}
            >
              <div
                aria-hidden
                className={`absolute -top-20 -left-20 h-56 w-56 rounded-full blur-3xl ${
                  p.accent === "primary" ? "bg-primary/15" : "bg-secondary/15"
                }`}
              />
              <header className="relative flex items-start justify-between">
                <div>
                  <p className={`text-xs uppercase tracking-wider ${p.accent === "primary" ? "text-primary" : "text-secondary"}`}>{p.title}</p>
                  <h3 className="mt-2 text-2xl font-bold md:text-3xl">{p.ar}</h3>
                </div>
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${
                  p.accent === "primary" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}>
                  {p.accent === "primary" ? <Laptop className="h-5 w-5" /> : <Projector className="h-5 w-5" />}
                </span>
              </header>
              <p className="relative mt-3 text-sm text-muted-foreground">{p.desc}</p>

              <ul className="relative mt-7 divide-y divide-border/70">
                {p.tiers.map((t) => (
                  <li key={t.dur} className="flex items-center justify-between py-4">
                    <span className="text-sm text-foreground/80">{t.dur}</span>
                    <span className="font-display text-2xl font-semibold">
                      {t.price} <span className="text-xs font-sans text-muted-foreground">EGP</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-center text-sm text-muted-foreground" data-reveal>
          <Star className="h-4 w-4 text-primary" />
          خصم <span className="font-semibold text-foreground">10%</span> للمجموعات أكثر من 5 أشخاص
        </p>
      </div>
    </section>
  );
}

/* ---------------- Events ---------------- */
const EVENTS = [
  {
    badge: "Summer Camp",
    title: "صيف Safe Space",
    date: "يوليو — أغسطس",
    tag: "تدريب مكثّف",
    img: g2,
    topics: ["Programming", "Photography", "Soft Skills", "Creative Workshops"],
  },
  {
    badge: "Workshop",
    title: "ورشة تصوير احترافي",
    date: "كل أسبوعين",
    tag: "ورشة عملية",
    img: g4,
    topics: ["Photography", "Lightroom", "Composition"],
  },
  {
    badge: "Community",
    title: "Open Networking Night",
    date: "كل خميس",
    tag: "لقاء مجتمعي",
    img: g6,
    topics: ["Networking", "Pitch", "Community"],
  },
];

function Events() {
  return (
    <section id="events" className="bg-muted/60 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Events & Workshops</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">فعاليات وورش عمل</h2>
            <p className="mt-3 text-muted-foreground">
              أحدث ورش العمل والمعسكرات المقامة في المساحة. سجّل مقعدك مبكراً.
            </p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-border bg-card px-5 py-2.5 text-sm hover:bg-accent md:inline-flex">
            كل الفعاليات
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((ev) => (
            <article
              key={ev.title}
              data-reveal
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img src={ev.img} alt={ev.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 right-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground backdrop-blur">
                  {ev.badge}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{ev.date}</span>
                  <span className="text-border">•</span>
                  <span>{ev.tag}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold">{ev.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {ev.topics.map((t) => (
                    <li key={t} className="rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  سجل الآن <ArrowLeft className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Become a Trainer ---------------- */
function TrainerCTA() {
  const [submitted, setSubmitted] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 4000);
  }
  return (
    <section id="trainer" className="py-24 md:py-32">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="relative hidden lg:block">
              <img src={g2} alt="Trainer workshop" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-card via-card/30 to-transparent" />
            </div>
            <div className="p-8 md:p-12 lg:p-16" data-reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-primary">Become a Trainer</span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">شارك موهبتك</h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                لو عندك مهارة، فكرة ورشة، أو كورس تدريبي — Safe Space بتوفر لك البيئة
                المناسبة لتكوين جمهورك وتقديم محتواك.
              </p>

              <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
                <Field label="الاسم" name="name" placeholder="اسمك الكامل" />
                <Field label="رقم الهاتف" name="phone" placeholder="01xxxxxxxxx" type="tel" />
                <Field label="المهارة" name="skill" placeholder="مثال: تطوير الويب" />
                <Field label="فكرة الورشة" name="idea" placeholder="مثال: مقدمة في React" />
                <div className="sm:col-span-2 flex items-center justify-between gap-4">
                  {submitted ? (
                    <p className="text-sm font-medium text-primary">تم إرسال طلبك بنجاح — هنتواصل معاك قريباً.</p>
                  ) : <span />}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:scale-[1.02] hover:bg-primary/90"
                  >
                    أرسل طلبك <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, placeholder, type = "text",
}: { label: string; name: string; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground/80">{label}</span>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
    </label>
  );
}

/* ---------------- Gallery ---------------- */
const GALLERY = [
  { src: g1, alt: "Study session", className: "row-span-2" },
  { src: g4, alt: "Community" },
  { src: g3, alt: "Coffee desk" },
  { src: g5, alt: "Projector room", className: "row-span-2" },
  { src: g2, alt: "Workshop" },
  { src: g6, alt: "Reading corner" },
];

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="gallery" className="bg-muted/60 py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Gallery</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">داخل المساحة</h2>
          <p className="mt-4 text-muted-foreground">لمحة عن البيئة، الفعاليات، والمجتمع.</p>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              data-reveal
              className={`group relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)] ${g.className ?? ""}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm animate-in fade-in"
        >
          <button
            aria-label="إغلاق"
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-background/90 text-foreground"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            aria-label="السابق"
            onClick={(e) => { e.stopPropagation(); setActive((i) => ((i ?? 0) - 1 + GALLERY.length) % GALLERY.length); }}
            className="absolute right-4 grid h-11 w-11 place-items-center rounded-full bg-background/90 md:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            aria-label="التالي"
            onClick={(e) => { e.stopPropagation(); setActive((i) => ((i ?? 0) + 1) % GALLERY.length); }}
            className="absolute left-4 grid h-11 w-11 place-items-center rounded-full bg-background/90 md:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <img
            src={GALLERY[active].src}
            alt={GALLERY[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const TESTIMONIALS = [
  { name: "مريم أحمد", role: "طالبة هندسة", text: "أحسن مكان مذاكرة في برج العرب. الجو هادي والناس محترمة جداً.", rating: 5 },
  { name: "كريم سامي", role: "فريلانسر", text: "نت سريع، قهوة لذيذة، وزملاء بيلهموني. بيقي مكتبي الثاني.", rating: 5 },
  { name: "سلمى حسن", role: "مصممة جرافيك", text: "حضرت ورشة تصوير ممتازة. المكان بيخلي إنتاجيتي تتضاعف.", rating: 5 },
  { name: "محمد إيهاب", role: "مدرّب", text: "غرفة البروجيكتور احترافية، والإدارة متعاونة. بأرشحه بقوة.", rating: 5 },
];

function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: dir * w * (document.documentElement.dir === "rtl" ? -1 : 1), behavior: "smooth" });
  };
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Testimonials</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">آراء مجتمعنا</h2>
            <p className="mt-3 text-muted-foreground">قصص حقيقية من طلاب وفريلانسرز جربوا Safe Space.</p>
          </div>
          <div className="flex gap-2">
            <button aria-label="السابق" onClick={() => scroll(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card hover:bg-accent">
              <ChevronRight className="h-5 w-5" />
            </button>
            <button aria-label="التالي" onClick={() => scroll(1)} className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card hover:bg-accent">
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={trackRef} className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              data-card
              className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[32%] rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-base leading-relaxed text-foreground/85">"{t.text}"</p>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "إيه هي مواعيد عمل Safe Space؟", a: "بنفتح يومياً من 10 صباحاً حتى 12 منتصف الليل. ممكن نمدد المواعيد للفعاليات وورش العمل الخاصة." },
  { q: "محتاج أحجز قبل ما أجي؟", a: "للمساحة العامة مش لازم، بس بننصح بالحجز في الأوقات الزحمة. غرفة البروجيكتور لازم تحجزها قبلها على الأقل بـ 24 ساعة." },
  { q: "هل في إنترنت سريع؟", a: "نعم، عندنا إنترنت فايبر فائق السرعة مناسب للاجتماعات الأونلاين، الستريمنج، ورفع الملفات." },
  { q: "هل يمكن تنظيم ورشة أو فعالية خاصة؟", a: "أكيد! تقدر تحجز غرفة البروجيكتور أو المساحة كلها لورشتك. تواصل معانا على واتساب وهنرتبلك كل التفاصيل." },
  { q: "هل المكان مناسب للدراسة الجماعية؟", a: "نعم، عندنا أماكن مخصصة للجلسات الجماعية وكمان زوايا هادية للمذاكرة الفردية. وفي خصم 10% للمجموعات أكتر من 5 أشخاص." },
  { q: "هل القهوة والمشروبات متاحة؟", a: "آه، عندنا قهوة طازجة، مشروبات ساخنة وباردة، وسناكس خفيفة بأسعار مناسبة طول اليوم." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div data-reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">FAQ</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">الأسئلة الشائعة</h2>
          <p className="mt-4 text-muted-foreground">
            كل اللي محتاج تعرفه عن المساحة، الحجز، والخدمات. لسه عندك سؤال؟ كلمنا على واتساب.
          </p>
          <a
            href="https://wa.me/201503061823"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-accent"
          >
            <MessageCircle className="h-4 w-4 text-primary" /> اسأل على واتساب
          </a>
        </div>

        <div className="space-y-3" data-reveal>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-soft)] transition-colors ${
                  isOpen ? "border-primary/40" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                >
                  <span className="text-base font-semibold text-foreground md:text-lg">{f.q}</span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-primary text-primary-foreground" : "bg-accent text-foreground"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="bg-muted/60 py-24 md:py-32">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div data-reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Contact</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">تعالى زورنا</h2>
          <p className="mt-4 text-muted-foreground">
            مساحة Safe Space في قلب برج العرب الجديدة. باب مفتوح لكل من يبحث عن مكان للإنتاج والإلهام.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">العنوان</p>
                <p className="text-sm text-muted-foreground">Mazza Mall — New Borg El Arab, Alexandria</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">الهاتف</p>
                <a href="tel:01503061823" className="text-sm text-muted-foreground hover:text-foreground" dir="ltr">
                  +20 150 306 1823
                </a>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/201503061823"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary/90"
            >
              <MessageCircle className="h-4 w-4" /> واتساب
            </a>
            <a
              href="tel:01503061823"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-accent"
            >
              <Phone className="h-4 w-4" /> اتصال
            </a>
          </div>
        </div>

        <div data-reveal className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
          <iframe
            title="Safe Space Location"
            src="https://www.google.com/maps?q=Mazza+Mall+New+Borg+El+Arab&output=embed"
            className="h-[420px] w-full md:h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                <span className="font-display text-lg italic">S</span>
              </span>
              <span className="font-display text-lg font-semibold">Safe Space</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              مساحتك الآمنة للنمو والتطور — مساحة عمل مجتمعية في برج العرب الجديدة.
            </p>
            <p className="mt-4 font-display text-sm italic text-primary">"Your Comfort Zone To Grow"</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">روابط سريعة</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-foreground">{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">تواصل</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Mazza Mall — New Borg El Arab</li>
              <li dir="ltr">+20 150 306 1823</li>
              <li>hello@safespace.eg</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">تابعنا</p>
            <div className="mt-4 flex gap-2">
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-accent">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-accent">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://wa.me/201503061823" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-accent">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Safe Space. جميع الحقوق محفوظة.</p>
          <p>Designed with care in Borg El Arab.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating CTA ---------------- */
function FloatingCTA() {
  return (
    <a
      href="https://wa.me/201503061823"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="واتساب"
      className="fixed bottom-5 left-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:scale-110 float-soft"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

/* ---------------- Page ---------------- */
function HomePage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Events />
        <TrainerCTA />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
