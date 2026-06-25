"use client";

import { FormEvent, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Barra de búsqueda global que navega al explorador con query params.
export function HeaderSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  // Prellenamos el input si la URL ya tiene un parámetro search.
  useEffect(() => {
    setSearchTerm(searchParams.get("search") ?? "");
  }, [searchParams]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params =
      pathname === "/experiences"
        ? new URLSearchParams(searchParams.toString())
        : new URLSearchParams();

    // Guardamos o eliminamos el término de búsqueda en la URL.
    if (searchTerm.trim()) {
      params.set("search", searchTerm.trim());
    } else {
      params.delete("search");
    }

    const queryString = params.toString();
    router.push(`/experiences${queryString ? `?${queryString}` : ""}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden min-w-[260px] items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-2 lg:flex"
    >
      {/* Input principal para buscar por título o ciudad */}
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search title or city..."
        className="w-full bg-transparent px-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
      />

      <button
        type="submit"
        className="rounded-full bg-slate-950 px-4 py-2 text-xs font-bold text-white transition hover:bg-orange-500"
      >
        Search
      </button>
    </form>
  );
}