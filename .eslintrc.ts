module.exports = {
  extends: ["react-app", "eslint:recommended", "prettier"],
  rules: {
    "no-var": "error",
    "no-multiple-empty-lines": "error",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    eqeqeq: "error",
    "dot-notation": "error",
    "no-unused-vars": "error",
  },
};
