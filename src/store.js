import Vue from "vue"

const store = {
    state: Vue.observable({
        searchText: "",
        speciesList: [],
    }),
    setText(text){
        this.state.searchText = text;
    },
    setSpecie(species){
        this.state.speciesList = species;
    },
}
export default store;
