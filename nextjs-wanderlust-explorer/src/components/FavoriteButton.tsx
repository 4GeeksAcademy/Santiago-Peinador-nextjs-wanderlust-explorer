"use client";

import { useFavorites } from "@/context/FavoritesContext";

type FavoriteButtonProps = {
  experienceId: string;
};

// Botón reutilizable para activar o desactivar una experiencia como favorita.
export function FavoriteButton({ experienceId }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(experienceId);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(experienceId)}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      className={`rounded-full px-3 py-2 text-lg shadow-sm transition ${
        active
          ? "bg-orange-500 text-white hover:bg-orange-600"
          : "bg-white/90 text-slate-700 hover:bg-orange-100 hover:text-orange-600"
      }`}
    >
      {/* Corazón visual que cambia según el estado de favorito. */}
      {active ? "♥" : "♡"}
    </button>
  );
}