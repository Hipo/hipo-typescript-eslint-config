"use strict";

module.exports = {
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    // Core `no-shadow` rule reports incorrect errors for enum declarations
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {functions: false, classes: true}
    ]
  },
};
