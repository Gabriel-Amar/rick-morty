<template>
  <div id="app">
    <header-component :message="titolo"/>
    <main>
      <main-grid/>
    </main>
    
  </div>
</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue'
import MainGrid from './components/MainGrid.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainGrid,
    
  },
  data(){
    return{
      titolo: "Rick e Morty"
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/general.scss";


</style>


