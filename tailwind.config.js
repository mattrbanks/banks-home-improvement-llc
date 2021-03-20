module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "main-img":
          "url('https://github.com/mattrbanks/banks-home-improvement-llc/blob/master/src/images/house.jpg?raw=true')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
