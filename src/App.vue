<template>
  <div id="app">
    <header-component :message="titolo"/>
    <main>
      <transition name="fade">
      <main-grid/>
        </transition>

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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


