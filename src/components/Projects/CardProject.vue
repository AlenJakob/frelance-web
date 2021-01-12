<template>
  <div class="card bm--card-equal-height">
    <div class="card-image">
      <figure class="image ">
        <img
          src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg"
          alt="Placeholder image"
        />
      </figure>
      <div class="my-3 has-text-right">
        <time datetime="2016-1-1">{{ project.date }}</time>
      </div>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ project.author }}</p>
          <p class="subtitle is-6">
            <router-link class="has-text-danger" to="/contact">
              alenjakob@gmail.com
            </router-link>
          </p>
        </div>
      </div>

      <div class="content">
        {{ project.content.substring(0, 70) }}...
        <div class="content">
          <ul type="1" v-for="tech in project.tech" :key="Math.random(tech.id)">
            <li>
              <a>{{ tech }}</a>
            </li>
          </ul>
        </div>
      </div>
      <button class="is-danger is-outlined button is-pulled-right mb-5">
        View
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"]
};
</script>

<style>
.card {
  height: 100%;
}
</style>