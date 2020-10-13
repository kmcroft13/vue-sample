import Vue from "vue";
import Vuesax from "vuesax";
import App from "./App";

import "boxicons";
import "vuesax/dist/vuesax.css"; //Vuesax styles

Vue.use(Vuesax, {});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
