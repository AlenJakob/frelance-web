<template>
  <div id="nav" class="navbar">
    <logo />

    <div>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/about">Our projects</router-link>|
      <router-link to="/about">Contact</router-link>
    </div>
  </div>
</template>

<script>
import logo from "./logo";
export default {
  components: {
    logo
  }
};
</script>

<style>
.navigation {
  display: flex;
}
</style>

