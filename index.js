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
              color: colors.gray[700],
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
              color: theme("colors.gray.200"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: "#d8dee9",
              },
              "ul > li::before": {
                backgroundColor: "#d8dee9",
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.200"),
              },
              code: {
                color: theme("colors.white"),
                backgroundColor: "#2e3440",
              },
              "a code": {
                color: theme("colors.white"),
              },
              "pre code": {
                backgroundColor: "transparent !important",
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
