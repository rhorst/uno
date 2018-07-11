module.exports = {
  plugins: [
    require('cssnano')({
      preset: ['default', {
        svgo: false,
        colormin: false,
      }]
    }),
    require('autoprefixer')({})
  ],
}