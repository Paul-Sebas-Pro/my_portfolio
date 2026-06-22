// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://paul-sebas.fr",
  output: "static",
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    routing: {
      prefixDefaultLocale: true
    }
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      }
    },
  },
});
