<template>
  <div id="app">
    <Hello />
  </div>
</template>

<script>
import Hello from "./components/Hello";

export default {
  name: "app",
  components: {
    Hello,
  },
  mounted: function () {
    console.log("mounted");
  },
  methods: {
    logger: function () {
      console.log("open event");
    },
  },
};
</script>
<style>
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #5b3cc4;
}
</style>
