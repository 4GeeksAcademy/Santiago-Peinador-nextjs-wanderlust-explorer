import type { Experience } from "@/data/experience";

export type ExperienceFilters = {
  search: string;
  category: string;
  destination: string;
};

// Escapamos caracteres especiales para que la regex no rompa con búsquedas del usuario.
function createSafeRegex(value: string) {
  const escapedValue = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(escapedValue, "i");
}

// Filtramos experiencias combinando búsqueda, categoría y destino.
export function filterExperiences(
  experiences: Experience[],
  filters: ExperienceFilters,
) {
  const searchTerm = filters.search.trim();
  const searchRegex = searchTerm ? createSafeRegex(searchTerm) : null;
  const selectedDestination = filters.destination.trim().toLowerCase();

  return experiences.filter((experience) => {
    const city = experience.destination.split(",")[0].trim();

    // La búsqueda compara el término contra título y ciudad usando regex case-insensitive.
    const matchesSearch = searchRegex
      ? searchRegex.test(experience.title) || searchRegex.test(city)
      : true;

    // La categoría funciona de forma independiente a la búsqueda.
    const matchesCategory = filters.category
      ? experience.category === filters.category
      : true;

    // El destino permite filtrar por ciudad o país dentro del campo destination.
    const matchesDestination = selectedDestination
      ? experience.destination.toLowerCase().includes(selectedDestination)
      : true;

    return matchesSearch && matchesCategory && matchesDestination;
  });
}

// Obtenemos categorías únicas desde el dataset local.
export function getCategoryOptions(experiences: Experience[]) {
  return Array.from(new Set(experiences.map((item) => item.category))).sort();
}

// Obtenemos opciones únicas de ciudad y país para el dropdown de destino.
export function getDestinationOptions(experiences: Experience[]) {
  const options = new Set<string>();

  experiences.forEach((experience) => {
    const [city, country] = experience.destination
      .split(",")
      .map((value) => value.trim());

    if (city) options.add(city);
    if (country) options.add(country);
  });

  return Array.from(options).sort();
}