var tailwindcss = require("tailwindcss"); // adds tailwindcss to this process so we can call it to load the config file below

module.exports = {
  plugins: [
    // tell the app where the tailwind file is as we moved it into /app/javascript/stylesheets 
    tailwindcss('./app/javascript/stylesheets/tailwind.config.js'),
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}
