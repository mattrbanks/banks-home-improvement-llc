module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "main-img":
          "url('https://github.com/mattrbanks/richs-property-maintenance-llc/blob/master/src/images/icon.png?raw=true')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
