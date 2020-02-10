module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: true,
      overrideBrowserslist: [
        '> 1%',
        'last 5 versions',
        'Firefox >= 45',
        'ios >= 8',
        'ie >= 10'
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ['css-loader','postcss-loader','sass-loader']
      },
    ]
  }
}