/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "zinc-800": '#27272a',
      "zinc-950": '#09090b',
      "zinc-200": '#e4e4e7',
      "zinc-100": '#f4f4f5',
      "background-backdrop": '#00000099',

    },
  },
  plugins: [],
}
