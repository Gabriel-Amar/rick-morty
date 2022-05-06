<template>
  <header>
    <h1 class="text-center my-5">
      {{message}}
    </h1>
    
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
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
