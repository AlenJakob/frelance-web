<template>
  <div class="container px-6">
    <h1 class="title">Latest Projects</h1>
    <div class="columns is-multiline is-centered my-6">
      <CardProject
        v-for="project in projectList"
        :key="project.id"
        :project="project"
        class="column mx-4 my-4 is-4 "
      />
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