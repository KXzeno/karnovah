/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-default': "url('/img/bg-default.jpg')",
      },
      fontFamily: {
        sans: ['var(--font-urbanist)'],
        inter: ['var(--font-inter)'],
        cinzel: ['var(--font-cinzel)'],
        diphylleia: ['var(--font-diphylleia)'],
        merriweather: ['var(--font-merriweather)'],
        spectral: ['var(--font-spectral)'],
        dm_sans: ['var(--font-dm-sans)'],
        quicksand: ['var(--font-quicksand)'],
        dosis: ['var(--font-quicksand)'],
        sono: ['var(--font-sono)'],
      },
      container: {
        padding: "0.3rem 0.15rem",
      },
      colors: {
        'onyx': '#352F44',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    'postcss-import': {},
  ],
}
