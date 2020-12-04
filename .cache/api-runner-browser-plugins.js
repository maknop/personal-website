module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/assets/images/website-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('../node_modules/@conradlin/gatsby-source-notion-database/gatsby-browser.js'),
      options: {"plugins":[],"sourceConfig":[{"name":"posts","table":"https://www.notion.so/conradlin/1aa283fcd5ae4a73ba0f73c062de745e?v=6a40014bee144152b55203e2caf0c02e","cacheType":"html"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
