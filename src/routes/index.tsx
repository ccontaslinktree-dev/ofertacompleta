import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, ChevronDown, Flame, ShieldCheck, Star, X } from "lucide-react";

const HOTMART_CHECKOUT_URL = "";

const openCheckout = () => {
  if (HOTMART_CHECKOUT_URL) window.location.href = HOTMART_CHECKOUT_URL;
};

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
        <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100" aria-label="Cerrar">
          <X className="h-5 w-5" />
        </button>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-2xl">🔥</div>
        <h3 className="text-3xl font-black uppercase">¡Última oportunidad!</h3>
        <p className="mt-3 font-medium text-gray-600">Esta oferta especial expira en:</p>
        <div className="my-5 text-5xl font-black tracking-widest text-green-600">{minutes}:{secs}</div>
        <button onClick={openCheckout} className="w-full rounded-2xl bg-[#00A86B] px-5 py-4 font-black uppercase text-white shadow-lg hover:brightness-95">
          SÍ, QUIERO ASEGURAR MI ACCESO AHORA
        </button>
        <p className="mt-3 text-xs text-gray-500">Al terminar el tiempo el precio vuelve al valor normal</p>
      </div>
    </div>
  );
}

function CTA({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00A86B] px-7 py-4 text-base font-black uppercase tracking-wide text-white shadow-lg transition hover:scale-[1.01] hover:brightness-95 sm:w-auto">
      <Flame className="h-5 w-5" />
      {children}
    </button>
  );
}

const sports = [
  ["🏀", "Básquetbol", "+1.000 entrenamientos", ["Técnica individual", "Tiro y finalización", "Manejo de balón", "Sesiones listas para aplicar"]],
  ["🏐", "Vóley", "+1.000 entrenamientos", ["Ataque y recepción", "Bloqueo", "Defensa", "Sesiones organizadas"]],
  ["⚽", "Futsal", "+1.000 entrenamientos", ["Pivote", "Defensa", "Finalización", "Toma de decisiones"]],
  ["⚽", "Fútbol de Campo", "+2.000 ejercicios", ["Técnica", "Táctica", "Posiciones", "Sesiones completas"]],
] as const;

const testimonials = [
  ["Carlos Mendoza", "Entrenador de basquetbol", "Antes perdía mucho tiempo buscando ejercicios. Ahora con Multideporte Pro tengo más de 1.000 entrenamientos listos y mis jugadores mejoraron la técnica en pocas semanas."],
  ["Valentina Ríos", "Jugadora de vóley", "Los ejercicios están muy bien explicados y se notan resultados rápido. Subí mi nivel de ataque y recepción en menos de un mes."],
  ["Andrés López", "Entrenador de fútbol", "Los más de 2.000 ejercicios de fútbol de campo son una joya. Organizo sesiones completas en minutos y el equipo se ve mucho más intenso."],
  ["Mateo Vargas", "Jugador de futsal", "Encontré ejercicios específicos de pivote, defensa y finalización que no veía en ningún lado. Mi rendimiento en partidos cambió bastante."],
  ["Lucía Fernández", "Jugadora de básquet", "Me encanta poder entrenar sola con los videos. Mejoré mi tiro libre y mi juego de pies sin necesitar un entrenador todos los días."],
  ["Diego Ramírez", "Entrenador de vóley", "La calidad de los entrenamientos es profesional. Mis equipos de categoría juvenil mejoraron el bloqueo y la recepción de forma notable."],
  ["Sofía Herrera", "Jugadora de fútbol", "El paquete completo vale totalmente la pena. Además del fútbol, el guía nutricional me ayudó a tener más energía en los entrenamientos."],
  ["Javier Morales", "Entrenador de futsal", "Los ejercicios de futsal son muy específicos y fáciles de aplicar. Mis jugadores mejoraron la toma de decisiones bajo presión."],
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plataforma Multideporte Pro · Entrenamientos Profesionales" },
      { name: "description", content: "Básquetbol, vóley, futsal y fútbol de campo en una sola plataforma." },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => setModalOpen(true);

  return (
    <main className="min-h-screen bg-white pb-20 text-gray-950">
      <div className="sticky top-0 z-50 bg-[#00A86B] px-3 py-3 text-center text-xs font-black uppercase tracking-wide text-white sm:text-sm">
        🔥 DESCUENTO EXCLUSIVO SOLO HOY · ÚLTIMAS PLAZAS DISPONIBLES
      </div>

      <section className="px-5 pb-14 pt-10 sm:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex rounded-full bg-[#FFCC00] px-4 py-2 text-xs font-black uppercase sm:text-sm">Plataforma Multideporte Pro</div>
          <h1 className="mt-6 text-4xl font-black uppercase leading-[0.96] sm:text-5xl md:text-6xl">
            DOMINA <span className="bg-[#FFCC00] px-1">4 DEPORTES</span> CON <span className="bg-[#FFCC00] px-1">+5.000</span> ENTRENAMIENTOS PROFESIONALES LISTOS PARA APLICAR HOY
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Básquetbol + Vóley + Futsal + Fútbol de Campo + Guía Nutricional de Atletas Profesionales + 3 Bonos exclusivos. Todo en una sola plataforma.
          </p>
          <div className="mx-auto mt-5 inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700">Actualizaciones automáticas · Tu biblioteca crece contigo</div>

          <div className="mx-auto mt-10 max-w-md">
            <h2 className="mb-4 text-xl font-black uppercase">Mira por dentro la plataforma que está transformando jugadores y entrenadores</h2>
            <video src="/video.mp4" controls playsInline className="aspect-[9/16] w-full rounded-2xl border-4 border-gray-900 bg-black object-cover" />
          </div>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CTA onClick={showModal}>QUIERO ACCESO COMPLETO AHORA</CTA>
            <span className="text-xs font-medium text-gray-500">Pago 100% seguro · Acceso inmediato por email</span>
          </div>
        </div>
      </section>

      <section className="border-y bg-gray-950 px-5 py-5 text-center text-white">
        <div className="mx-auto max-w-5xl text-sm font-black uppercase"><span className="mr-2 inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" /> Oferta activa · Últimas plazas del cupo de hoy</div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black uppercase sm:text-4xl">LO QUE VAS A RECIBIR</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">Todo lo que necesitas para entrenar mejor, organizado dentro de <span className="bg-[#FFCC00] px-1 font-black">Plataforma Multideporte Pro</span>.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sports.map(([emoji, name, count]) => <div key={name} className="rounded-2xl border bg-white p-6 shadow-lg"><div className="text-4xl">{emoji}</div><h3 className="mt-4 text-xl font-black">{name}</h3><p className="mt-1 font-bold text-green-600">{count}</p></div>)}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#FFCC00] p-6 shadow-lg"><h3 className="text-xl font-black">🥗 Guía Nutricional Completa</h3><p className="mt-2 font-bold">+100 planes de alimentación</p></div>
            <div className="rounded-2xl bg-[#00A86B] p-6 text-white shadow-lg"><h3 className="text-xl font-black">🎁 3 Bonos Exclusivos</h3><p className="mt-2 font-bold">Incluidos con tu acceso completo</p></div>
          </div>
          <div className="mt-8 text-center"><CTA onClick={showModal}>QUIERO TODO AHORA</CTA></div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black uppercase sm:text-4xl">4 deportes. Una sola plataforma. Resultados reales.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {sports.map(([emoji, name, count, benefits]) => <div key={name} className="rounded-2xl bg-white p-6 shadow-lg"><div className="flex items-center gap-3"><span className="text-3xl">{emoji}</span><div><h3 className="text-xl font-black">{name}</h3><p className="font-bold text-green-600">{count}</p></div></div><ul className="mt-5 space-y-2 text-sm font-semibold">{benefits.map((b) => <li key={b} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-[#00A86B]" />{b}</li>)}</ul></div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gray-950 p-8 text-white sm:p-12">
          <h2 className="text-3xl font-black uppercase sm:text-4xl">La misma nutrición que usan atletas profesionales… <span className="bg-[#FFCC00] px-1 text-black">ahora en tus manos</span></h2>
          <p className="mt-5 text-gray-300">+100 planes de alimentación pensados para apoyar tus objetivos de entrenamiento y ayudarte a organizar mejor tu rutina.</p>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black uppercase sm:text-4xl">Empieza en 3 pasos</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{[["01", "Accedes de inmediato"], ["02", "Eliges deporte y objetivo"], ["03", "Aplicas y ves resultados"]].map(([n, t]) => <div key={n} className="rounded-2xl bg-white p-7 text-center shadow-lg"><div className="text-4xl font-black text-[#00A86B]">{n}</div><h3 className="mt-3 font-black uppercase">{t}</h3></div>)}</div>
          <div className="mt-8 text-center"><CTA onClick={showModal}>EMPEZAR AHORA</CTA></div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black uppercase sm:text-4xl">Lo que dicen nuestros usuarios</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">{testimonials.map(([name, role, text]) => <article key={name} className="rounded-2xl border bg-white p-6 shadow-lg"><div className="mb-4 flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-[#FFCC00] text-[#FFCC00]" />)}</div><p className="text-sm leading-relaxed text-gray-700">“{text}”</p><div className="mt-5 font-black">{name}</div><div className="text-xs text-gray-500">{role}</div></article>)}</div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black uppercase sm:text-4xl">3 Bonos exclusivos que recibes <span className="bg-[#FFCC00] px-1">HOY</span></h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{[["01", "Guía de Planificación Semanal", "$27"], ["02", "Manual de Prevención de Lesiones", "$34"], ["03", "Comunidad + Futuros Deportes", "$49"]].map(([n, t, v]) => <div key={n} className="relative rounded-2xl bg-white p-6 shadow-lg"><span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-black text-white">Incluido</span><div className="text-3xl font-black text-green-600">{n}</div><h3 className="mt-5 pr-14 font-black">{t}</h3><p className="mt-3 font-bold text-gray-500">Valor {v} → <span className="text-green-600">GRATIS HOY</span></p></div>)}</div>
        </div>
      </section>

      <section id="paquetes" className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black uppercase sm:text-4xl">Elige tu acceso y empieza a dominar hoy</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border-2 p-7 shadow-lg"><h3 className="text-2xl font-black">Solo Fútbol de Campo</h3><p className="mt-2 font-bold text-gray-600">+2.000 ejercicios</p><div className="my-6 text-4xl font-black">$5,50 <span className="text-base">USD</span></div><button onClick={showModal} className="w-full rounded-2xl border-2 border-gray-900 px-5 py-4 font-black uppercase">Quiero solo Fútbol</button></div>
            <div className="relative rounded-3xl border-4 border-[#00A86B] p-7 shadow-xl ring-4 ring-green-50"><span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#00A86B] px-4 py-2 text-xs font-black text-white">RECOMENDADO · MEJOR VALOR</span><h3 className="text-2xl font-black">Todo incluido</h3><div className="mt-3 text-gray-400 line-through">$47</div><div className="text-4xl font-black">$10 <span className="text-base">USD</span></div><ul className="my-6 space-y-2 text-sm font-semibold">{["+1.000 Básquetbol", "+1.000 Vóley", "+1.000 Futsal", "+2.000 Fútbol", "Guía Nutricional", "3 Bonos", "Acceso vitalicio"].map((x) => <li key={x} className="flex gap-2"><Check className="h-5 w-5 text-green-600" />{x}</li>)}</ul><button onClick={showModal} className="w-full rounded-2xl bg-[#00A86B] px-5 py-4 font-black uppercase text-white">QUIERO EL ACCESO COMPLETO AHORA</button></div>
          </div>
        </div>
      </section>

      <section className="bg-[#00A86B] px-5 py-14 text-center text-white"><div className="mx-auto max-w-3xl"><ShieldCheck className="mx-auto h-14 w-14" /><h2 className="mt-4 text-3xl font-black uppercase">Prueba sin ningún riesgo durante 7 días</h2><p className="mt-4 text-lg">Si decides que no es para ti, solicita tu reembolso dentro del plazo de garantía. Tu compra queda protegida.</p></div></section>

      <section className="px-5 py-16 sm:py-20"><div className="mx-auto max-w-4xl"><h2 className="text-center text-3xl font-black uppercase sm:text-4xl">Preguntas frecuentes</h2><div className="mt-8 space-y-3">{[["¿Cómo recibo el acceso?", "Después de completar la compra, recibirás las instrucciones de acceso por email."], ["¿Puedo usar la plataforma desde el celular?", "Sí. La experiencia está pensada para móvil, tablet y computadora."], ["¿Los entrenamientos son solo para profesionales?", "No. Puedes elegir ejercicios y sesiones según tu nivel, objetivo y deporte."], ["¿El acceso es de por vida?", "El paquete completo está planteado como acceso vitalicio al contenido incluido."], ["¿Qué incluye la guía nutricional?", "+100 planes y materiales de organización nutricional. Adapta cualquier orientación a tus necesidades con un profesional cualificado."], ["¿Existe garantía?", "Sí. El acceso completo cuenta con una garantía de 7 días, según las condiciones de compra."]].map(([q, a]) => <details key={q} className="group rounded-2xl border bg-white p-5 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between font-black">{q}<ChevronDown className="h-5 w-5 transition group-open:rotate-180" /></summary><p className="mt-3 pr-6 text-sm leading-relaxed text-gray-600">{a}</p></details>)}</div></div></section>

      <footer className="border-t bg-gray-950 px-5 py-10 text-center text-xs leading-relaxed text-gray-400">Los resultados pueden variar de persona a persona. El contenido de entrenamiento es educativo y no sustituye la evaluación de un profesional cualificado. La información nutricional no constituye consejo médico ni nutricional individualizado. © 2026 Plataforma Multideporte Pro. Todos los derechos reservados.</footer>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden"><button onClick={showModal} className="w-full rounded-xl bg-[#00A86B] px-4 py-3 text-sm font-black uppercase text-white">QUIERO ACCESO COMPLETO — $10</button></div>
      <ScarcityModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
