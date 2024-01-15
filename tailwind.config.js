/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#adea2a",
        secondary: {
          100: "#1E1F25",
          900: "#131517"
        }
      }
    },
  },
   plugins: [
    require('@headlessui/tailwindcss')

  ],
}

