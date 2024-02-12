/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
        bradhitc: ['BRADHITC', 'sans'],
        gothic: ['GOTHIC', 'sans'],
      },
    },
  },
  plugins: [ 
    require('@tailwindcss/forms'),
  ],
}

