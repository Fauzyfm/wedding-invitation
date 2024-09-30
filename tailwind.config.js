/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        judul : "Playball",
        cinzel : "Cinzel",
        inter : "Inter",
      },
      colors: {
        emas: "#B79A4B",
        birdong: "#213549",
        abu: "#DDDDDD",
        emasTua: "#836B24",
        biruGelap: "#040A16",
      }
    },
  },
  plugins: [],
}

