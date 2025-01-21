import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintJs from "@eslint/js";
import eslintTs from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import esLintImport from "eslint-plugin-import";

export default eslintTs.config(
  { ignores: ["dist", "node_modules"] },
  {
    extends: [eslintJs.configs.recommended, ...eslintTs.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.app.json", "tsconfig.node.json"],
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier,
      import: esLintImport,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      "no-console": ["warn", { allow: ["error", "warn", "info"] }],
      "prefer-const": "warn",
      "prettier/prettier": "error",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: true,
        },
      ],
      "import/no-unresolved": "error",
      "import/no-named-as-default-member": "off",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", ["sibling", "parent"], "index", "unknown"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
);
