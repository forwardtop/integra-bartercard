/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
        bradhitc: ['BRADHITC', 'sans'],
      },
    },
  },
  plugins: [ 
    require('@tailwindcss/forms'),
  ],
}

