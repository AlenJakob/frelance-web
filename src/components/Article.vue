<template>
  <div>
    <section class="section " v-for="article in this.articlesList" :key="article.id">
      <div class="container columns">
        <div class="column is-2">
          <figure class="image is-256x256">
            <img src="https://bulma.io/images/placeholders/256x256.png" />
          </figure>
        </div>
        <div class="column is-8">
          <h1 class="title">{{article.title}}</h1>
          <h2 class="subtitle pt-4 pb-4">{{article.content}}</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import articles from "../assets/db/articles.json";
export default {
  data() {
    return {
      articlesList: articles
    };
  },
  mounted() {
    console.log();
  }
};
</script>

<style>
</style>