# Santiago-Peinador-nextjs-wanderlust-explorer

# Wanderlust Explorer

Wanderlust Explorer is a frontend MVP built with **Next.js**, **React**, **TypeScript** and **Tailwind CSS**. The project simulates a travel-tech platform where users can discover, search, filter, view details and save unique travel experiences around the world.

The app was created from scratch using the official Next.js CLI and uses the App Router.

---

## Project Overview

Wanderlust Labs is a fictional travel-tech startup focused on helping users explore unique experiences such as food tours, sailing routes, cultural walks, wellness retreats and nature escapes.

This MVP uses a local TypeScript dataset with 100 travel experiences. No backend or external API is required.

---

## Tech Stack

* Next.js
* React
* TypeScript
* App Router
* Tailwind CSS
* ESLint
* Local TypeScript dataset
* Native React state

The project does not use external state management libraries such as Redux or Zustand.

---

## Main Routes

| Route               | Description                                                                         |
| ------------------- | ----------------------------------------------------------------------------------- |
| `/`                 | Home page with hero section, featured experiences, top-rated experiences and offers |
| `/experiences`      | Explorer page with all experience cards, search and filters                         |
| `/experiences/[id]` | Dynamic detail page for each experience                                             |
| `/favorites`        | Page showing the experiences marked as favorites                                    |
| `/profile`          | Simulated user profile with a favorites counter                                     |

Navigation is handled with Next.js client-side routing.

---

## Main Features

### Home Page

The Home page includes:

* Header with navigation
* Global search bar
* Hero section
* CTA button to `/experiences`
* Top-rated experiences
* Offer experiences
* Footer

---

### Experiences Explorer

The `/experiences` page displays the full dataset of 100 experiences in a responsive card grid.

Each card includes:

* Image
* Title
* Destination
* Category
* Rating
* Price
* Duration
* Favorite button
* Link to the detail page

---

### Search and Filters

The explorer supports:

* Search by experience title
* Search by city
* Category filter
* Destination filter

The search uses a case-insensitive regex comparison.

Search and filters are stored in the URL as query parameters:

```txt
/experiences?search=sailing&category=Adventure&destination=Croatia
```

Supported query parameters:

```txt
search
category
destination
```

When the page loads with existing query parameters, the inputs are prefilled and the results are already filtered.

---

### Experience Detail Page

Each experience has a dynamic route:

```txt
/experiences/[id]
```

The detail page displays:

* Main image
* Title
* Description
* Destination
* Category
* Price
* Rating
* Duration
* Overview section
* Related experiences
* Booking preview card

---

### Favorites

Users can save or remove experiences by clicking the heart button on each card.

Favorites are stored using native React `useState` inside a top-level `FavoritesProvider`.

The shared favorites logic is accessed through the custom hook:

```ts
useFavorites()
```

Favorites are not persisted after refresh, which is expected for this MVP.

---

### Profile

The `/profile` page contains a simulated user profile with:

* Avatar initials
* User name
* Travel interests
* Preferred destinations
* Favorites counter
* Link to the favorites page

---

## Custom Hooks

The project includes custom hooks to keep logic organized.

### `useFavorites`

Handles:

* Favorite IDs
* Favorite count
* Toggle favorite
* Check if an experience is already saved

### `useExperienceFilters`

Handles:

* Reading query parameters
* Filtering experiences
* Returning filtered results
* Returning available categories and destinations

---

## Project Structure

```txt
src
├── app
│   ├── experiences
│   │   ├── [id]
│   │   │   └── page.tsx
│   │   ├── ExperienceExplorer.tsx
│   │   └── page.tsx
│   ├── favorites
│   │   └── page.tsx
│   ├── profile
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ExperienceCard.tsx
│   ├── ExperienceFilters.tsx
│   ├── FavoriteButton.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeaderSearch.tsx
│   └── HomeExperienceCard.tsx
├── context
│   └── FavoritesContext.tsx
├── data
│   └── experience.ts
├── hooks
│   └── useExperienceFilters.ts
└── lib
    └── experienceFilters.ts
```

---

## Dataset

The local dataset is stored in:

```txt
src/data/experience.ts
```

Each experience includes:

```ts
type Experience = {
  id: string;
  title: string;
  description: string;
  category: ExperienceCategory;
  destination: string;
  price: number;
  rating: number;
  duration: string;
  imageUrl: string;
};
```

Available categories:

```txt
Adventure
Culture
Food
Wellness
Nature
```

---

## Design References

The visual design is inspired by real travel marketplace platforms:

* **GetYourGuide** — experience cards, ratings, prices and discovery layout
* **Viator** — search results, filters and structured listings
* **Klook** — modern travel-tech style and promotional sections

Reference images are stored inside the project:

```txt
ref-images
```

Codespaces path:

```txt
/workspaces/Santiago-Peinador-nextjs-wanderlust-explorer/nextjs-wanderlust-explorer/ref-images
```

---

## How to Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Useful Test Routes

```txt
/
```

```txt
/experiences
```

```txt
/experiences?search=sailing
```

```txt
/experiences?category=Adventure
```

```txt
/experiences?destination=Croatia
```

```txt
/experiences/exp-001
```

```txt
/favorites
```

```txt
/profile
```

---

## Evaluation Checklist

This project includes:

* At least five pages
* Client-side navigation
* Search with case-insensitive regex
* Category and destination filters
* Query parameters for active filters
* Prefilled inputs when loading with query parameters
* Favorites managed with native React state
* Custom hooks for favorites and filtering
* TypeScript types and interfaces
* Responsive UI
* Design references documented

---

## Project Status

MVP completed.
