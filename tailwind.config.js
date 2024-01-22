/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        checked: "url('./src/Home/partials/img/checked.svg')",
        unchecked: "url('./src/Home/partials/img/unchecked.svg')",
      },
    },
  },
  plugins: [],
};
