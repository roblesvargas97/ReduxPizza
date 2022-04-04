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
          },
          rotateOrnament: {
            'to':{
              transform: 'rotate(360deg)' 
            }
          },
          wordsAnimation:{
            '0%,5%':{transform:'translate3d(0,0,0);'},
            '20%,25%':{transform:'translate3d(0,-33.3%,0);'},
            '50%,55%':{transform:'translate3d(0,-66.6%,0);'},
            '70%,75%':{transform:'translate3d(0,-33.3%,0);'},
            '100%':{transform:'translate3d(0,0,0);'},
          },
          rotateAndShow:{
            'from':{transform:'rotate(50deg);',opacity:'0;'},
            'to':{transform:'rotate(0)',opacity:'1;',},  
          },
          rotateAndShow2:{
            'from':{ transform:'translateY(-10px)', opacity:'0;'},
            'to':{ transform:'translateY(0)', opacity:'1;',},  
          },
        },
        animation: {
            bounceButton: 'bounceButton .3s cubic-bezier(0.215, 0.610, 0.355, 1)',
            rotateOrnament:'rotateOrnament infinite linear 10s',
            wordsAnimation: 'wordsAnimation linear infinite 6s;',
            rotateAndShow: 'rotateAndShow ease-in forwards .5s',
            rotateAndShow2: 'rotateAndShow2 ease-in forwards .5s',
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

