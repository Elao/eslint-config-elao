"use strict"

module.exports = {
  extends: [
    "airbnb",
  ],
  rules: {
    "max-len": [
      "error",
      120,
      4,
      {
        "ignoreUrls": true,
        "ignoreStrings": true,
      },
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "none",
      },
    ],
    "no-console": [
      "warn",
      {
        "allow": [
          "info",
          "error",
        ],
      },
    ],
    "class-methods-use-this": "off",
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off",
    "default-case": "off",
  },
}
