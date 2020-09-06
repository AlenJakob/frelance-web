<template>
  <div class="hero container">
    <SectionEarth />
    <div class="columns section is-centered">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Earth from "@/components/Earth";

import SectionEarth from "@/components/SectionEarth";
import Card from "@/components/Card";
export default {
  components: {
    SectionEarth,
    Card
  },
  data() {
    return {
      offerPackages: [
        {
          name: "Economy #1",
          price: 200,
          stars: 3,
          benefits: [
            "complex website",
            "first month support",
            "3 free retouch photography"
          ]
        },
        {
          name: "Economy #2",
          price: 400,
          stars: 4,
          benefits: [
            "complex website",
            "include two months support",
            "2 color variants"
          ]
        },
        {
          name: "Economy #3",
          price: 600,
          stars: 5,
          benefits: [
            "complex website",
            "include three months support",
            "3 color variants",
            "free hosting for 1 year"
          ]
        }
      ]
    };
  }
};
</script>
