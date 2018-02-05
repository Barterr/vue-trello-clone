module.exports = {
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8
  },
  extends: ["eslint:recommended"],
  // plugins: [],
  rules: {
    // "prettier/prettier": "error",
    "comma-dangle": ["error", "always-multiline"],
    "semi": ["error", "never"]
  }
};
