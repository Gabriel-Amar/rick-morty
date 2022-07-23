<template>
  <header>
    <h1 class="text-center my-5">
      {{message}}
    </h1>
    <search-component/>
  </header>
</template>

<script>
import SearchComponent from './SearchComponent.vue'

export default {
  name: 'HeaderComponent',
  components:{
    SearchComponent
  },
  props: [
    'message'
  ],
}
</script>

<style scoped lang="scss">
header{
  h1{
    font-weight: 700;
  }
}
</style>
