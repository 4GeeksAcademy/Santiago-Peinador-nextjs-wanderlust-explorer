"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { experiences } from "@/data/experience";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ExperienceFilters } from "@/components/ExperienceFilters";
import {
  filterExperiences,
  getCategoryOptions,
  getDestinationOptions,
} from "@/lib/experienceFilters";

const categoryOptions = getCategoryOptions(experiences);
const destinationOptions = getDestinationOptions(experiences);

// Componente cliente que lee query params y filtra el dataset local.
export function ExperienceExplorer() {
  const searchParams = useSearchParams();

  // Leemos los filtros activos desde la URL.
  const activeFilters = {
    search: searchParams.get("search") ?? "",
    category: searchParams.get("category") ?? "",
    destination: searchParams.get("destination") ?? "",
  };

  const filteredExperiences = filterExperiences(experiences, activeFilters);

  return (
    <>
      {/* Cabecera visual de la página de exploración */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <Link
            href="/"
            className="text-sm font-bold text-orange-500 transition hover:text-orange-600"
          >
            ← Back to home
          </Link>

          <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-orange-500">
                Explore the world
              </p>

              <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Discover unique travel experiences.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Search by title or city, then combine category and destination
                filters. The active filters are stored in the URL.
              </p>
            </div>

            {/* Contador total de experiencias disponibles */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5">
              <p className="text-4xl font-black text-slate-950">
                {experiences.length}
              </p>
              <p className="text-sm font-semibold text-slate-500">
                Experiences available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zona de filtros y resultados */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <ExperienceFilters
          categories={categoryOptions}
          destinations={destinationOptions}
          resultsCount={filteredExperiences.length}
          totalCount={experiences.length}
        />

        <div className="mt-8">
          {filteredExperiences.length > 0 ? (
            // Renderizamos las tarjetas que coinciden con los filtros activos.
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredExperiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          ) : (
            // Estado vacío cuando no hay experiencias que coincidan.
            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-12 text-center">
              <p className="text-5xl">🔎</p>

              <h2 className="mt-5 text-3xl font-black text-slate-950">
                No experiences found
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-slate-600">
                Try a different title, city, category or destination to see more
                travel experiences.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}