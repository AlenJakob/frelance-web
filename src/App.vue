<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export default {
  components: {
    Nav,
    Footer
  }
};
</script>
<style lang="scss">
@import "~bulma/css/bulma.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
