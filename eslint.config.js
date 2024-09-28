import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] }, // Specify ignored directories
  {
    files: ["**/*.{js,jsx}"], // Specify the files to apply ESLint to
    languageOptions: {
      ecmaVersion: 2020, // Correct usage of ecmaVersion
      globals: globals.browser, // Reference globals properly
      parserOptions: {
        ecmaVersion: "latest", // Alternatively, you can set this directly
        ecmaFeatures: { jsx: true }, // Enable JSX support
        sourceType: "module", // Use ECMAScript modules
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the version of React
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules, // Extend recommended JS rules
      ...react.configs.recommended.rules, // Extend recommended React rules
      ...react.configs["jsx-runtime"].rules, // Extend JSX runtime rules
      ...reactHooks.configs.recommended.rules, // Extend React Hooks recommended rules
      "react/prop-types": "off", // Turn off prop-types rule
      "react/jsx-no-target-blank": "off", // Turn off target="_blank" warning
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }, // Allow constant export for React Refresh
      ],
    },
  },
];
