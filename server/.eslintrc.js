module.exports = {
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8
  },
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    // "comma-dangle": ["error", "always-multiline"],
  }
};
