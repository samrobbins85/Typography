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
            "pre code::after": {
              content: "none",
            },
            code: {
              backgroundColor: colors.gray[200],
              color: colors.gray[700],
              padding: "4px",
              borderRadius: rem(2),
            },
            blockquote: {
              quotes: "none",
            },
            pre: {
              backgroundColor: colors.coolGray[800],
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
