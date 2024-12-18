import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
export default [
  // add more generic rule sets here, such as:
  js.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-strict"],
  eslintConfigPrettier,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
