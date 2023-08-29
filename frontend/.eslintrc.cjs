module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "@feature-sliced/eslint-config/rules/import-order",
    "@feature-sliced/eslint-config/rules/layers-slices",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/no-internal-modules": 0,
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "*.{css,scss}",
            group: "index",
            patternOptions: {
              matchBase: true,
            },
            position: "after",
          },
          {
            pattern: "@/**",
            group: "external",
            position: "after",
          },
        ],
      },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
