module.exports = {
    content: ['./dist/*.html','./src/**/*.{js,jsx,ts,tsx}','./public/*.html', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
      extend: {
        colors:  {
          'dark-blue':'#26324F',
          'dark-blue-1': 'rgba(17, 54, 140, 0.93)',
          'white-glass': 'rgba(68, 68, 90, 0.4)',
          'blue': '#92B1FD',
        },
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      }
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
  }

