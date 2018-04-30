<template>
    <div class="autocomplete">
        <input type="text" v-model="search" @input="onChange"/>
        <ul v-show="isOpen" class="autocomplete-results">
            <li @click="setResult(result)" v-for="(result, i) in results" :key="i" class="autocomplete-result">
                {{result}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Autocomplete",
        methods: {
            onChange() {
                this.$store.state.theAutoComplete.isOpen = true;
            },
            setResult(result){
                this.$store.state.theAutoComplete.search = result;
                this.$store.state.theAutoComplete.isOpen = false;
            }
        },
        computed: {
            isOpen(){
                return this.$store.state.theAutoComplete.isOpen;
            },
            results(){
                return this.$store.state.theAutoComplete.results;
            }
        }

    }
</script>

<style scoped>
    .autocomplete {
        position: relative;
        width: 130px;
    }

    .autocomplete-results {
        padding: 0;
        margin: 0;
        border: 1px solid #eeeeee;
        height: 120px;
        overflow: auto;
    }

    .autocomplete-result {
        list-style: none;
        text-align: left;
        padding: 4px 2px;
        cursor: pointer;
    }

    .autocomplete-result:hover {
        background-color: #4AAE9B;
        color: white;
    }
</style>