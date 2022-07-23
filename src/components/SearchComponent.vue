<template>
    <div>
        <div class="input-group">
            <select name="genre" id="genre" v-model="inputText" @change="changeSearch">
                <option value="">All</option>
                <option :value="specie" v-for="(specie, index) in characterSpecies" :key="index">
                    {{specie}}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
import store from "../store.js";
export default {
name: "SearchComponent",
    data(){
        return {
            inputText: "",
        }
    },
    computed:{
        characterSpecies(){
            return store.state.speciesList
        }
    },
    methods:{
        changeSearch(){
            store.setText(this.inputText)
        },
        
    }
}
</script>

<style lang="scss" scoped>

</style>