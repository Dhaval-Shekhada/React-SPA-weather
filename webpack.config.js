var webpack = require('webpack');
module.exports={
  entry:['script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery:'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output:{
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve:{
    root: __dirname,
    alias:{
      Main :'app/components/Main/Main.jsx',
      Nav :'app/components/Main/Nav.jsx',
      Weather:'app/components/Weather/Weather.jsx',
      About : 'app/components/Main/About.jsx',
      Example:'app/components/Main/Example.jsx',
      WeatherForm:'app/components/Weather/WeatherForm.jsx',
      WeatherMessage:'app/components/Weather/WeatherMessage.jsx',
      ProductCreate:'app/components/Product/ProductCreate.jsx',
      Product:'app/components/Product/Product.jsx',
      ProductList:'app/components/Product/productList.jsx',
      Total:'app/components/Product/Total.jsx',
      ErrorModal:'app/components/Error/Errormodal.jsx',
      openWeatherMap:'app/api/openWeatherMap.jsx',
      applicationStyles:'app/styles/app.css'

    },
    extensions:['','.js','.jsx']
  },
  module:{
    loaders:[
      {
        loader: 'babel-loader',
        query:{
          presets:['react', 'es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude:/(node_modules|bower_components )/
      }
    ]
  },
  devtool:'cheap-module-eval-source-map'
};
