<template>
  <div class="container px-6">
    <h1 class="title">Latest Projects</h1>
    <div
      class="columns is-multiline is-mobile"
      v-for="project in projectList"
      :key="project.id"
    >
      <CardProject class="" />
    </div>
  </div>
</template>

<script>
import projects from "../assets/db/projects.json";
import CardProject from "../components/Projects/CardProject";
export default {
  components: {
    CardProject
  },
  data() {
    return {
      projectList: projects
    };
  },
  mounted() {
    console.log(this.projectList);
  }
};
</script>

<style>
</style>