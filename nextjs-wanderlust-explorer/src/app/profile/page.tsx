"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "../../components/Header";
import { useFavorites } from "@/context/FavoritesContext";

// Página de perfil simulado con resumen conectado al estado de favoritos.
export default function ProfilePage() {
  const { favoriteCount } = useFavorites();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              {/* Avatar simulado del usuario */}
              <div className="flex size-24 items-center justify-center rounded-full bg-orange-100 text-3xl font-black text-orange-600">
                SP
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-orange-500">
                  Traveler profile
                </p>

                <h1 className="mt-2 text-4xl font-black tracking-tight">
                  Santiago Peinador
                </h1>

                <p className="mt-3 max-w-xl text-slate-600">
                  Curious traveler interested in hidden routes, local food,
                  cultural walks and nature escapes.
                </p>
              </div>
            </div>

            {/* Contador de favoritos conectado al provider global */}
            <div className="rounded-3xl bg-slate-950 px-8 py-6 text-white">
              <p className="text-5xl font-black">{favoriteCount}</p>
              <p className="mt-1 text-sm font-semibold text-slate-300">
                Favorites saved
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-500">
              Travel interests
            </p>

            {/* Lista estática de intereses del perfil simulado */}
            <div className="mt-5 flex flex-wrap gap-3">
              {["Adventure", "Food", "Culture", "Nature"].map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600"
                >
                  {interest}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-500">
              Preferred destinations
            </p>

            {/* Destinos simulados para dar más realismo al perfil */}
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>Split, Croatia</li>
              <li>Bangkok, Thailand</li>
              <li>Kyoto, Japan</li>
              <li>Ubud, Indonesia</li>
            </ul>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-500">
              Saved summary
            </p>

            <h2 className="mt-4 text-3xl font-black">
              {favoriteCount} experiences
            </h2>

            <p className="mt-3 text-slate-600">
              Favorites are currently stored in React state and reset when the
              page is refreshed.
            </p>

            <Link
              href="/favorites"
              className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-950"
            >
              View favorites
            </Link>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}