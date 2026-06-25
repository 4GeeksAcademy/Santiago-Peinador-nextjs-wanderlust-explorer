"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ExperienceFiltersProps = {
  categories: string[];
  destinations: string[];
  resultsCount: number;
  totalCount: number;
};

// Barra de filtros del explorador conectada con query params.
export function ExperienceFilters({
  categories,
  destinations,
  resultsCount,
  totalCount,
}: ExperienceFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [destination, setDestination] = useState("");

  // Prellenamos búsqueda y filtros si la URL ya trae query params.
  useEffect(() => {
    setSearchTerm(searchParams.get("search") ?? "");
    setCategory(searchParams.get("category") ?? "");
    setDestination(searchParams.get("destination") ?? "");
  }, [searchParams]);

  function updateQueryParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    // Actualizamos o eliminamos el parámetro activo.
    if (value.trim()) {
      params.set(key, value.trim());
    } else {
      params.delete(key);
    }

    const queryString = params.toString();
    router.replace(`${pathname}${queryString ? `?${queryString}` : ""}`, {
      scroll: false,
    });
  }

  function clearFilters() {
    setSearchTerm("");
    setCategory("");
    setDestination("");

    // Limpiamos todos los filtros activos de la URL.
    router.replace(pathname, { scroll: false });
  }

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_auto]">
        {/* Input de búsqueda por título o ciudad */}
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            updateQueryParam("search", event.target.value);
          }}
          placeholder="Search by title or city..."
          className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white"
        />

        {/* Dropdown de categorías disponibles */}
        <select
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
            updateQueryParam("category", event.target.value);
          }}
          className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold outline-none transition focus:border-orange-400 focus:bg-white"
        >
          <option value="">All categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Dropdown de destinos disponibles por ciudad o país */}
        <select
          value={destination}
          onChange={(event) => {
            setDestination(event.target.value);
            updateQueryParam("destination", event.target.value);
          }}
          className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold outline-none transition focus:border-orange-400 focus:bg-white"
        >
          <option value="">All destinations</option>
          {destinations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Botón para limpiar búsqueda y filtros */}
        <button
          type="button"
          onClick={clearFilters}
          className="rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
        >
          Clear
        </button>
      </div>

      {/* Resumen del número de resultados visibles */}
      <p className="mt-4 text-sm font-semibold text-slate-500">
        Showing {resultsCount} of {totalCount} experiences
      </p>
    </section>
  );
}