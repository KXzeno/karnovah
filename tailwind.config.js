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
      },
      fontFamily: {
        sans: ['var(--font-urbanist)'],
        inter: ['var(--font-inter)'],
        cinzel: ['var(--font-cinzel)'],
        diphylleia: ['var(--font-diphylleia)'],
      },
      container: {
        padding: "0.3rem 0.15rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
