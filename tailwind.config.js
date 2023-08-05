/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        laptop: { min: '768px', max: '992px' },

        pc: { min: '992px' },
      },
      boxShadow: {
        'box-sha': '0px 0px 10px rgba(0, 0, 0, 0.450)',
      },
      backgroundImage: {
        image: "url('../foto.jpg')",
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
    },
    plugins: [],
  },
}
