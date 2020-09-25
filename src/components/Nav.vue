<template>
  <nav
    class="container navbar mb-6 "
    role="navigation"
    aria-label="main navigation"
  >
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
          <router-link
            to="/home"
            class="navbar-item is-danger is-outlined button is-small"
            >Home</router-link
          >
          <router-link
            to="/about"
            class="is-big navbar-item is-danger is-outlined button is-small"
            >About Us</router-link
          >
          <router-link
            to="/projects"
            class="navbar-item is-danger is-outlined button is-small"
            >Our Projects</router-link
          >
          <router-link
            to="/contact"
            class="navbar-item is-danger is-outlined button is-small"
            >Contact us</router-link
          >
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
.menu-show {
  display: block !important;
}
@media only screen and (max-width: 600px) {
  .navbar-item.buttons a {
    max-width: 210px;
    margin: 0.5rem auto;
  }
  .navbar-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buttons .button:not(:last-child):not(.is-fullwidth) {
  margin-right: auto !important;
}
}
@media only screen and (min-width: 600px){
.button:last-child{
  margin-right: 0.5rem!important;
}
}

</style>