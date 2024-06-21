/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        fondo_sidebar: 'black',
        fondo_inicio: '#f8fafc',
      },
    },
  },
  plugins: [],
}
