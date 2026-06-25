import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "../../components/Header";
import { ExperienceExplorer } from "@/app/experiences/ExperienceExplorer";

// Página del explorador con filtros basados en query params.
export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      {/* Suspense permite usar useSearchParams dentro del componente cliente. */}
      <Suspense
        fallback={
          <section className="mx-auto max-w-7xl px-6 py-24">
            <p className="text-lg font-bold text-slate-600">
              Loading experiences...
            </p>
          </section>
        }
      >
        <ExperienceExplorer />
      </Suspense>

      <Footer />
    </main>
  );
}