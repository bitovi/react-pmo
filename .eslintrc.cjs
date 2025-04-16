module.exports = {
  root: true,
  extends: "@bitovi/eslint-config/react",
  settings: {
    "import/internal-regex": "^@(shared|screens)/",
  },
  rules: {
    "jest/prefer-hooks-in-order": "off",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "no-type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
  },
}
