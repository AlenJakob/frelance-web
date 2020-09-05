<template>
  <nav class="navbar mb-6" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <logo />
      </a>

      <a
        @click="show"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
            <router-link to="/" class="navbar-item">Home</router-link>

            <router-link to="/Documentation" class="navbar-item">About Us</router-link>
            <router-link to="/Documentation" class="navbar-item">Our Projects</router-link>
            <router-link to="/Documentation" class="navbar-item">Contact us</router-link>
          
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "./logo";
export default {
  components: {
    logo
  },
  methods: {
    show() {
      document.querySelector(".navbar-menu").classList.toggle("menu-show");
    }
  }
};
</script>

<style>
.navbar {
}
.menu-show {
  display: block !important;
}
</style>