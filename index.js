const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const colors = require("tailwindcss/colors");
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::after": {
              content: "none",
            },
            "code::before": {
              content: "none",
            },
            code: {
              backgroundColor: "#d8dee9",
              color: colors.coolGray[700],
              padding: "4px",
              borderRadius: rem(2),
            },
            blockquote: {
              quotes: "none",
            },
            pre: {
              backgroundColor: "#2e3440",
            },
            color: "#2e3440",
            "figure figcaption": {
              color: "#2e3440",
            },
            maxWidth: "85ch",
          },
        },
        light: {
          css: [
            {
              color: colors.coolGray[200],
              '[class~="lead"]': {
                color: colors.coolGray[300],
              },
              a: {
                color: colors.white,
              },
              strong: {
                color: colors.white,
              },
              "ol > li::before": {
                color: "#d8dee9",
              },
              "ul > li::before": {
                backgroundColor: "#d8dee9",
              },
              hr: {
                borderColor: colors.coolGray[200],
              },
              blockquote: {
                color: colors.coolGray[200],
                borderLeftColor: colors.coolGray[600],
              },
              h1: {
                color: colors.white,
              },
              h2: {
                color: colors.white,
              },
              h3: {
                color: colors.white,
              },
              h4: {
                color: colors.white,
              },
              "figure figcaption": {
                color: colors.coolGray[200],
              },
              code: {
                color: colors.white,
                backgroundColor: "#2e3440",
              },
              "a code": {
                color: colors.white,
              },
              "pre code": {
                backgroundColor: "transparent !important",
              },
              pre: {
                color: colors.coolGray[200],
                backgroundColor: colors.coolGray[800],
              },
              thead: {
                color: colors.white,
                borderBottomColor: colors.coolGray[400],
              },
              "tbody tr": {
                borderBottomColor: colors.coolGray[600],
              },
            },
          ],
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
