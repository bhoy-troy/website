<template>
  <footer id="footer" class="container">
    <div class="row">
      <p>Copyright © James Troy {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  footer > .row > p {
    text-align: center;
  }
</style>
