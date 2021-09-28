module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('../images/heros/pattern_hero.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
