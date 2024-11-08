// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://treysdevshed.com",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
        autoInstall: true,
      }),
    ],
  },
});
