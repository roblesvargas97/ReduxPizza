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
        boxShadow: {
          'white': '0px 0px 9px 0px rgba(255, 248, 248, 0.1)',
        },
        backgroundImage: {
          'pizza-background': "url('https://i.imgur.com/35KpZMB.jpg')"
        },
        keyframes: { 
          bounceButton: {
              'from': {
                  transform: 'translateY(-5px)'
              },
              'to': {
                  transform: 'translateY(0px)'
              },
          }
        },
        animation: {
            bounceButton: 'bounceButton .3s cubic-bezier(0.215, 0.610, 0.355, 1)',
        }
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      }
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
  }

