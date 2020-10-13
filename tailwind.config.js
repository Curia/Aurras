module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      'sans': ['Nunito Sans', 'sans-serif'],
      'serif': ['Playfair Display', 'serif']
    },
    extend: {
      colors: {
        grey: '#d5d3cd',
        heath: '#fffbf4',
        spring: '#f1ece5',
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },
  variants: {},
  plugins: [],
}
