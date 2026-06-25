import Link from "next/link";

// Footer simple para cerrar la página con navegación secundaria.
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        {/* Resumen corto de marca */}
        <div>
          <p className="text-lg font-bold">
            Wanderlust<span className="text-orange-400">Explorer</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
            Discover, compare and save unique travel experiences around the world.
          </p>
        </div>

        {/* Enlaces principales del MVP */}
        <div>
          <p className="font-semibold">Navigation</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            <Link href="/experiences" className="hover:text-white">
              Experiences
            </Link>
            <Link href="/favorites" className="hover:text-white">
              Favorites
            </Link>
            <Link href="/profile" className="hover:text-white">
              Profile
            </Link>
          </div>
        </div>

        {/* Mensaje de producto para reforzar el concepto */}
        <div>
          <p className="font-semibold">MVP Focus</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Built with Next.js, TypeScript, Tailwind CSS and native React state.
          </p>
        </div>
      </div>
    </footer>
  );
}