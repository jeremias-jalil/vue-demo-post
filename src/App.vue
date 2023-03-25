<template>
  <div>
    <NavBar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>

import NavBar from './components/NavBar/NavBar.vue'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

export default {
  name: 'App',
  components: {
    NavBar
  }

}
</script>

<style></style>
