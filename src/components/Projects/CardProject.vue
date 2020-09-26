<template>
  <div class="card">
    <div class="card-image">
      <figure class="image ">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
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
        {{ project.content.substring(0,100)}}...
        <div class="content">
          <ul
            type="1"
            v-for="tech in project.tech"
            :key="Math.random(tech.id)"
          >
            <li>
              <a>{{ tech }}</a>
            </li>
          </ul>
        </div>
        <br />
        <time datetime="2016-1-1">{{ project.date }}</time>
      </div>
      <button class="is-danger is-outlined button">View</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"]
};
</script>

<style>
</style>