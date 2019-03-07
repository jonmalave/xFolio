module.exports = {
  // Server 
  server: {
    host: 'localhost',
    port: 3000
  },

  // Mode  
  mode: 'universal',

  // Headers of the page
  head: {
    title: 'Full Name | Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'minimal-ui, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { charset: 'utf-8' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'description', name: 'description', content: 'Full Name | Web Developer' },
      { hid: 'keywords', name: 'keywords', content: 'nuxt, portfolio, web developer' }  
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ] 
  },

  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS
  css: [
    { src: '~assets/fonts/fontawesome/css/all.min.css', lang: 'css' }
  ],

  // Plugins to load before mounting the App
  plugins: [
  ],

  // Nuxt.js modules
  modules: [

  ],

  // Build configuration
  build: {
    // You can extend webpack config here
    extend(config, ctx) {

    }
  } 
}
