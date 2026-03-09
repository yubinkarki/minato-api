import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import tsParser from "@typescript-eslint/parser";

// this needs to go first in the config function
const ignoredDir = { ignores: ["**/build/*", "**/.github/*", "**/.idea/*", "**/postgres-data/*", "**/redis-data/*"] };

const options = {
  files: ["**/*.ts"],
  languageOptions: {
    parser: tsParser,
    globals: { ...globals.node },
    parserOptions: { ecmaVersion: "latest", sourceType: "module", project: "./tsconfig.json" },
  },
  rules: {
    semi: ["warn", "always"],
    quotes: ["warn", "double"],
    "eol-last": ["error", "always"],
    "no-console": ["warn", { allow: ["warn", "error"] }],

    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/typedef": [
      "error",
      {
        parameter: true,
        variableDeclaration: true,
        arrayDestructuring: false,
        propertyDeclaration: true,
        objectDestructuring: false,
        memberVariableDeclaration: true,
        variableDeclarationIgnoreFunction: true,
      },
    ],
  },
};

export default defineConfig([ignoredDir, tseslint.configs.recommended, options]);
