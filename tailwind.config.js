module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
  extend: {
    colors:{
     orange: '#ff9f58',
     yell: '#f6d895',
     koko: '#362c29',
     brown: '#996550',
     dark:'#0A0D57'
    },
    spacing: {
      '128': '32rem',
      '144': '36rem',
      '160': '40rem',
      '176': '44rem',
      '192': '48rem',
      '208': '52rem',
      '224': '56rem',
      '240': '60rem',
      '256': '64rem',
      '272': '68rem',
      '288': '72rem',
      '304': '76rem',
      '320': '80rem',
      '336': '84rem',
      '352': '88rem',
      '368': '92rem',
    },
    animation: {
      slide: 'slide 5s',
    },
    keyframes:{
      slide: {
        '100%' : {
          transform:'translateY(0)'
        },
        '50%':{
          transform:'translateY(-25%)'
        },
      }
    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
