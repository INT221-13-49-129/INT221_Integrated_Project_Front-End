module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
       orange: '#ff9f58',
       yell: '#f6d895',
       koko: '#362c29',
       brown: '#996550'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
