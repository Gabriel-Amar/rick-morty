<template>
    <section class="container">
        
        <loading-component v-if="loading"/>
        <div class="row">
            <div v-for="character in filteredList" :key="character.id" class="col-6 col-md-4 col-lg-3">
                <card-component :item="character"/>
            </div>
        </div>
        <footer-component :len="filteredList.length" v-if="!loading"/>
    </section>
</template>

<script>
import store from "../store.js"
import axios from "axios"
import LoadingComponent from "./LoadingComponent.vue"
import CardComponent from './CardComponent.vue'
import FooterComponent from './FooterComponent.vue'




export default {
    name: "MainGrid",
    components: {
        LoadingComponent,
        CardComponent,
        FooterComponent,
        
    },
    data(){
        return{
            characterList: [],
            
            apiPath: "https://api.sampleapis.com/rickandmorty/",
            loading: false,
            species: [],
        }
    },
    methods:{
        
    },
    computed:{
        searchText(){
            return store.state.searchText;
        },
        filteredList(){
            if(this.searchText === "")return this.characterList;

            return this.characterList.filter((el)=>{
                return el.species  === this.searchText
            });
        }
    },
    created(){
        this.loading = true;
        axios.get(this.apiPath + 'characters').then((res)=>{
            this.characterList = res.data
            this.characterList.forEach((el)=>{
                if(!this.species.includes(el.species)){
                    this.species.push(el.species);
                }
            })
            store.setSpecie(this.species);
            this.loading = false;
        }).catch((error)=>{
            console.log(error)
            this.loading = false;
        })
    },
}
</script>

<style lang="scss" scoped>


</style>