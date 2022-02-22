import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV == "development" ? "https://frosty-glitter-gxkz6.cloud.serverless.com/" : "";

createApp(App).mount("#app");
