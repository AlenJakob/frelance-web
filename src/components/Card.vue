<template>
  <div class="column is-4 hero">
    <div class="card p-4 card-hover">
      <div class="card-image"></div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="require(`@/assets/img/${color}.png`)" />
            </figure>
          </div>
          <div class="media-content level">
            <p class="has-text-weight-bold is-5 subtitle" :v-model="offer.name">{{offer.name}}</p>
            <p class="level-right is-5 subtitle">{{offer.price}}€</p>
          </div>
        </div>
        <div class="content">
          <p class="mb-6">{{offer.description.substring(0,100)}}...</p>
          <ul class="is-fullheight">
            <li class="mb-5" v-for="el in offer.benefits" :key="el.id">{{el}}</li>
          </ul>
        </div>

        <!-- ********* -->
        <div class="columns star-position mb-5 mt-5">
          <div v-for="star in this.offer.stars" :key="star.star">
            <Star class="star" />
          </div>
        </div>
        <!-- ********* -->
        <a
          v-bind:class="[(color === `yellow`) ? `is-warning` : (color === `red`) ? `is-danger` : (color === `green` ) ? `is-success` : `is-dark`]"
          class="button inverted"
        >Check out</a>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "./Rating/Star";
export default {
  props: ["offer", "color"],
  components: {
    Star
  },
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style>
.card-hover:hover {
  transition: 0.2s;
  box-shadow: 0 0 3px rgb(153, 153, 153);
}
.star-position {
  display: flex;
  flex-direction: row;
}
.star {
  transform: scale(1.3);
}
</style>

