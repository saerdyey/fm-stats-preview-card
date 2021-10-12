module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend Deca", "sans-serif"],
      },
    },
    colors: {
      primary: "hsl(233, 47%, 7%)",
      card: "hsl(244, 38%, 16%)",
      accent: "hsl(277, 64%, 61%)",
      heading: "hsl(0, 0%, 100%)",
      paragraph: "hsla(0, 0%, 100%, 0.75)",
      stats: "hsla(0, 0%, 100%, 0.6)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
