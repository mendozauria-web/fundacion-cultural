/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1A365D',
          beige: '#F5F5DC', // Tu color base
          white: '#FFFFFF',
          slate: '#475569', // El plomo
        }
      },
      fontFamily: {
        // Usamos las variables que definimos en fonts.css
        title: ['var(--font-title)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}