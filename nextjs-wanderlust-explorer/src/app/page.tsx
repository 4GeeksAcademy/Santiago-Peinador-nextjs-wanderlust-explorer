import Link from "next/link";
import { experiences } from "@/data/experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeExperienceCard } from "@/components/HomeExperienceCard";

// Seleccionamos las experiencias con mejor rating para destacar en la Home.
const topRatedExperiences = [...experiences]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

// Seleccionamos experiencias económicas para simular una sección de ofertas.
const offerExperiences = experiences
  .filter((experience) => experience.price <= 50)
  .slice(0, 3);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      {/* Hero principal dividido entre mensaje de marca y experiencias destacadas */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#fed7aa,transparent_35%),radial-gradient(circle_at_top_right,#bfdbfe,transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
          {/* Bloque de presentación y llamada a la acción */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Travel-tech MVP · Discover unique experiences
            </p>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
              Find your next unforgettable escape.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore curated food tours, sailing routes, cultural walks,
              wellness retreats and nature adventures around the world.
            </p>

            {/* Botones principales para navegar al explorador */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/experiences"
                className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-orange-500"
              >
                Explore experiences
              </Link>

              <Link
                href="/experiences?category=Adventure"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-bold text-slate-950 transition hover:border-orange-400 hover:text-orange-600"
              >
                View adventures
              </Link>
            </div>

            {/* Métricas estáticas para reforzar sensación de producto real */}
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-black">100</p>
                <p className="text-sm text-slate-500">Experiences</p>
              </div>

              <div>
                <p className="text-2xl font-black">5</p>
                <p className="text-sm text-slate-500">Categories</p>
              </div>

              <div>
                <p className="text-2xl font-black">4.9</p>
                <p className="text-sm text-slate-500">Top rating</p>
              </div>
            </div>
          </div>

          {/* Bloque visual dividido en mejor valoradas y ofertas */}
          <div className="grid gap-6 xl:grid-cols-2">
            <section className="rounded-[2rem] bg-white/80 p-5 shadow-xl shadow-slate-200/70 backdrop-blur">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-orange-500">
                    Top rated
                  </p>

                  <h2 className="text-2xl font-black text-slate-950">
                    Best experiences
                  </h2>
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  ★ 4.9
                </span>
              </div>

              {/* Renderizamos las mejores experiencias usando una tarjeta reutilizable */}
              <div className="grid gap-4">
                {topRatedExperiences.map((experience) => (
                  <HomeExperienceCard
                    key={experience.id}
                    experience={experience}
                    variant="top-rated"
                  />
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-xl shadow-slate-300/70">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-orange-300">Offers</p>
                  <h2 className="text-2xl font-black">Travel deals</h2>
                </div>

                <span className="rounded-full bg-orange-400 px-3 py-1 text-xs font-bold text-slate-950">
                  Save more
                </span>
              </div>

              {/* Renderizamos experiencias económicas como ofertas destacadas */}
              <div className="grid gap-4">
                {offerExperiences.map((experience) => (
                  <HomeExperienceCard
                    key={experience.id}
                    experience={experience}
                    variant="offer"
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Sección inferior para reforzar la navegación hacia el explorador */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-orange-500">
                Start exploring
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-950">
                Search by destination, category or experience title.
              </h2>

              <p className="mt-3 max-w-2xl text-slate-600">
                The explorer page supports URL-based search and filters so users
                can share prefiltered travel experience views.
              </p>
            </div>

            <Link
              href="/experiences"
              className="rounded-full bg-orange-500 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-slate-950"
            >
              Go to explorer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}