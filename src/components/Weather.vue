<template>
    <div>
        <h1>
            Select a City
        </h1>
        <!--<button @click="getCity">con city</button>-->
        <select v-if="isLoaded">
            <option disabled value="">Please select one</option>
            <option v-for="cityName in renderCities">{{cityName}}</option>
        </select>

    </div>
</template>

<script>
    export default {
        name: "Weather",
        computed: {
            isLoaded() {
                return this.$store.getters.didItLoad;
            },
            renderCities() {
                return this.$store.getters.getCityNames;

            }
        },
        methods: {
            allCityNames() {
                this.$store.dispatch('loadData')
            }
        },
        // getCityId() {
        //     axios.post('http://localhost:3000/city',
        //         this.name, // the data to post
        //         {
        //             headers: {
        //                 'Content-type': 'application/x-www-form-urlencoded',
        //             }
        //         }).then(response => {
        //         console.log(response);
        //     }).catch(function (error) {
        //         console.log(error);
        //     });
        //
        // },

        created() {
            this.allCityNames();
        }
    }
</script>

<style scoped>

</style>