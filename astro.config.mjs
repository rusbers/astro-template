import { defineConfig } from "astro/config"

import sanity from "@sanity/astro"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      // TODO Issue: use the env file instead [https://docs.astro.build/en/guides/environment-variables/#in-the-astro-config-file]
      // TODO change the variables to the .env values
      projectId: "pr5qxvq9",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-01-28", // TODO insert the current date to access the latest version of the API
      studioBasePath: "/studio",
    }),
    react(),
  ],
})
