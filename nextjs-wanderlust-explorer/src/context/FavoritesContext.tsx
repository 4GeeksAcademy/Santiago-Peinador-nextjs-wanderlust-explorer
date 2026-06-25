"use client";

import { createContext, useContext, useState } from "react";

type FavoritesContextValue = {
  favoriteIds: string[];
  favoriteCount: number;
  toggleFavorite: (experienceId: string) => void;
  isFavorite: (experienceId: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

// Provider global que guarda los favoritos usando useState nativo de React.
export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  // Activa o desactiva una experiencia dentro de la lista de favoritos.
  function toggleFavorite(experienceId: string) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(experienceId)
        ? currentIds.filter((id) => id !== experienceId)
        : [...currentIds, experienceId],
    );
  }

  // Comprueba si una experiencia concreta ya está guardada como favorita.
  function isFavorite(experienceId: string) {
    return favoriteIds.includes(experienceId);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        favoriteCount: favoriteIds.length,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// Custom hook para acceder al estado compartido de favoritos.
export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }

  return context;
}