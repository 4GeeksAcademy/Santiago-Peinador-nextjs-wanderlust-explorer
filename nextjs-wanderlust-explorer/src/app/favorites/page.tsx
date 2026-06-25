"use client";

import Link from "next/link";
import { experiences } from "@/data/experience";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Footer } from "@/components/Footer";
import { Header } from "../../components/Header";
import { useFavorites } from "@/context/FavoritesContext";

// Página de favoritos que muestra solo las experiencias guardadas por el usuario.
export default function FavoritesPage() {
  const { favoriteIds, favoriteCount } = useFavorites();

  // Filtramos el dataset local usando los IDs guardados como favoritos.
  const favoriteExperiences = experiences.filter((experience) =>
    favoriteIds.includes(experience.id),
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <Link
            href="/experiences"
            className="text-sm font-bold text-orange-500 transition hover:text-orange-600"
          >
            ← Back to experiences
          </Link>

          <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-orange-500">
                Saved experiences
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
                Your favorites
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Review the experiences you marked with the heart icon during
                this session.
              </p>
            </div>

            {/* Contador conectado al estado global de favoritos */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5">
              <p className="text-4xl font-black text-slate-950">
                {favoriteCount}
              </p>
              <p className="text-sm font-semibold text-slate-500">
                Favorites saved
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        {favoriteExperiences.length > 0 ? (
          // Renderizamos únicamente las tarjetas marcadas como favoritas.
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        ) : (
          // Estado vacío cuando todavía no hay favoritos guardados.
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-12 text-center">
            <p className="text-5xl">♡</p>

            <h2 className="mt-5 text-3xl font-black text-slate-950">
              No favorites yet
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Go to the explorer and click the heart icon on any experience to
              save it here.
            </p>

            <Link
              href="/experiences"
              className="mt-8 inline-flex rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-slate-950"
            >
              Explore experiences
            </Link>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}