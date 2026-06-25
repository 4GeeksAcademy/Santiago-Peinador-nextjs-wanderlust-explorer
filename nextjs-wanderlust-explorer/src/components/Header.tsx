import Link from "next/link";
import { Suspense } from "react";
import { HeaderSearch } from "@/components/HeaderSearch";

// Header principal con logo, navegación y búsqueda global.
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4">
        {/* Logo navegable hacia la Home */}
        <Link
          href="/"
          className="shrink-0 text-xl font-bold tracking-tight text-slate-950"
        >
          Wanderlust<span className="text-orange-500">Explorer</span>
        </Link>

        {/* Buscador global conectado con los query params del explorador */}
        <Suspense
          fallback={
            <div className="hidden h-11 min-w-[260px] rounded-full bg-slate-100 lg:block" />
          }
        >
          <HeaderSearch />
        </Suspense>

        {/* Navegación principal del proyecto */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/" className="transition hover:text-slate-950">
            Home
          </Link>

          <Link href="/experiences" className="transition hover:text-slate-950">
            Experiences
          </Link>

          <Link href="/favorites" className="transition hover:text-slate-950">
            Favorites
          </Link>

          <Link href="/profile" className="transition hover:text-slate-950">
            Profile
          </Link>
        </nav>

        {/* CTA rápido hacia el explorador */}
        <Link
          href="/experiences"
          className="hidden rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-500 sm:inline-flex"
        >
          Explore
        </Link>
      </div>
    </header>
  );
}