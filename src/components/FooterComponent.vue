<template>
    <footer>
        <div class="text-center my-5" >
            Found {{len}} characters
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
    props:{
        len: Number
    }
}
</script>

<style lang="scss" scoped>

</style>