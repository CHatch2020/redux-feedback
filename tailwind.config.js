module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: '0 10px 15px -2px rgba(0, 0, 0, 0.404), 0 4px 4px -2px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.104)',

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
