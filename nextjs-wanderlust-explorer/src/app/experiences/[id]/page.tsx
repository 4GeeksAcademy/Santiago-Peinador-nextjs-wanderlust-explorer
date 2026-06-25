import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { Footer } from "@/components/Footer";
import { Header } from "../../../components/Header";
type ExperienceDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// Generamos rutas estáticas para cada experiencia del dataset local.
export function generateStaticParams() {
  return experiences.map((experience) => ({
    id: experience.id,
  }));
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { id } = await params;

  // Buscamos la experiencia seleccionada usando el id de la URL.
  const experience = experiences.find((item) => item.id === id);

  // Mostramos una pantalla de fallback si el id no existe en el dataset.
  if (!experience) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-950">
        <Header />

        <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center">
          <p className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
            Experience not found
          </p>

          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
            We could not find this experience.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            The experience may have been removed or the link may be incorrect.
            You can go back to the explorer and continue browsing.
          </p>

          <Link
            href="/experiences"
            className="mt-8 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-500"
          >
            Back to experiences
          </Link>
        </section>

        <Footer />
      </main>
    );
  }

  // Seleccionamos experiencias relacionadas de la misma categoría.
  const relatedExperiences = experiences
    .filter(
      (item) =>
        item.category === experience.category && item.id !== experience.id,
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      {/* Hero visual con imagen grande y datos principales de la experiencia */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link
            href="/experiences"
            className="text-sm font-bold text-orange-500 transition hover:text-orange-600"
          >
            ← Back to experiences
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src={experience.imageUrl}
                alt={experience.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />

              {/* Badge superpuesto con la categoría de la experiencia */}
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-slate-950 shadow-sm">
                {experience.category}
              </span>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-orange-500">
                {experience.destination}
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                {experience.title}
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {experience.description}
              </p>

              {/* Métricas principales de la experiencia seleccionada */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-500">Rating</p>
                  <p className="mt-2 text-2xl font-black">
                    ★ {experience.rating}
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-500">Price</p>
                  <p className="mt-2 text-2xl font-black">
                    ${experience.price}
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-500">
                    Duration
                  </p>
                  <p className="mt-2 text-2xl font-black">
                    {experience.duration}
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-500">
                    Category
                  </p>
                  <p className="mt-2 text-2xl font-black">
                    {experience.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido completo de la experiencia */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-500">
              Experience overview
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              What you can expect
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              This {experience.category.toLowerCase()} experience in{" "}
              {experience.destination} is designed for travelers looking for a
              memorable, easy-to-book activity with a strong local feeling.
            </p>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-500">
              Highlights
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Why travelers choose this
            </h2>

            {/* Lista de beneficios generados desde los datos disponibles */}
            <ul className="mt-6 grid gap-4 text-slate-600 md:grid-cols-2">
              <li className="rounded-2xl bg-slate-50 p-5">
                Curated experience in {experience.destination}
              </li>
              <li className="rounded-2xl bg-slate-50 p-5">
                Rated {experience.rating} by previous travelers
              </li>
              <li className="rounded-2xl bg-slate-50 p-5">
                Clear duration of {experience.duration}
              </li>
              <li className="rounded-2xl bg-slate-50 p-5">
                Ideal for {experience.category.toLowerCase()} lovers
              </li>
            </ul>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-500">
              Related experiences
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              More in {experience.category}
            </h2>

            {/* Enlaces rápidos hacia experiencias relacionadas */}
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {relatedExperiences.map((item) => (
                <Link
                  key={item.id}
                  href={`/experiences/${item.id}`}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50"
                >
                  <p className="text-sm font-bold text-orange-500">
                    {item.destination}
                  </p>

                  <h3 className="mt-2 line-clamp-2 font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-slate-500">
                    ★ {item.rating} · ${item.price}
                  </p>
                </Link>
              ))}
            </div>
          </article>
        </div>

        {/* Panel lateral de reserva simulado para dar sensación de producto real */}
        <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 lg:sticky lg:top-24">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-500">
            Booking preview
          </p>

          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-500">From</p>
              <p className="text-4xl font-black text-slate-950">
                ${experience.price}
              </p>
            </div>

            <p className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
              ★ {experience.rating}
            </p>
          </div>

          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <p className="flex justify-between rounded-2xl bg-slate-50 p-4">
              <span>Destination</span>
              <strong className="text-slate-950">
                {experience.destination}
              </strong>
            </p>

            <p className="flex justify-between rounded-2xl bg-slate-50 p-4">
              <span>Duration</span>
              <strong className="text-slate-950">
                {experience.duration}
              </strong>
            </p>

            <p className="flex justify-between rounded-2xl bg-slate-50 p-4">
              <span>Category</span>
              <strong className="text-slate-950">
                {experience.category}
              </strong>
            </p>
          </div>

          <button className="mt-6 w-full rounded-full bg-orange-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-slate-950">
            Save for later
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-slate-400">
            This is a frontend MVP preview. Booking persistence will be added in
            a later stage.
          </p>
        </aside>
      </section>

      <Footer />
    </main>
  );
}