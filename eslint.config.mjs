
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // 1️⃣ Bring in Next.js defaults
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 2️⃣ Tailor or turn off rules
  {
    rules: {
      // Stop complaining when you use a plain <img>
      "@next/next/no-img-element": "off",

      // (optional) anything else you want to tweak:
      // "react/jsx-no-leaked-render": "warn",
      // "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },

  // 3️⃣ (optional) File‑specific overrides
  {
    files: ["scripts/*.{js,ts}"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];
