<template>
  <div class="hello">
    <vs-sidebar
      absolute
      v-model="active"
      background="dark"
      textWhite
      :open.sync="activeSidebar"
    >
      <template #logo>
        <img
          src="https://www.pngfind.com/pngs/m/509-5093102_acme-logo-png-white-transparent-png.png"
        />
      </template>
      <vs-sidebar-item :active="active == 'home'" id="home">
        <template #icon>
          <box-icon name="home-smile" color="white"></box-icon>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item :active="active == 'templates'" id="templates">
        <template #icon>
          <box-icon name="like" color="white"></box-icon>
        </template>
        Templates
      </vs-sidebar-item>
    </vs-sidebar>

    <div id="buttonSection">
      <vs-button @click="activeSidebar = !activeSidebar" icon>
        <box-icon syle="" name="menu" color="white"></box-icon>
        Panel
      </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      active: "home",
      activeSidebar: false,
    };
  },
};
</script>

<style>
</style>