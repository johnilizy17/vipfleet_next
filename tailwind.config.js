module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '1023px'},

      'lg': {'min': '1024px'}
 },
 colors: {
  'brand-color': '#3e4095',
  'white-color': '#ffffff',
},
  },
  plugins: ["tailwindcss",  ],
}
