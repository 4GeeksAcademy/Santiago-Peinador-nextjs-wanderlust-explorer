import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/data/experience";
import { FavoriteButton } from "@/components/FavoriteButton";

type ExperienceCardProps = {
  experience: Experience;
};

// Tarjeta principal para mostrar una experiencia dentro del explorador.
export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      {/* Imagen superior de la experiencia con enlace al detalle */}
      <div className="relative h-56 overflow-hidden">
        <Link href={`/experiences/${experience.id}`} className="block h-full">
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Badge de categoría sobre la imagen */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-950 shadow-sm">
          {experience.category}
        </span>

        {/* Botón funcional para guardar o quitar de favoritos */}
        <div className="absolute right-4 top-4">
          <FavoriteButton experienceId={experience.id} />
        </div>
      </div>

      {/* Contenido principal de la tarjeta */}
      <div className="flex min-h-60 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-orange-500">
              {experience.destination}
            </p>

            <Link href={`/experiences/${experience.id}`}>
              <h2 className="mt-2 line-clamp-2 text-lg font-black text-slate-950 transition hover:text-orange-500">
                {experience.title}
              </h2>
            </Link>
          </div>

          {/* Rating visible de cada experiencia */}
          <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">
            ★ {experience.rating}
          </span>
        </div>

        {/* Descripción resumida de la experiencia */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {experience.description}
        </p>

        {/* Información inferior de precio y duración */}
        <div className="mt-auto flex items-end justify-between pt-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              From
            </p>
            <p className="text-2xl font-black text-slate-950">
              ${experience.price}
            </p>
          </div>

          <p className="rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600">
            {experience.duration}
          </p>
        </div>
      </div>
    </article>
  );
}