import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/data/experience";

type HomeExperienceCardProps = {
  experience: Experience;
  variant: "top-rated" | "offer";
};

// Tarjeta compacta reutilizable para mostrar experiencias destacadas en la Home.
export function HomeExperienceCard({ experience, variant }: HomeExperienceCardProps) {
  const originalPrice = Math.round(experience.price * 1.25);

  return (
    <Link
      href={`/experiences/${experience.id}`}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Imagen principal de la experiencia */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Badge visual según el tipo de sección */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-950 shadow-sm">
          {variant === "top-rated" ? `★ ${experience.rating}` : "Limited offer"}
        </span>
      </div>

      {/* Información resumida de la experiencia */}
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
          {experience.category}
        </p>

        <h3 className="mt-2 line-clamp-2 text-base font-bold text-slate-950">
          {experience.title}
        </h3>

        <p className="mt-2 text-sm text-slate-500">{experience.destination}</p>

        {/* Precio adaptado para mejor valoradas u ofertas */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            {variant === "offer" && (
              <p className="text-xs text-slate-400 line-through">${originalPrice}</p>
            )}
            <p className="text-lg font-bold text-slate-950">${experience.price}</p>
          </div>

          <span className="text-sm font-semibold text-slate-600">
            {experience.duration}
          </span>
        </div>
      </div>
    </Link>
  );
}