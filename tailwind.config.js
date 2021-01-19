module.exports = {
  purge: {
    mode: 'layers',
    // looks at all html files in public directory
    content: ['./public/**/*.html/']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      cwc: {
        orange: '#ff8400',
        beige: '#f0f1f1',
        gray: '#54575a',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
