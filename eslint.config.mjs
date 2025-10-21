import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "react/no-children-prop": "error",
      "react/no-unescaped-entities": "error",
      "@next/next/no-img-element": "off",
      "react-hooks/rules-of-hooks": "off",
      "jsx-a11y/alt-text": "error",
      "@next/next/no-async-client-component": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
