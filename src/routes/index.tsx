import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  Flame,
  ShieldCheck,
  Zap,
  CheckCircle2,
  XCircle,
  Sparkles,
  RefreshCw,
  Smartphone,
  Trophy,
  Dumbbell,
  Library,
  LayoutGrid,
  Star,
  Clock,
  AlertTriangle,
} from "lucide-react";

import featureSessions from "@/assets/feature-sessions.jpg";
import featureExercises from "@/assets/feature-exercises.jpg";
import feature360 from "@/assets/feature-360.jpg";
import videoAsset from "@/assets/video-demo.mp4.asset.json";
import coverAsset from "@/assets/cover.png.asset.json";
import player1 from "@/assets/player-1.jpg.asset.json";
import player2 from "@/assets/player-2.jpg.asset.json";
import testimonial1 from "@/assets/testimonial-1.jpg.asset.json";
import testimonial2 from "@/assets/testimonial-2.jpg.asset.json";

const CHECKOUT_LINK_FULL = "https://pay.kiwify.com/DdeFcSY";
const CHECKOUT_LINK_BASIC = "https://pay.kiwify.com/eQoQd0Y";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plataforma Completa de Entrenamiento de Fútbol · 5 Entregables en 1" },
      {
        name: "description",
        content:
          "Accede a nuestra plataforma completa: +250 sesiones, +2.000 ejercicios con videos didácticos y Fútbol 360°. Desde solo $5,00 USD.",
      },
      { property: "og:title", content: "Plataforma Completa de Entrenamiento de Fútbol" },
      {
        property: "og:description",
        content:
          "Plataforma completa con área de miembros, videos y biblioteca de +2.000 ejercicios. Oferta desde $5,00 USD.",
      },
      { property: "og:image", content: coverAsset.url },
      { name: "twitter:image", content: coverAsset.url },
    ],
  }),
  component: LandingPage,
});

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>("[data-reveal]");
    els.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

function trackLead() {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Lead");
    (window as any).fbq("track", "InitiateCheckout");
  }
}

function CTA({ children, className = "", href = CHECKOUT_LINK_FULL }: { children: React.ReactNode; className?: string; href?: string }) {
  return (
    <a
      href={href}
      onClick={trackLead}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-gradient px-8 py-5 text-base font-black uppercase tracking-wide text-primary-foreground shadow-glow transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] sm:text-lg " +
        className
      }
    >
      <Flame className="h-5 w-5" />
      {children}
      <span className="absolute inset-0 -z-10 rounded-2xl bg-primary-gradient blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
    </a>
  );
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center" data-reveal>
      {kicker && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
          {kicker}
        </div>
      )}
      <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function LandingPage() {
  const ref = useReveal();

  return (
    <div ref={ref} className="min-h-screen bg-background text-foreground">
      {/* ============ HERO (sin CTA, solo gancho fuerte) ============ */}
      <header className="relative overflow-hidden bg-hero">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(oklch(0.78_0.22_142/0.15)_1px,transparent_1px),linear-gradient(90deg,oklch(0.78_0.22_142/0.15)_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-10 sm:pt-14 md:pb-20">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2 text-xs font-black uppercase tracking-widest text-gold-foreground shadow-lg sm:text-sm">
              🔥 5 Entregables en 1 Sola Plataforma ⚽
            </div>
            <h1 className="mt-6 text-4xl font-black uppercase leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl">
              Para Entrenar Fútbol como un <span className="text-primary">Profesional</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
              +250 sesiones interactivas · +2.000 ejercicios · Videos didácticos de cada ejercicio · Fútbol femenino, infantil y preparación física.
              <br />
              <strong className="text-foreground">Todo en tu plataforma personal, con acceso de por vida.</strong>
            </p>
            <p className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-bold text-foreground">
              <Clock className="h-4 w-4 text-gold" />
              Antes $92 USD · Hoy desde <span className="text-primary">$5,00 USD</span>
            </p>
          </div>
        </div>
      </header>

      {/* ============ VIDEO (subido para generar deseo inmediato) ============ */}
      <section className="mx-auto max-w-5xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="mx-auto mb-6 max-w-2xl text-center" data-reveal>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            Mira lo que vas a recibir
          </div>
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
            Esto es lo que <span className="text-primary">TÚ vas a tener</span> en tus manos hoy
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Dale play. En menos de 2 minutos vas a entender por qué esto vale 10 veces más de lo que cuesta.
          </p>
        </div>
        <div
          data-reveal
          className="relative mx-auto aspect-video overflow-hidden rounded-2xl border border-border bg-black shadow-elegant"
        >
          <video
            src={videoAsset.url}
            controls
            playsInline
            preload="metadata"
            poster={coverAsset.url}
            className="h-full w-full"
          >
            <track kind="captions" />
          </video>
        </div>
      </section>

      {/* ============ PROBLEMA (dolor) ============ */}
      <section className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-destructive" data-reveal>
          <AlertTriangle className="h-4 w-4" /> La dura verdad
        </div>
        <p className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl" data-reveal>
          Cada semana pierdes <span className="text-destructive/90">horas buscando ejercicios en YouTube</span>,
          copiando dibujos en papel y llegando al entrenamiento sintiendo que <em>improvisas</em>.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg" data-reveal>
          Los jugadores lo notan. Los padres lo notan. Y tú, en el fondo, sabes que mereces preparar
          sesiones con la misma calidad que un entrenador de élite — pero no tienes ni el tiempo ni
          la biblioteca para hacerlo.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-bold text-primary sm:text-xl" data-reveal>
          Hoy eso termina.
        </p>
        <div className="mt-8" data-reveal>
          <a
            href="#oferta"
            className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-gradient px-8 py-5 text-base font-black uppercase tracking-wide text-primary-foreground shadow-glow transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] sm:text-lg"
          >
            <Flame className="h-5 w-5" />
            Ver Oferta Plataforma Completa
            <span className="absolute inset-0 -z-10 rounded-2xl bg-primary-gradient blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
          </a>
        </div>
      </section>



      {/* ============ SOLUCIÓN ============ */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionTitle kicker="Todo en un solo producto" title="5 entregables premium · 1 sola plataforma" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Library,
              title: "+250 Sesiones Interactivas",
              text: "Sesiones completas listas para copiar y aplicar hoy mismo. Organizadas por posición, categoría y edad.",
              img: featureSessions,
            },
            {
              icon: LayoutGrid,
              title: "+2.000 Ejercicios de Fútbol",
              text: "Biblioteca con diagramas, objetivos y variantes. Nunca más te vas a quedar sin ideas.",
              img: featureExercises,
            },
            {
              icon: Sparkles,
              title: "Videos Didácticos Integrados",
              text: "Cada ejercicio incluye su video explicativo. Ves la técnica exacta y la organización del campo directo en tu plataforma.",
              img: coverAsset.url,
            },
            {
              icon: Trophy,
              title: "Fútbol 360° Completo",
              text: "Fútbol femenino + infantil + preparación física. Todo incluido en tu área de miembros.",
              img: feature360,
            },
          ].map((c, i) => (
            <div
              key={i}
              data-reveal
              className="group overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-elegant transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black uppercase">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              <img
                src={c.img}
                alt={c.title}
                width={1200}
                height={900}
                loading="lazy"
                className="mt-5 rounded-xl border border-border"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ============ GALERÍA ============ */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionTitle kicker="En el campo" title="Imagina tu equipo entrenando así la próxima semana" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { src: player1.url, alt: "Jugador entrenando con balón en el campo" },
            { src: featureSessions, alt: "Vista de sesiones de entrenamiento" },
            { src: player2.url, alt: "Duelo uno contra uno en partido" },
            { src: featureExercises, alt: "Biblioteca de +2.000 ejercicios" },
          ].map((it, i) => (
            <img
              key={i}
              data-reveal
              src={it.src}
              alt={it.alt}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl border border-border object-cover shadow-elegant"
            />
          ))}
        </div>
      </section>

      {/* ============ PASO A PASO ============ */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <SectionTitle kicker="Cómo funciona" title="En 3 minutos ya estás dentro" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Smartphone, t: "Accede desde donde quieras", d: "Móvil, tablet u ordenador. Todo online en tu plataforma personal." },
            { icon: LayoutGrid, t: "Filtra por posición, edad o categoría", d: "Encuentra la sesión perfecta en segundos, sin perder tiempo." },
            { icon: Zap, t: "Mira el video y aplica", d: "Mira el video, copia la técnica y sales al campo con seguridad profesional." },
          ].map((s, i) => (
            <div key={i} data-reveal className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black">
                  {i + 1}
                </div>
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-black uppercase">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIOS (Carrusel Infinito) ============ */}
      <section className="overflow-hidden py-16 md:py-24">
        <SectionTitle kicker="Testimonios reales" title="Entrenadores que ya dejaron de improvisar" />
        <div className="relative mt-10">
          <div className="group flex w-fit gap-5 animate-marquee hover:pause-marquee">
            {[
              { n: "Carlos M.", r: "Entrenador Sub-15, México", t: "Antes pasaba 3 horas planeando cada sesión. Ahora abro la plataforma, elijo y listo. Recuperé mis noches.", img: testimonial1.url },
              { n: "Andrés G.", r: "Preparador Físico, Colombia", t: "El paquete de acondicionamiento físico solo ya vale 10 veces lo que pagué. Mis jugadores están volando.", img: testimonial2.url },
              { n: "Ricardo L.", r: "Director Técnico, Argentina", t: "La calidad de los videos didácticos es impresionante. No he encontrado nada igual en español.", img: player1.url },
              { n: "Marcos P.", r: "Escuela de Formación, España", t: "Mis entrenadores ahora tienen una guía clara. El progreso de los niños se nota en cada partido.", img: player2.url },
              { n: "Diego S.", r: "Entrenador Femenino, Chile", t: "El módulo de fútbol femenino está muy bien estructurado. Las chicas están encantadas con las nuevas sesiones.", img: testimonial1.url },
              { n: "Javier V.", r: "Entrenador Infantil, Perú", t: "Nunca más me quedé sin ideas. Los 2.000 ejercicios son una mina de oro para cualquier categoría.", img: testimonial2.url },
              { n: "Carlos M. (Bis)", r: "Entrenador Sub-15, México", t: "Antes pasaba 3 horas planeando cada sesión. Ahora abro la plataforma, elijo y listo. Recuperé mis noches.", img: testimonial1.url },
              { n: "Andrés G. (Bis)", r: "Preparador Físico, Colombia", t: "El paquete de acondicionamiento físico solo ya vale 10 veces lo que pagué. Mis jugadores están volando.", img: testimonial2.url },
              { n: "Ricardo L. (Bis)", r: "Director Técnico, Argentina", t: "La calidad de los videos didácticos es impresionante. No he encontrado nada igual en español.", img: player1.url },
              { n: "Marcos P. (Bis)", r: "Escuela de Formación, España", t: "Mis entrenadores ahora tienen una guía clara. El progreso de los niños se nota en cada partido.", img: player2.url },
              { n: "Diego S. (Bis)", r: "Entrenador Femenino, Chile", t: "El módulo de fútbol femenino está muy bien estructurado. Las chicas están encantadas con las nuevas sesiones.", img: testimonial1.url },
              { n: "Javier V. (Bis)", r: "Entrenador Infantil, Perú", t: "Nunca más me quedé sin ideas. Los 2.000 ejercicios son una mina de oro para cualquier categoría.", img: testimonial2.url },
            ].map((t, i) => (
              <figure
                key={i}
                className="flex w-[320px] shrink-0 flex-col rounded-2xl border border-border bg-card p-6 shadow-elegant"
              >
                <div className="mb-3 flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-foreground/90">
                  “{t.t}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.n}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="h-11 w-11 shrink-0 rounded-full object-cover border border-border"
                  />
                  <div>
                    <div className="text-sm font-bold">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SIN vs CON ============ */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionTitle title="Tu vida SIN esto vs. Tu vida CON esto" />
        <div className="grid gap-5 md:grid-cols-2">
          <div
            data-reveal
            className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6"
          >
            <h3 className="mb-4 text-xl font-black uppercase text-destructive/90">Sin la plataforma</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Horas perdidas buscando ejercicios sueltos en YouTube",
                "Sensación de improvisar cada entrenamiento",
                "Jugadores desmotivados y padres que dudan de ti",
                "Estancamiento: los mismos ejercicios cada semana",
                "Frustración de no crecer como entrenador",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            data-reveal
            className="rounded-2xl border-2 border-primary/50 bg-primary/5 p-6 shadow-glow"
          >
            <h3 className="mb-4 text-xl font-black uppercase text-primary">Con la plataforma</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Sesión perfecta lista en 30 segundos",
                "Llegas al campo con seguridad de entrenador de élite",
                "Jugadores que piden llegar al entrenamiento",
                "Progresión clara semana a semana",
                "Padres orgullosos y respeto profesional",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ DESGLOSE DE VALOR + OFERTA DOBLE ============ */}
      <section id="oferta" className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,oklch(0.78_0.22_142)_0,transparent_40%),radial-gradient(circle_at_80%_80%,oklch(0.82_0.15_85)_0,transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-5">
          <div className="text-center" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2 text-xs font-black uppercase tracking-widest text-gold-foreground shadow-lg">
              🎁 Elige tu plan de acceso
            </div>
            <h2 className="mt-5 text-3xl font-black uppercase sm:text-4xl md:text-5xl">
              Plataforma Web Actualizada con Video
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {/* PAQUETE COMPLETO */}
            <div className="relative flex flex-col rounded-3xl border-2 border-primary bg-card p-8 shadow-glow" data-reveal>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-black uppercase tracking-widest text-primary-foreground">
                Más vendido
              </div>
              <h3 className="text-2xl font-black uppercase">Paquete Completo</h3>
              <p className="mt-2 text-sm text-muted-foreground">Todo el contenido premium incluido.</p>
              
              <ul className="mt-8 space-y-4 flex-1">
                {[
                  ["Plataforma Web Completa (área de miembros)", "$11,90"],
                  ["+250 Sesiones de Entrenamiento", "$9"],
                  ["+2.000 Ejercicios organizados", "$9"],
                  ["Videos didácticos de cada ejercicio", "$10"],
                  ["Fútbol 360° completo (femenino, infantil, físico)", "$5"],
                ].map(([item, price], i) => (
                  <li key={i} className="flex items-center justify-between gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </div>
                    <span className="font-bold text-gold shrink-0">{price}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-6 text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Valor total: $44,90 USD</p>
                <p className="mt-2 text-5xl font-black text-primary">$5,50<span className="text-xl">USD</span></p>
                <CTA href={CHECKOUT_LINK_FULL} className="mt-6 w-full">Quiero el Paquete Completo por $5,50</CTA>
              </div>
            </div>

            {/* PAQUETE BÁSICO */}
            <div className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-elegant" data-reveal>
              <h3 className="text-2xl font-black uppercase text-muted-foreground">Paquete Básico</h3>
              <p className="mt-2 text-sm text-muted-foreground">Lo esencial para empezar.</p>
              
              <ul className="mt-8 space-y-4 flex-1">
                {[
                  ["Plataforma Web: Módulo Fútbol Femenino", "$9"],
                  ["Plataforma Web: Módulo Fútbol Infantil", "$9"],
                  ["Acondicionamiento Físico", "$9"],
                  ["Diagramas de campo con pasos numerados", "$7,90"],
                ].map(([item, price], i) => (
                  <li key={i} className="flex items-center justify-between gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary/60" />
                      <span>{item}</span>
                    </div>
                    <span className="font-bold text-gold/80 shrink-0">{price}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-6 text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Valor total: $34,90 USD</p>
                <p className="mt-2 text-5xl font-black text-muted-foreground">$5,00<span className="text-xl">USD</span></p>
                <CTA href={CHECKOUT_LINK_BASIC} className="mt-6 w-full bg-muted text-muted-foreground border-border hover:bg-muted/80">Elegir Paquete Básico por $5,00</CTA>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-xs text-muted-foreground">
              <ShieldCheck className="mr-1 inline h-4 w-4 text-primary" />
              Pago 100% seguro · Acceso inmediato por e-mail · 7 días de garantía
            </p>
          </div>
        </div>
      </section>

      {/* ============ ACTUALIZACIONES ============ */}
      <section className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20" data-reveal>
        <RefreshCw className="mx-auto h-10 w-10 text-primary" />
        <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">
          Actualizaciones para siempre, sin pagar de nuevo
        </h2>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          Cada mes añadimos nuevas sesiones, nuevos ejercicios y nuevas funciones — y a ti te llegan
          automáticamente. Tu plataforma nunca envejece.
        </p>
      </section>

      {/* ============ GARANTÍA ============ */}
      <section className="mx-auto max-w-3xl px-5 py-16" data-reveal>
        <div className="flex flex-col items-center gap-6 rounded-3xl border-2 border-primary/40 bg-card p-8 text-center sm:flex-row sm:text-left">
          <ShieldCheck className="h-16 w-16 shrink-0 text-primary" />
          <div>
            <h3 className="text-2xl font-black uppercase">7 días de garantía blindada</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Entra, prueba, aplica. Si en 7 días sientes que no es para ti, escribes un e-mail y te
              devolvemos hasta el último centavo. Sin preguntas. El riesgo es 100% nuestro.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <SectionTitle kicker="FAQ" title="Preguntas frecuentes" />
        <div className="space-y-3">
          {[
            {
              q: "¿Cómo recibo el acceso después de la compra?",
              a: "Automáticamente por e-mail, justo después de confirmar tu pago. En cuestión de minutos ya estás dentro.",
            },
            {
              q: "¿En qué dispositivos puedo acceder?",
              a: "En cualquiera: celular, tablet, laptop u ordenador. Todo funciona en el navegador, sin instalar nada.",
            },
            {
              q: "¿El Fútbol 360° y los 2.000 ejercicios vienen en la misma plataforma?",
              a: "Sí. Todo está integrado en un solo acceso: sesiones, ejercicios y los tres paquetes de Fútbol 360°.",
            },
            {
              q: "¿Por qué el precio es tan bajo?",
              a: "Porque es un precio de lanzamiento exclusivo para los primeros usuarios de la plataforma actualizada con video. Queremos que los entrenadores la prueben y vean el salto de calidad inmediato.",
            },
            {
              q: "¿Cuánto tiempo tengo acceso?",
              a: "Acceso de por vida con todas las actualizaciones futuras incluidas. Un solo pago y es tuyo para siempre.",
            },
            {
              q: "¿El pago es seguro?",
              a: "100% seguro. Procesamos los pagos a través de Kiwify, una de las plataformas de pagos más seguras y confiables.",
            },
          ].map((f, i) => (
            <details
              key={i}
              data-reveal
              className="group rounded-2xl border border-border bg-card px-5 py-4 open:shadow-elegant"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold">
                <span>{f.q}</span>
                <span className="text-primary transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ============ CTA FINAL (segundo y último botón) ============ */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-hero" />
        <div className="relative mx-auto max-w-3xl px-5 text-center" data-reveal>
          <Dumbbell className="mx-auto h-12 w-12 text-primary" />
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2 text-xs font-black uppercase tracking-widest text-gold-foreground shadow-lg">
            <Clock className="h-3.5 w-3.5" /> Oferta por tiempo limitado
          </div>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">
            Tu carrera merece este <span className="text-primary">salto de nivel</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Es literalmente la decisión más barata que vas a tomar este año — y probablemente la que
            más va a transformar tu carrera como entrenador.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-foreground/80 sm:text-base">
            <Sparkles className="mr-1 inline h-4 w-4 text-gold" />
            Cuando la promoción termine, vuelve a $92. No hay segunda oportunidad.
          </p>
          <div className="mt-8">
            <CTA href={CHECKOUT_LINK_FULL}>Sí, Quiero Mi Acceso por $5,50</CTA>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            <ShieldCheck className="mr-1 inline h-4 w-4 text-primary" />
            7 días de garantía · Pago 100% seguro · Acceso inmediato
          </p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-border bg-card/40 px-5 py-10 text-center text-xs text-muted-foreground">
        <p className="mx-auto max-w-3xl">
          Este sitio no está afiliado, respaldado, ni administrado por Meta, Facebook, Instagram, FIFA
          o cualquier organización relacionada con la Copa del Mundo.
        </p>
        <p className="mx-auto mt-3 max-w-3xl">
          Los resultados y testimonios mencionados son ejemplos y no garantizan resultados idénticos
          para todos los usuarios.
        </p>
        <p className="mt-4">© {new Date().getFullYear()} — Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
