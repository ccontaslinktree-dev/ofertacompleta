import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, ChevronDown, Flame, ShieldCheck, Star, X } from "lucide-react";

const MAIN_CHECKOUT_URL = "https://pay.hotmart.com/B107478096K?checkoutMode=10";
const BASIC_CHECKOUT_URL = "https://pay.hotmart.com/P107284207G?checkoutMode=10";

const goToPackages = () => document.getElementById("paquetes")?.scrollIntoView({ behavior: "smooth" });
const openCheckout = (url: string) => { window.location.href = url; };

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
        <p className="mt-3 font-medium text-gray-600">Revisa los paquetes disponibles antes de decidir.</p>
        <div className="my-5 text-5xl font-black tracking-widest text-green-600">{minutes}:{secs}</div>
        <button onClick={() => { onClose(); goToPackages(); }} className="w-full rounded-2xl bg-[#00A86B] px-5 py-4 font-black uppercase text-white shadow-lg hover:brightness-95">VER LOS PAQUETES</button>
        <p className="mt-3 text-xs text-gray-500">Elige de forma clara entre el acceso completo y el paquete básico.</p>
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

const testimonials = [
  ["Carlos Mendoza", "Entrenador de basquetbol", "Antes perdía mucho tiempo buscando ejercicios. Ahora tengo más de 1.000 entrenamientos organizados y listos para aplicar."],
  ["Valentina Ríos", "Jugadora de vóley", "Los ejercicios están bien explicados y me ayudaron a organizar mejor mis sesiones de ataque y recepción."],
  ["Andrés López", "Entrenador de fútbol", "Los ejercicios de fútbol de campo facilitan la organización de sesiones completas en menos tiempo."],
  ["Mateo Vargas", "Jugador de futsal", "Encontré ejercicios específicos de pivote, defensa y finalización para trabajar aspectos concretos de mi juego."],
  ["Lucía Fernández", "Jugadora de básquet", "Me gusta poder consultar los ejercicios e organizar meu treinamento de forma prática."],
  ["Diego Ramírez", "Entrenador de vóley", "La biblioteca facilita encontrar ejercicios para diferentes objetivos y niveles."],
  ["Sofía Herrera", "Jugadora de fútbol", "El paquete completo reúne mucho contenido en un solo lugar y es fácil de consultar."],
  ["Javier Morales", "Entrenador de futsal", "Los ejercicios específicos de futsal ayudan a montar sesiones más variadas."],
] as const;

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Plataforma Multideporte Pro · Entrenamientos Profesionales" },
    { name: "description", content: "Básquetbol, vóley, futsal y fútbol de campo en una sola plataforma." },
  ] }),
  component: LandingPage,
});

function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [viewers, setViewers] = useState(1287);

  useEffect(() => {
    const onScroll = () => {};
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white pb-20 text-gray-950">
      <div className="sticky top-0 z-50 bg-[#00A86B] px-3 py-3 text-center text-xs font-black uppercase tracking-wide text-white sm:text-sm">🔥 DESCUENTO EXCLUSIVO · ACCESO INMEDIATO</div>

      <section className="px-4 pb-12 pt-8 sm:px-5 sm:pb-14 sm:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex rounded-full bg-[#FFCC00] px-4 py-2 text-xs font-black uppercase sm:text-sm">Plataforma Multideporte Pro</div>
          <h1 className="mt-5 text-3xl font-black uppercase leading-[0.98] sm:text-5xl md:text-6xl">DOMINA <span className="bg-[#FFCC00] px-1">4 DEPORTES</span> CON <span className="bg-[#FFCC00] px-1">+5.000</span> ENTRENAMIENTOS PROFESIONALES</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">Básquetbol + Vóley + Futsal + Fútbol de Campo + Guía Nutricional + 3 Bonos. Todo en una sola plataforma.</p>

          <div className="mx-auto mt-8 max-w-md">
            <h2 className="mb-3 text-lg font-black uppercase sm:text-xl">Mira por dentro la plataforma</h2>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-black text-green-700"><span className="h-2.5 w-2.5 rounded-full bg-red-500" /> {viewers.toLocaleString("es-ES")} personas viendo esta presentación</div>
            <video src="/video.mp4" controls playsInline preload="metadata" className="aspect-[9/16] w-full rounded-2xl border-4 border-gray-900 bg-black object-cover" />
          </div>

          <div className="mt-7 flex flex-col items-center gap-3"><CTA onClick={goToPackages}>VER LOS PAQUETES DE OFERTA</CTA><span className="text-xs font-medium text-gray-500">Pago seguro · Acceso inmediato por email</span></div>
        </div>
      </section>

      <section className="border-y bg-gray-950 px-4 py-4 text-center text-white"><div className="mx-auto max-w-5xl text-xs font-black uppercase sm:text-sm"><span className="mr-2 inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" /> Oferta activa · Elige tu paquete abajo</div></section>

      <section className="px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">LO QUE VAS A RECIBIR</h2><p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">Todo organizado dentro de Plataforma Multideporte Pro.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{sports.map(([emoji, name, count]) => <div key={name} className="rounded-2xl border bg-white p-5 shadow-lg"><div className="text-4xl">{emoji}</div><h3 className="mt-3 text-xl font-black">{name}</h3><p className="mt-1 font-bold text-green-600">{count}</p></div>)}</div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-[#FFCC00] p-5 shadow-lg"><h3 className="text-xl font-black">🥗 Guía Nutricional</h3><p className="mt-2 font-bold">+100 planes de alimentación</p></div><div className="rounded-2xl bg-[#00A86B] p-5 text-white shadow-lg"><h3 className="text-xl font-black">🎁 3 Bonos</h3><p className="mt-2 font-bold">Incluidos con el acceso completo</p></div></div>
        <div className="mt-8 text-center"><CTA onClick={goToPackages}>COMPARAR PAQUETES</CTA></div>
      </div></section>

      <section className="bg-gray-50 px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">4 deportes. Una sola plataforma.</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{sports.map(([emoji, name, count, benefits]) => <div key={name} className="rounded-2xl bg-white p-5 shadow-lg"><div className="flex items-center gap-3"><span className="text-3xl">{emoji}</span><div><h3 className="text-xl font-black">{name}</h3><p className="font-bold text-green-600">{count}</p></div></div><ul className="mt-4 space-y-2 text-sm font-semibold">{benefits.map((b) => <li key={b} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-[#00A86B]" />{b}</li>)}</ul></div>)}</div></div></section>

      <section className="px-4 py-14 text-center sm:px-5 sm:py-20"><div className="mx-auto max-w-4xl rounded-3xl bg-gray-950 p-7 text-white sm:p-12"><h2 className="text-3xl font-black uppercase sm:text-4xl">Nutrición y organización para acompañar tus entrenamientos</h2><p className="mt-4 text-gray-300">+100 planes de alimentación para ayudarte a organizar mejor tu rutina. Adapta cualquier orientación a tus necesidades con un profesional cualificado.</p></div></section>

      <section className="bg-gray-50 px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-5xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">Empieza en 3 pasos</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{[["01", "Accedes de inmediato"], ["02", "Eliges deporte y objetivo"], ["03", "Aplicás tus sesiones"]].map(([n, t]) => <div key={n} className="rounded-2xl bg-white p-6 text-center shadow-lg"><div className="text-4xl font-black text-[#00A86B]">{n}</div><h3 className="mt-3 font-black uppercase">{t}</h3></div>)}</div><div className="mt-8 text-center"><CTA onClick={goToPackages}>ELEGIR MI PAQUETE</CTA></div></div></section>

      <section className="px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">Experiencias compartidas</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{testimonials.map(([name, role, text]) => <article key={name} className="rounded-2xl border bg-white p-5 shadow-lg"><div className="mb-3 flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-[#FFCC00] text-[#FFCC00]" />)}</div><p className="text-sm leading-relaxed text-gray-700">“{text}”</p><div className="mt-4 font-black">{name}</div><div className="text-xs text-gray-500">{role}</div></article>)}</div></div></section>

      <section className="bg-gray-50 px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-5xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">3 Bonos incluidos</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{[["01", "Guía de Planificación Semanal", "$27"], ["02", "Manual de Prevención de Lesiones", "$34"], ["03", "Comunidad + Futuros Deportes", "$49"]].map(([n, t, v]) => <div key={n} className="relative rounded-2xl bg-white p-5 shadow-lg"><span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-black text-white">Incluido</span><div className="text-3xl font-black text-green-600">{n}</div><h3 className="mt-5 pr-14 font-black">{t}</h3><p className="mt-3 font-bold text-gray-500">Valor {v} → <span className="text-green-600">INCLUIDO</span></p></div>)}</div></div></section>

      <section id="paquetes" className="scroll-mt-20 px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-5xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">ELIGE TU PAQUETE</h2><p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">El acceso completo es la opción recomendada. Si prefieres empezar por fútbol, elige el básico.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border-2 p-6 shadow-lg"><h3 className="text-2xl font-black">Solo Fútbol de Campo</h3><p className="mt-2 font-bold text-gray-600">+2.000 ejercicios</p><div className="my-5 text-4xl font-black">$5,50 <span className="text-base">USD</span></div><ul className="mb-6 space-y-2 text-sm font-semibold"><li className="flex gap-2"><Check className="h-5 w-5 text-green-600" />+2.000 ejercicios de fútbol</li><li className="flex gap-2"><Check className="h-5 w-5 text-green-600" />Acceso inmediato</li></ul><button onClick={() => openCheckout(BASIC_CHECKOUT_URL)} className="w-full rounded-2xl border-2 border-gray-900 px-5 py-4 font-black uppercase">COMPRAR BÁSICO · $5,50</button></div>
          <div className="relative rounded-3xl border-4 border-[#00A86B] p-6 shadow-xl ring-4 ring-green-50"><span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#00A86B] px-4 py-2 text-xs font-black text-white">RECOMENDADO · MEJOR VALOR</span><h3 className="text-2xl font-black">Todo incluido</h3><div className="mt-3 text-gray-400 line-through">$47</div><div className="text-4xl font-black">$7,99 <span className="text-base">USD</span></div><ul className="my-5 space-y-2 text-sm font-semibold">{["+1.000 Básquetbol", "+1.000 Vóley", "+1.000 Futsal", "+2.000 Fútbol", "Guía Nutricional", "3 Bonos", "Acceso al contenido incluido"].map((x) => <li key={x} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-green-600" />{x}</li>)}</ul><button onClick={() => openCheckout(MAIN_CHECKOUT_URL)} className="w-full rounded-2xl bg-[#00A86B] px-5 py-4 font-black uppercase text-white">COMPRAR ACCESO COMPLETO · $7,99</button></div>
        </div>
      </div></section>

      <section className="bg-[#00A86B] px-4 py-12 text-center text-white"><div className="mx-auto max-w-3xl"><ShieldCheck className="mx-auto h-14 w-14" /><h2 className="mt-4 text-3xl font-black uppercase">Compra protegida</h2><p className="mt-4 text-lg">Consulta las condiciones de garantía y compra directamente por el checkout seguro.</p></div></section>

      <section className="px-4 py-14 sm:px-5 sm:py-20"><div className="mx-auto max-w-4xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">Preguntas frecuentes</h2><div className="mt-8 space-y-3">{[["¿Cómo recibo el acceso?", "Después de completar la compra, recibirás las instrucciones de acceso por email."], ["¿Puedo usar la plataforma desde el celular?", "Sí. La experiencia está pensada para móvil, tablet y computadora."], ["¿Los entrenamientos son solo para profesionales?", "No. Puedes elegir ejercicios y sesiones según tu nivel, objetivo y deporte."], ["¿El acceso es de por vida?", "Consulta las condiciones específicas del paquete en el checkout."], ["¿Qué incluye la guía nutricional?", "+100 planes y materiales de organización nutricional. No sustituye asesoramiento profesional individualizado."], ["¿Existe garantía?", "Consulta las condiciones de garantía directamente en el checkout de Hotmart."]].map(([q, a]) => <details key={q} className="group rounded-2xl border bg-white p-5 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black">{q}<ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" /></summary><p className="mt-3 pr-6 text-sm leading-relaxed text-gray-600">{a}</p></details>)}</div></div></section>

      <footer className="border-t bg-gray-950 px-4 py-10 text-center text-xs leading-relaxed text-gray-400">Los resultados pueden variar de persona a persona. El contenido de entrenamiento es educativo y no sustituye la evaluación de un profesional cualificado. La información nutricional no constituye consejo médico ni nutricional individualizado. © 2026 Plataforma Multideporte Pro.</footer>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden"><button onClick={goToPackages} className="w-full rounded-xl bg-[#00A86B] px-4 py-3 text-sm font-black uppercase text-white">VER PAQUETES · COMPLETO $7,99</button></div>
      <ScarcityModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
