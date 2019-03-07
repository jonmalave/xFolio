<template>
  <!-- Main -->
  <main>
    <!-- Content -->
    <nuxt/>

    <!-- Footer -->
    <footer class="footer">
      Handcrafted with <i class="footer__icon fa fa-heart"></i> in Miami. By <a class="footer__link" href="http://jonmalave.com" target="_blank">Jon Malave</a>
    </footer>
  </main>
</template>

<style>
/* Block Elements */
* {
  text-decoration: none;
  box-sizing: border-box;
  margin: 0;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #494b4b;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;  
  user-select: unset;
}
a {
  font-weight: bold;
  color: #494b4b;
  text-decoration: none;
}
hr {
  width: 100%;
  border-width: 0.5px;
  border-color: #e0e0e0;
  margin: 16px 0;      
}
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 24px;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  height: 56px;
  width: 100%;
  z-index: 3;
}
.footer__icon {
  margin: 0 4px;
}
.footer__link {
  margin: 0 4px;
}
</style>
