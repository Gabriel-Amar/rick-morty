<template>
    <section class="container">
        <loading-component v-if="loading"/>
        <div class="row">
            <div v-for="character in characterList" :key="character.id" class="col-6 col-md-4 col-lg-3">
                <card-component :item="character"/>
            </div>
        </div>
        <footer-component :len="characterList.length" v-if="!loading"/>
    </section>
</template>

<script>
import axios from "axios"
import LoadingComponent from "./LoadingComponent.vue"
import CardComponent from './CardComponent.vue'
import FooterComponent from './FooterComponent.vue'



export default {
    name: "MainGrid",
    components: {
        LoadingComponent,
        CardComponent,
        FooterComponent
    },
    data(){
        return{
            characterList: [],
            apiPath: "https://api.sampleapis.com/rickandmorty/",
            loading: false,
        }
    },
    mounted(){
        this.loading = true;
        axios.get(this.apiPath + 'characters').then((res)=>{
            this.characterList = res.data
            this.loading = false;
        }).catch((error)=>{
            console.log(error)
            this.loading = false;
        })
    }
}
</script>

<style lang="scss" scoped>

</style>