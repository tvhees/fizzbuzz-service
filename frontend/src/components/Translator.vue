<template>
    <div>
        <h2>Use this app:</h2>
        <label>
            Choose a number to get the FizzBuzz result:
            <input type="number" v-model.number="number" />
        </label>
        <div v-if="loading">
            <p>Loading FizzBuzz...</p>
        </div>
        <div v-else>
            <p>The number {{ number }} translates to {{ result }}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Translator",
    data() {
        return {
            loading: true,
            number: 3,
            result: ''
        };
    },
    methods: {
        fetchResult(number) {
            this.loading = true;
            axios
                .get(`/api/${number}`)
                .then((response) => {
                    this.result = response.data.result;
                    this.loading = false;
                })
                .catch((error) => {
                    console.log(error);
                    this.loading = false;
                });
        }
    },
    created() {
        this.fetchResult(this.number);
    },
    watch: {
        number(newNumber) {
            this.fetchResult(newNumber);
        }
    }
};
</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}
a {
    color: #fe5750;
}

p {
    max-width: 600px;
    margin: 1em auto;
}

code {
    background: #f1f1f1;
    padding: 0.2em;
    color: #fe5750;
}
</style>
