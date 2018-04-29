<template>
    <div>
        <h1>
            Select a Country
        </h1>
        <!--<button @click="getCity">con city</button>-->
        <select>
            <option disabled value="">Please select one</option>
            <option v-for="cityName in $store.getters.cityNames">{{cityName}}</option>
        </select>

    </div>
</template>

<script>
    export default {
        name: "Weather",
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