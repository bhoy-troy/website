<template>
  <div class="app-container">
    <NavBar/>

    <SideBar/>
    <div class="app-content">
      <nuxt/>
    </div>
    <Footer/>
  </div>
</template>
<script>
  import Logo from '~/components/Logo.vue'
  import Footer from '~/components/Footer.vue'
  import SideBar from '~/components/SideBar.vue'
  import NavBar from '~/components/NavBar.vue'


  export default {
    components: {
      NavBar,
      SideBar,
      Logo,
      Footer,
      computed: {
        isSidebar() {
          return this.$store.getters['nav/toggleSidebar']
        }
      },
      watch: {
        '$route': function () {
          if (process.client && this.isSidebar && window.innerWidth < 768) {
            this.$store.dispatch('nav/toggleSidebar')
          }
        },
      }

    }
  }

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());

  gtag('config', 'G-EWYCNYZE05');

</script>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  .app-container {
    height: 100%;
    position: relative;
    display: grid;
    grid-template: auto 1fr auto / 1fr;
  }

  .app-content {
    min-height: 100vh;
    padding: 24px;
    display: grid;
    align-items: center;
    justify-items: center;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
