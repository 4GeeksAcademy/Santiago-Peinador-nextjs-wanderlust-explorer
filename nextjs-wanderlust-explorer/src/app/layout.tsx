import type { Metadata } from "next";
import "./globals.css";
import { FavoritesProvider } from "@/context/FavoritesContext";

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Discover and save unique travel experiences around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Provider global para compartir favoritos entre páginas sin librerías externas. */}
        <FavoritesProvider>{children}</FavoritesProvider>
      </body>
    </html>
  );
}