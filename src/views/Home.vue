<template>
  <div class="hero container">
    <SectionEarth />
    <div class="columns section is-centered">
      <Card v-for="offer in offerPackages" :key="offer.stars" :offer="offer" :color="offer.color" />
    </div>
    <div class="columns">
      <Brands />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Earth from "@/components/Earth";

import SectionEarth from "@/components/SectionEarth";
import Card from "@/components/Card";
import Brands from "@/components/Brands";
export default {
  components: {
    SectionEarth,
    Card,
    Brands
  },
  data() {
    return {
      offerPackages: [
        {
          name: "Economy #1",
          color: "yellow",
          price: 200,
          stars: 3,
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At minus hic cum. Consectetur adipisicing elit.",
          benefits: [
            "complex website",
            "first month support",
            "3 free retouch photography",
            "free hosting for 3 months"
          ]
        },
        {
          name: "Deluxe #2",
          color: "green",
          price: 400,
          stars: 4,
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur error omnis praesentium a vitae aliquid.",
          benefits: [
            "complex website",
            "include two months support",
            "2 color variants",
            "free hosting for 6 months"
          ]
        },
        {
          name: "Ultimate #3",
          color: "red",
          price: 600,
          stars: 5,
          description:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ullam laudantium mollitia nemo necessitatibus hic temporibus deleniti neque qui.",
          benefits: [
            "complex website",
            "include three months support",
            "3 color variants",
            "free hosting for 1 year"
          ]
        }
      ]
    };
  },
  computed: {
    color() {
      return this.offerPackages.map(item => item.color);
    }
  },
  mounted() {
    console.log(this.colors);
  }
};
</script>

<style scoped>
</style>