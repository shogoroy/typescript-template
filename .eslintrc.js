module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  env: { jest: true },
  plugins: ["@typescript-eslint", "prettier", "simple-import-sort"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json"
  },
  "rules": {
    "simple-import-sort/sort": "error"
  }
};
