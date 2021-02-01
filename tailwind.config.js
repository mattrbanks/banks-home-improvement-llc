module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "main-img":
          "url('https://github.com/mattrbanks/richs-property-maintenance-llc/blob/master/src/images/IMG_0135.JPG?raw=true')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
