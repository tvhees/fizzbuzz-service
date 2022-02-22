<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld>
        <Translator />
    </HelloWorld>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Translator from "./components/Translator.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
        Translator,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    min-block-size: 100%;
}

html,
body {
    height: 100%;
}
</style>
