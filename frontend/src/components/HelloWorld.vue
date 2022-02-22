<template>
    <div class="hello">
        <h1>FizzBuzz as a Service</h1>
        <slot></slot>
        <div>
            <h2>Call the API directly:</h2>
            <p>
                <code>{{ route }}/api/:number</code>
            </p>
            <p>
                where
                <code>:number</code> is the numerical value to translate.
            </p>
        </div>
        <p class="powered">Powered by Vue and Serverless Cloud</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    data() {
        return {
            loading: true,
            number: 3,
            result: '',
            route: '',
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
        this.route = window.location.host;
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
    padding: 0.4em;
}

.powered {
    position: fixed;
    inset-inline: 20px auto;
    inset-block: auto 10px;
    color: grey;
}
</style>