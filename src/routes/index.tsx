import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  Flame,
  ShieldCheck,
  Zap,
  CheckCircle2,
  XCircle,
  Play,
  Sparkles,
  RefreshCw,
  Smartphone,
  Users,
  Trophy,
  Dumbbell,
  Library,
  LayoutGrid,
  Star,
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

// !!! REEMPLAZAR: link real del checkout de Hotmart !!!
const CHECKOUT_LINK = "https://pay.hotmart.com/D106820400M?checkoutMode=10";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plataforma Completa de Entrenamiento de Fútbol · Homenaje al Mundial" },
      {
        name: "description",
        content:
          "+250 sesiones interactivas, +2.000 ejercicios y Fútbol 360° completo. Acceso inmediato y de por vida. Promoción especial en homenaje al Mundial.",
      },
      { property: "og:title", content: "Plataforma Completa de Entrenamiento de Fútbol" },
      {
        property: "og:description",
        content:
          "+250 sesiones · +2.000 ejercicios · Fútbol 360°. Todo por $15 USD, en homenaje al Mundial.",
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

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT_LINK}
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
      {/* ============ HERO ============ */}
      <header className="relative overflow-hidden bg-hero">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(oklch(0.78_0.22_142/0.15)_1px,transparent_1px),linear-gradient(90deg,oklch(0.78_0.22_142/0.15)_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-10 sm:pt-14 md:pb-24">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2 text-xs font-black uppercase tracking-widest text-gold-foreground shadow-lg sm:text-sm">
              🔥 Promoción Especial — En Homenaje a la Copa del Mundo ⚽
            </div>
            <h1 className="mt-6 text-4xl font-black uppercase leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl">
              En Homenaje al Mundial,
              <br />
              <span className="text-primary">Rompimos el Precio:</span>
              <br />
              Plataforma Completa de Entrenamiento de Fútbol
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
              +250 sesiones interactivas + 2.000 ejercicios + Fútbol 360° completo.
              Todo en un solo lugar, con acceso inmediato y <strong className="text-foreground">de por vida</strong>.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              <Sparkles className="mr-1 inline h-4 w-4 text-gold" />
              Actualizaciones automáticas: añadimos contenido constantemente. Tu plataforma crece contigo.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <CTA>Quiero Mi Acceso Completo</CTA>
              <p className="text-xs text-muted-foreground">
                <ShieldCheck className="mr-1 inline h-4 w-4 text-primary" />
                Pago 100% seguro · Acceso inmediato por e-mail
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-16" data-reveal>
            <img
              src={coverAsset.url}
              alt="Plataforma Completa de Entrenamiento de Fútbol — Paquete Completo"
              width={1600}
              height={1600}
              className="mx-auto w-full max-w-2xl rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </header>

      {/* ============ PROBLEMA ============ */}
      <section className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
        <p className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl" data-reveal>
          Estás cansado de entrenar con <span className="text-destructive/90">ejercicios sueltos</span>,
          sin estructura y sin una progresión clara.
          <br />
          <span className="text-muted-foreground">
            Horas planificando cada sesión, buscando en videos, dibujando en papel…
          </span>{" "}
          <span className="text-primary">Se acabó.</span>
        </p>
      </section>

      {/* ============ SOLUCIÓN ============ */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionTitle kicker="La solución" title="Todo en un solo lugar" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Library,
              title: "Plataforma con +250 Sesiones",
              text: "Sesiones de entrenamiento interactivas, organizadas por posición, categoría y edad. Listas para aplicar.",
              img: featureSessions,
            },
            {
              icon: LayoutGrid,
              title: "+2.000 Ejercicios de Fútbol",
              text: "Biblioteca organizada de ejercicios con diagramas, objetivos y variantes. Todo estructurado para ti.",
              img: featureExercises,
            },
            {
              icon: Trophy,
              title: "Fútbol 360° Completo",
              text: "Fútbol femenino, infantil y acondicionamiento físico. Tres paquetes premium incluidos.",
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

      {/* ============ VIDEO ============ */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <SectionTitle title="Mira por dentro la plataforma que vas a recibir" />
        {/* !!! VIDEO_PLACEHOLDER — reemplaza el src por tu propio video subido !!! */}
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

      {/* ============ GALERÍA ============ */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionTitle kicker="En el campo" title="Entrenamientos que funcionan de verdad" />
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
        <SectionTitle kicker="Cómo funciona" title="Empieza en 3 pasos" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Smartphone, t: "Accede desde donde quieras", d: "Móvil, tablet u ordenador. Todo online, sin instalar nada." },
            { icon: LayoutGrid, t: "Elige por posición, categoría o edad", d: "Filtros claros: encuentra lo que necesitas en segundos." },
            { icon: Zap, t: "Abre el material y entrena", d: "Todo listo para aplicar en el campo, hoy mismo." },
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

      {/* ============ TESTIMONIOS ============ */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionTitle kicker="Testimonios reales" title="Entrenadores que ya lo usan" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { n: "Carlos M.", r: "Entrenador Sub-15, México", t: "Ahorro horas cada semana. Ya no busco ejercicios sueltos, tengo todo en un solo lugar.", img: testimonial1.url },
            { n: "Andrés G.", r: "Preparador Físico, Colombia", t: "El paquete de acondicionamiento físico es oro puro. Mis jugadores mejoraron muchísimo.", img: testimonial2.url },
            { n: "Diego R.", r: "DT Categoría Amateur, Argentina", t: "Vale 10 veces lo que pagué. Las sesiones interactivas son increíbles.", img: testimonial1.url },
            { n: "Laura P.", r: "Coach Fútbol Femenino, Chile", t: "Finalmente material específico para mujeres. Excelente calidad.", img: testimonial2.url },
            { n: "Miguel A.", r: "Escuela de Fútbol, Perú", t: "Los niños se enganchan con las sesiones. Nota alta de mis padres de familia.", img: testimonial1.url },
            { n: "Roberto S.", r: "Entrenador de Base, España", t: "La biblioteca de 2.000 ejercicios es una locura. No me imaginé tanto contenido.", img: testimonial2.url },
          ].map((t, i) => (
            <figure
              key={i}
              data-reveal
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-elegant"
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
      </section>

      {/* ============ DESGLOSE DE VALOR (MÁS IMPORTANTE) ============ */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,oklch(0.78_0.22_142)_0,transparent_40%),radial-gradient(circle_at_80%_80%,oklch(0.82_0.15_85)_0,transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl px-5">
          <div className="text-center" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2 text-xs font-black uppercase tracking-widest text-gold-foreground shadow-lg">
              🎁 En Homenaje al Mundial
            </div>
            <h2 className="mt-5 text-3xl font-black uppercase sm:text-4xl md:text-5xl">
              Todo Esto Está Incluido
            </h2>
          </div>

          <ul className="mx-auto mt-10 max-w-2xl space-y-3" data-reveal>
            {[
              ["Plataforma con +250 Sesiones de Entrenamiento", "$19"],
              ["Material Completo de +2.000 Ejercicios", "$25"],
              ["Fútbol 360° — Entrenamientos Femeninos", "$16"],
              ["Fútbol 360° — Entrenamientos Infantiles", "$16"],
              ["Fútbol 360° — Acondicionamiento Físico", "$16"],
            ].map(([name, price], i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-4 rounded-xl border border-primary/20 bg-card/60 px-5 py-4 backdrop-blur"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="truncate text-sm font-semibold sm:text-base">{name}</span>
                </div>
                <span className="shrink-0 font-black text-gold">Valor {price}</span>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-gold/40 bg-card/80 p-6 text-center shadow-elegant backdrop-blur sm:p-10" data-reveal>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Valor total</p>
            <p className="mt-1 text-2xl font-black text-muted-foreground line-through">$92 USD</p>
            <p className="mt-6 text-sm uppercase tracking-widest text-gold">Hoy, en homenaje al Mundial</p>
            <p className="mt-1 text-6xl font-black leading-none text-primary sm:text-7xl md:text-8xl">
              $15
              <span className="text-2xl align-top">USD</span>
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-1.5 text-xs font-black uppercase tracking-widest text-gold-foreground">
              75% de descuento · Pago único · Acceso de por vida
            </div>
            <div className="mt-8">
              <CTA className="w-full sm:w-auto">Quiero Mi Plataforma Completa</CTA>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              <ShieldCheck className="mr-1 inline h-4 w-4 text-primary" />
              Pago 100% seguro · Acceso inmediato por e-mail
            </p>
          </div>
        </div>
      </section>

      {/* ============ ACTUALIZACIONES ============ */}
      <section className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20" data-reveal>
        <RefreshCw className="mx-auto h-10 w-10 text-primary" />
        <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">
          Actualizaciones constantes
        </h2>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          Añadimos nuevas sesiones, mejoras de diseño y nuevas funcionalidades sin costo adicional.
          Tu plataforma crece contigo.
        </p>
      </section>

      {/* ============ GARANTÍA ============ */}
      <section className="mx-auto max-w-3xl px-5 py-16" data-reveal>
        <div className="flex flex-col items-center gap-6 rounded-3xl border-2 border-primary/40 bg-card p-8 text-center sm:flex-row sm:text-left">
          <ShieldCheck className="h-16 w-16 shrink-0 text-primary" />
          <div>
            <h3 className="text-2xl font-black uppercase">7 días de garantía incondicional</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Si sientes que no es para ti, te devolvemos tu dinero. Sin preguntas, sin complicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SIN vs CON ============ */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionTitle title="Sin la plataforma vs. Con la plataforma" />
        <div className="grid gap-5 md:grid-cols-2">
          <div
            data-reveal
            className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6"
          >
            <h3 className="mb-4 text-xl font-black uppercase text-destructive/90">Sin la plataforma</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Ejercicios sueltos, sin orden",
                "Sin progresión clara",
                "Horas planificando cada sesión",
                "Frustración semana tras semana",
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
                "Todo organizado por posición y categoría",
                "Progresión clara semana a semana",
                "La plataforma hace el trabajo por ti",
                "Resultados reales en el campo",
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
              a: "Porque es una promoción especial en homenaje a la Copa del Mundo, por tiempo limitado. Después vuelve al precio normal.",
            },
            {
              q: "¿Cuánto tiempo tengo acceso?",
              a: "Acceso de por vida con actualizaciones incluidas. Un solo pago y es tuyo para siempre.",
            },
            {
              q: "¿El pago es seguro?",
              a: "100% seguro. Procesamos los pagos a través de Hotmart, una de las plataformas más confiables de Latinoamérica.",
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

      {/* ============ CTA FINAL ============ */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-hero" />
        <div className="relative mx-auto max-w-3xl px-5 text-center" data-reveal>
          <Dumbbell className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">
            $92 de valor por solo <span className="text-primary">$15</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Acceso inmediato, de por vida, con todas las actualizaciones incluidas.
            En homenaje al Mundial.
          </p>
          <div className="mt-8">
            <CTA>Quiero Mi Acceso Completo Ahora</CTA>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            <ShieldCheck className="mr-1 inline h-4 w-4 text-primary" />
            7 días de garantía · Pago 100% seguro
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
        {/* PIXEL_PLACEHOLDER — Facebook Pixel ya instalado globalmente en __root.tsx. Añade aquí scripts adicionales si necesitas. */}
      </footer>
    </div>
  );
}
