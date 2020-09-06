<template>
  <nav class="container navbar mb-6 " role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <logo />
      </router-link>

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

    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item buttons">
          <router-link to="/" class="navbar-item is-danger button is-outlined is-small">Home</router-link>
          <router-link to="/about" class="navbar-item is-danger button is-outlined is-small">About Us</router-link>
          <router-link to="/projects" class="navbar-item is-danger button is-outlined is-small">Our Projects</router-link>
          <router-link to="/contact" class="navbar-item is-danger button is-outlined is-small">Contact us</router-link>
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
.button.is-danger.is-outlined:last-child {
  margin-right: 0.5rem;
}
.menu-show {
  display: block !important;
}
</style>