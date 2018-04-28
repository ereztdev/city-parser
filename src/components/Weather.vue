<template>
    <div>
        <h1>
            WEATHER
        </h1>
        <button @click="getCity">con city</button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data(){
            return{
                cities:'',
                cityId: ''
            }

        },
        name: "Weather",
        methods:{
            allCities(){
                axios.get('http://localhost:3000/allCities')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            getCityId(){
                axios.post('http://localhost:3000/city',
                this.name, // the data to post
                { headers: {
                        'Content-type': 'application/x-www-form-urlencoded',
                    }
                }).then(response => {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });

            }
        },
        mounted(){
           this.allCities();
        }
    }
</script>

<style scoped>

</style>