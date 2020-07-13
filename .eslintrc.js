const prodErrorOthersWarn =
  process.env.NODE_ENV === "production" ? "error" : "warn";

module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "react-app",
  ],
  rules: {
    "react/prop-types": "off", // Not working well with TS
    "react/display-name": "off", // Not working well with Arrow functions
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": [
      prodErrorOthersWarn,
      { "ts-ignore": "allow-with-description" },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "jsx-quotes": ["error", "prefer-double"],
    "no-unused-vars": prodErrorOthersWarn,
    "no-debugger": prodErrorOthersWarn,
    "no-console": prodErrorOthersWarn,
    "react/jsx-handler-names": "warn",
    "prefer-const": ["warn"],
  },
};
