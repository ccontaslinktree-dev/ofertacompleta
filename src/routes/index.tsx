import { createFileRoute } from "@tanstack/react-router";
import videoAsset from "@/assets/video.mp4.asset.json";
import feedback1 from "@/assets/feedback-1.png.asset.json";
import feedback2 from "@/assets/feedback-2.png.asset.json";
import feedback3 from "@/assets/feedback-3.png.asset.json";
import feedback4 from "@/assets/feedback-4.png.asset.json";
import feedback5 from "@/assets/feedback-5.png.asset.json";
import feedback6 from "@/assets/feedback-6.png.asset.json";
import feedback7 from "@/assets/feedback-7.png.asset.json";
import { useEffect, useState } from "react";
import { Check, ChevronDown, Flame, ShieldCheck, Star, X } from "lucide-react";

const MAIN_CHECKOUT_URL = "https://pay.hotmart.com/B107478096K?checkoutMode=10";
const BASIC_CHECKOUT_URL = "https://pay.hotmart.com/B107438269A?checkoutMode=10";

const goToPackages = () => document.getElementById("paquetes")?.scrollIntoView({ behavior: "smooth" });
const openCheckout = (url: string) => { window.location.href = url; };

const socialProofMessages = [
  "María de México acaba de comprar el Acceso Completo",
  "Carlos de Colombia aseguró su acceso hace 2 minutos",
  "Valentina de Argentina compró el Paquete Completo",
  "Andrés de Perú acaba de unirse",
  "Sofía de Chile compró hace 1 minuto",
  "Diego de Ecuador aseguró el Acceso Completo",
  "Lucía de Bolivia acaba de comprar",
  "Javier de Venezuela se unió hace 3 minutos",
  "Camila de Uruguay compró el Paquete Completo",
  "Mateo de Paraguay acaba de asegurar su acceso",
];

function SocialProofToasts() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let index = Math.floor(Math.random() * socialProofMessages.length);
    let hideTimer: number | undefined;
    let nextTimer: number | undefined;

    const cycle = () => {
      setMessage(socialProofMessages[index % socialProofMessages.length]!);
      index += 1;
      hideTimer = window.setTimeout(() => setMessage(null), 5000 + Math.random() * 1000);
      nextTimer = window.setTimeout(cycle, 12000 + Math.random() * 6000);
    };

    const startTimer = window.setTimeout(cycle, 6000);
    return () => {
      window.clearTimeout(startTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
      if (nextTimer) window.clearTimeout(nextTimer);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-20 left-3 z-[90] max-w-[calc(100vw-1.5rem)] sm:bottom-5 sm:left-5" aria-live="polite">
      <div className={`flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-2xl transition-all duration-500 ${message ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}>
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600" />
        </span>
        <span className="text-xs font-bold leading-snug text-gray-800 sm:text-sm">{message ?? ""}</span>
      </div>
    </div>
  );
}

function ScarcityModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [seconds, setSeconds] = useState(600);
  useEffect(() => {
    if (!open) return;
    setSeconds(600);
    const timer = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [open]);
  if (!open) return null;
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-2xl">
        <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100" aria-label="Cerrar"><X className="h-5 w-5" /></button>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-2xl">🔥</div>
        <h3 className="text-3xl font-black uppercase">¡Última oportunidad!</h3>
        <p className="mt-3 font-medium text-gray-600">Cuando este contador llegue a cero, el precio vuelve al valor normal.</p>
        <div className="my-5 text-5xl font-black tracking-widest text-green-600">{minutes}:{secs}</div>
        <button onClick={() => { onClose(); goToPackages(); }} className="w-full rounded-2xl bg-[#00A86B] px-5 py-4 font-black uppercase text-white shadow-lg hover:brightness-95">ASEGURAR MI ACCESO AHORA</button>
        <p className="mt-3 text-xs text-gray-500">Acceso inmediato · Garantía de 7 días · Riesgo cero.</p>
      </div>
    </div>
  );
}

function CTA({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return <button onClick={onClick} className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00A86B] px-7 py-4 text-base font-black uppercase tracking-wide text-white shadow-lg transition hover:brightness-95 sm:w-auto"><Flame className="h-5 w-5" />{children}</button>;
}

const sports = [
  ["🏀", "Básquetbol", "+1.000 entrenamientos", ["Técnica individual", "Tiro y finalización", "Manejo de balón", "Sesiones listas para aplicar"]],
  ["🏐", "Vóley", "+1.000 entrenamientos", ["Ataque y recepción", "Bloqueo", "Defensa", "Sesiones organizadas"]],
  ["⚽", "Futsal", "+1.000 entrenamientos", ["Pivote", "Defensa", "Finalización", "Toma de decisiones"]],
  ["⚽", "Fútbol de Campo", "+2.000 ejercicios", ["Técnica", "Táctica", "Posiciones", "Sesiones completas"]],
] as const;

const valueStack = [
  ["+1.000 entrenamientos de Básquetbol", "$97"],
  ["+1.000 entrenamientos de Vóley", "$97"],
  ["+1.000 entrenamientos de Futsal", "$87"],
  ["+2.000 ejercicios de Fútbol de Campo", "$147"],
  ["Guía Nutricional (+100 planes)", "$67"],
  ["Guía de Planificación Semanal", "$27"],
  ["Manual de Prevención de Lesiones", "$34"],
  ["Acceso a Comunidad + futuros deportes", "$49"],
] as const;

const withoutList = [
  "Vídeos sueltos sin orden",
  "Horas planificando cada sesión",
  "Ejercicios genéricos que no sirven",
  "Estancamiento y frustración",
  "Gastar dinero en varios cursos diferentes",
];

const withList = [
  "+5.000 entrenamientos organizados",
  "Sesiones listas en minutos",
  "Material específico por deporte",
  "Progreso visible semana a semana",
  "Todo en un solo lugar por un precio ridículo",
];

const testimonials = [
  ["Carlos Mendoza", "Entrenador de basquetbol", "Antes perdía horas buscando ejercicios sueltos en YouTube. Ahora abro Multideporte Pro y en 5 minutos tengo la sesión lista. Mis jugadores mejoraron la técnica de tiro y el 1x1 en menos de 3 semanas.", feedback2.url],
  ["Valentina Ríos", "Jugadora de vóley", "En un mes subí mi nivel de ataque y recepción de forma notable. Los ejercicios están tan claros que puedo entrenar sola y ver resultados reales.", feedback5.url],
  ["Andrés López", "Entrenador de fútbol", "Los +2.000 ejercicios de fútbol de campo son una locura. Organizo sesiones completas en minutos. El equipo se ve mucho más intenso y organizado.", feedback1.url],
  ["Mateo Vargas", "Jugador de futsal", "Encontré ejercicios de pivote, defensa y finalización que no veía en ningún otro lado. Mi rendimiento en los partidos cambió completamente.", feedback6.url],
  ["Lucía Fernández", "Jugadora de básquet", "Mejoré mi tiro libre y mi juego de pies entrenando sola. No necesito un entrenador todos los días para progresar.", feedback4.url],
  ["Diego Ramírez", "Entrenador de vóley", "Mis equipos juveniles mejoraron el bloqueo y la recepción de forma visible. La calidad es profesional de verdad.", feedback3.url],
  ["Sofía Herrera", "Jugadora de fútbol", "El paquete completo vale cada centavo. La guía nutricional me dio más energía y los ejercicios de fútbol son brutales.", null],
  ["Javier Morales", "Entrenador de futsal", "Mis jugadores mejoraron la toma de decisiones bajo presión. Los ejercicios de futsal son específicos y fáciles de aplicar.", feedback7.url],
] as const;

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Multideporte Pro · +5.000 Entrenamientos Profesionales" },
    { name: "description", content: "Básquetbol, vóley, futsal y fútbol de campo + guía nutricional y 3 bonos en una sola plataforma. Acceso inmediato." },
    { property: "og:title", content: "Multideporte Pro · +5.000 Entrenamientos Profesionales" },
    { property: "og:description", content: "La biblioteca completa de entrenamientos para 4 deportes. Acceso inmediato y garantía de 7 días." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LandingPage,
});

function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [viewers, setViewers] = useState(1847);

  useEffect(() => {
    const onScroll = () => {};
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white pb-20 text-gray-950">
      <div className="sticky top-0 z-50 bg-[#00A86B] px-3 py-3 text-center text-xs font-black uppercase tracking-wide text-white sm:text-sm">🔥 OFERTA LIMITADA · SOLO HOY · ACCESO INMEDIATO</div>

      <section className="px-4 pb-12 pt-8 sm:px-5 sm:pb-14 sm:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex rounded-full bg-[#FFCC00] px-4 py-2 text-xs font-black uppercase sm:text-sm">Plataforma Multideporte Pro</div>
          <h1 className="mt-5 text-3xl font-black uppercase leading-[0.98] sm:text-5xl md:text-6xl">DOMINA <span className="bg-[#FFCC00] px-1">4 DEPORTES</span> CON <span className="bg-[#FFCC00] px-1">+5.000</span> ENTRENAMIENTOS PROFESIONALES LISTOS PARA <span className="bg-[#FFCC00] px-1">APLICAR HOY</span></h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">La biblioteca completa que usan jugadores y entrenadores de Básquetbol, Vóley, Futsal y Fútbol de Campo + Guía Nutricional de atletas profesionales + 3 Bonos exclusivos. Todo en un solo lugar. Acceso inmediato.</p>

          <div className="mx-auto mt-8 max-w-md">
            <h2 className="mb-3 text-lg font-black uppercase sm:text-xl">Mira por dentro la plataforma</h2>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-black text-green-700"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" /> {viewers.toLocaleString("es-ES")} personas viendo esta presentación</div>
            <video src={videoAsset.url} controls playsInline preload="metadata" className="aspect-[9/16] w-full rounded-2xl border-4 border-gray-900 bg-black object-cover" />
            <p className="mt-4 rounded-2xl border border-yellow-300 bg-yellow-50 px-4 py-3 text-sm font-bold leading-relaxed text-gray-800">⚠️ Esta oferta especial puede terminar en cualquier momento. Cuando se acaben las plazas del día, el precio vuelve al valor normal.</p>
            <p className="mt-3 text-sm font-black text-gray-700">🔴 1.847 personas viendo esta página ahora · 23 compraron en la última hora</p>
          </div>

          <div className="mt-7 flex flex-col items-center gap-3"><CTA onClick={goToPackages}>QUIERO ASEGURAR ESTE PRECIO AHORA</CTA><span className="text-xs font-medium text-gray-500">Pago seguro · Acceso inmediato por email</span></div>
        </div>
      </section>

      <section className="border-y bg-gray-950 px-4 py-4 text-center text-white"><div className="mx-auto max-w-5xl text-xs font-black uppercase sm:text-sm"><span className="mr-2 inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" /> Oferta activa hoy · Cada minuto que esperas, el precio puede volver a subir</div></section>

      <section className="px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">LO QUE VAS A RECIBIR</h2><p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">Todo listo, organizado y aplicable desde el primer día dentro de Multideporte Pro.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{sports.map(([emoji, name, count]) => <div key={name} className="rounded-2xl border bg-white p-5 shadow-lg"><div className="text-4xl">{emoji}</div><h3 className="mt-3 text-xl font-black">{name}</h3><p className="mt-1 font-bold text-green-600">{count}</p></div>)}</div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-[#FFCC00] p-5 shadow-lg"><h3 className="text-xl font-black">🥗 Guía Nutricional</h3><p className="mt-2 font-bold">+100 planes de alimentación</p></div><div className="rounded-2xl bg-[#00A86B] p-5 text-white shadow-lg"><h3 className="text-xl font-black">🎁 3 Bonos</h3><p className="mt-2 font-bold">Incluidos con el acceso completo</p></div></div>
        <div className="mt-8 text-center"><CTA onClick={goToPackages}>QUIERO ASEGURAR ESTE PRECIO AHORA</CTA></div>
      </div></section>

      <section className="bg-gray-950 px-4 py-14 text-white sm:px-5 sm:py-20"><div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-black uppercase sm:text-4xl">¿Cuánto valdría realmente todo esto por separado?</h2>
        <ul className="mt-8 divide-y divide-white/10 rounded-3xl bg-white/5 p-5 sm:p-7">
          {valueStack.map(([item, price]) => (
            <li key={item} className="flex items-center justify-between gap-4 py-3 text-sm font-bold sm:text-base">
              <span className="text-gray-200">{item}</span>
              <span className="shrink-0 text-gray-400 line-through">{price}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <p className="text-lg font-black uppercase text-gray-300">Total real: <span className="text-gray-400 line-through">$605</span></p>
          <p className="mt-3 text-2xl font-black uppercase leading-tight sm:text-3xl">Hoy lo recibes TODO por solo <span className="bg-[#FFCC00] px-2 text-gray-950">$5,50</span></p>
          <p className="mx-auto mt-5 max-w-xl rounded-2xl bg-[#00A86B] px-5 py-4 text-base font-black leading-relaxed sm:text-lg">Estás pagando menos del 2% del valor real. Esta diferencia solo existe hoy.</p>
          <div className="mt-7 flex justify-center"><CTA onClick={goToPackages}>QUIERO ASEGURAR ESTE PRECIO AHORA</CTA></div>
        </div>
      </div></section>

      <section className="bg-gray-50 px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">4 deportes. Una sola plataforma.</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{sports.map(([emoji, name, count, benefits]) => <div key={name} className="rounded-2xl bg-white p-5 shadow-lg"><div className="flex items-center gap-3"><span className="text-3xl">{emoji}</span><div><h3 className="text-xl font-black">{name}</h3><p className="font-bold text-green-600">{count}</p></div></div><ul className="mt-4 space-y-2 text-sm font-semibold">{benefits.map((b) => <li key={b} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-[#00A86B]" />{b}</li>)}</ul></div>)}</div></div></section>

      <section className="px-4 py-14 text-center sm:px-5 sm:py-20"><div className="mx-auto max-w-4xl rounded-3xl bg-gray-950 p-7 text-white sm:p-12"><h2 className="text-3xl font-black uppercase sm:text-4xl">Entrena fuerte y come como un atleta profesional</h2><p className="mt-4 text-gray-300">+100 planes de alimentación para tener más energía, recuperarte más rápido y sostener el rendimiento durante toda la temporada. Adapta cualquier orientación a tus necesidades con un profesional cualificado.</p></div></section>

      <section className="bg-gray-50 px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-5xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">Empieza en 3 pasos</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{[["01", "Accedes de inmediato"], ["02", "Eliges deporte y objetivo"], ["03", "Aplicás tus sesiones"]].map(([n, t]) => <div key={n} className="rounded-2xl bg-white p-6 text-center shadow-lg"><div className="text-4xl font-black text-[#00A86B]">{n}</div><h3 className="mt-3 font-black uppercase">{t}</h3></div>)}</div><div className="mt-8 text-center"><CTA onClick={goToPackages}>ASEGURAR MI ACCESO AHORA</CTA></div></div></section>

      <section className="px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">Experiencias compartidas</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{testimonials.map(([name, role, text, img]) => <article key={name} className="rounded-2xl border bg-white p-5 shadow-lg"><div className="mb-3 flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-[#FFCC00] text-[#FFCC00]" />)}</div><p className="text-sm leading-relaxed text-gray-700">“{text}”</p>{img ? <img src={img} alt={`Foto de ${name}`} loading="lazy" className="mt-4 h-44 w-full rounded-xl object-cover" /> : null}<div className="mt-4 font-black">{name}</div><div className="text-xs text-gray-500">{role}</div></article>)}</div></div></section>

      <section className="bg-gray-50 px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-5xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">3 Bonos incluidos</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{[["01", "Guía de Planificación Semanal", "$27"], ["02", "Manual de Prevención de Lesiones", "$34"], ["03", "Comunidad + Futuros Deportes", "$49"]].map(([n, t, v]) => <div key={n} className="relative rounded-2xl bg-white p-5 shadow-lg"><span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-black text-white">Incluido</span><div className="text-3xl font-black text-green-600">{n}</div><h3 className="mt-5 pr-14 font-black">{t}</h3><p className="mt-3 font-bold text-gray-500">Valor {v} → <span className="text-green-600">INCLUIDO</span></p></div>)}</div></div></section>

      <section className="px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-black uppercase sm:text-4xl">La diferencia es brutal</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-red-200 bg-red-50 p-6 shadow-lg">
            <h3 className="text-xl font-black uppercase text-red-700">SIN Multideporte Pro</h3>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-gray-800">{withoutList.map((item) => <li key={item} className="flex gap-2"><X className="h-5 w-5 shrink-0 text-red-600" />{item}</li>)}</ul>
          </div>
          <div className="rounded-3xl border-2 border-[#00A86B] bg-green-50 p-6 shadow-lg">
            <h3 className="text-xl font-black uppercase text-green-800">CON Multideporte Pro</h3>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-gray-800">{withList.map((item) => <li key={item} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-[#00A86B]" />{item}</li>)}</ul>
          </div>
        </div>
      </div></section>

      <section id="paquetes" className="scroll-mt-20 px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-5xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">ELIGE TU PAQUETE</h2><p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">El Acceso Completo es la elección de quienes quieren resultados en los 4 deportes desde hoy.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border-2 p-6 shadow-lg"><h3 className="text-2xl font-black">Solo Fútbol de Campo</h3><p className="mt-2 font-bold text-gray-600">+2.000 ejercicios</p><p className="mt-1 text-sm font-semibold text-gray-500">Solo si quieres empezar únicamente con fútbol.</p><div className="my-5 text-4xl font-black">$5,50 <span className="text-base">USD</span></div><ul className="mb-6 space-y-2 text-sm font-semibold"><li className="flex gap-2"><Check className="h-5 w-5 text-green-600" />+2.000 ejercicios de fútbol</li><li className="flex gap-2"><Check className="h-5 w-5 text-green-600" />Acceso inmediato</li></ul><button onClick={() => openCheckout(BASIC_CHECKOUT_URL)} className="w-full rounded-2xl border-2 border-gray-900 px-5 py-4 font-black uppercase">COMPRAR BÁSICO · $5,50</button></div>
          <div className="relative rounded-3xl border-4 border-[#00A86B] p-6 shadow-xl ring-4 ring-green-50"><span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#00A86B] px-4 py-2 text-xs font-black text-white">RECOMENDADO · MEJOR VALOR</span><h3 className="text-2xl font-black">Todo incluido</h3><p className="mt-2 text-sm font-black uppercase text-green-700">El 94% de los compradores eligen el Acceso Completo</p><div className="mt-3 text-gray-400 line-through">$47</div><div className="text-4xl font-black">$7,99 <span className="text-base">USD</span></div><ul className="my-5 space-y-2 text-sm font-semibold">{["+1.000 Básquetbol", "+1.000 Vóley", "+1.000 Futsal", "+2.000 Fútbol", "Guía Nutricional", "3 Bonos", "Acceso al contenido incluido"].map((x) => <li key={x} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-green-600" />{x}</li>)}</ul><button onClick={() => openCheckout(MAIN_CHECKOUT_URL)} className="w-full rounded-2xl bg-[#00A86B] px-5 py-4 font-black uppercase text-white">SÍ, QUIERO EL ACCESO COMPLETO AHORA</button></div>
        </div>
      </div></section>

      <section className="bg-[#00A86B] px-4 py-12 text-center text-white"><div className="mx-auto max-w-3xl"><ShieldCheck className="mx-auto h-14 w-14" /><h2 className="mt-4 text-3xl font-black uppercase">Prueba todo durante 7 días. Riesgo cero.</h2><p className="mt-4 text-lg">Si por cualquier motivo sientes que no es para ti, te devolvemos el 100% de tu dinero. Sin preguntas. Sin letra chica.</p></div></section>

      <section className="px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-4xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">Preguntas frecuentes</h2><div className="mt-8 space-y-3">{[["¿Cómo recibo el acceso?", "Es inmediato. Al terminar el pago recibes en tu email el acceso a la plataforma y ya puedes empezar a usar los entrenamientos hoy mismo."], ["¿Puedo usar la plataforma desde el celular?", "Sí. Funciona perfecto en celular, tablet y computadora, sin instalar nada. Abres, eliges el ejercicio y entrenas."], ["¿Los entrenamientos son solo para profesionales?", "No. Sirven igual si empiezas hoy o si ya entrenas un equipo: eliges el nivel, el objetivo y el deporte, y aplicas la sesión tal como está."], ["¿El acceso es de por vida?", "Entras una vez y consultas el material cuando quieras, sin mensualidades. Las condiciones exactas de cada paquete se muestran en el checkout."], ["¿Qué incluye la guía nutricional?", "+100 planes de alimentación para tener más energía y recuperarte mejor. Es material educativo y no sustituye el asesoramiento profesional individualizado."], ["¿Existe garantía?", "Sí, tienes 7 días de garantía total. Si no es para ti, escribes y te devolvemos el 100% del dinero. Sin preguntas y sin letra chica: el riesgo es cero."]].map(([q, a]) => <details key={q} className="group rounded-2xl border bg-white p-5 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black">{q}<ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" /></summary><p className="mt-3 pr-6 text-sm leading-relaxed text-gray-600">{a}</p></details>)}</div><div className="mt-10 text-center"><CTA onClick={goToPackages}>ASEGURAR MI ACCESO AHORA</CTA></div></div></section>

      <footer className="border-t bg-gray-950 px-4 py-10 text-center text-xs leading-relaxed text-gray-400">Los resultados pueden variar de persona a persona. El contenido de entrenamiento es educativo y no sustituye la evaluación de un profesional cualificado. La información nutricional no constituye consejo médico ni nutricional individualizado. © 2026 Plataforma Multideporte Pro.</footer>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden"><button onClick={goToPackages} className="w-full rounded-xl bg-[#00A86B] px-4 py-3 text-sm font-black uppercase text-white">ASEGURAR MI ACCESO · $5,50</button></div>
      <SocialProofToasts />
      <ScarcityModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
