/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          1: '#212529',
          2: '#282c34',
        }, // background
        white: {
          1: '#eeeeee',
          2: '#b3b9c5',
        },
      },
      fontFamily: {
        // body: ["DM Sans"],
      }
    },
  },
  plugins: [],
}
