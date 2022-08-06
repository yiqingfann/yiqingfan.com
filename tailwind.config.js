/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          1: '#212529',
          2: '#282c34',
        }, // background
        white: {
          1: '#eeeeee', // important text
          2: '#b3b9c5', // less important text
          3: '#4b5056', // split line color
          4: '#3a3e42'
        },
        orange: {
          '1': '#fbb749',
        }
      },
      fontFamily: {
        // body: ["DM Sans"],
      }
    },
  },
  plugins: [
    require(`@tailwindcss/typography`) // for markdown html styles
  ],
}
