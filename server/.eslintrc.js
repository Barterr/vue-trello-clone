module.exports = {
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8
  },
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "trailingComma": "all",
      "semi": false
    }],
  }
};
