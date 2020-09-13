<template>
  <div class="container section mb-6 mt-6">
    <h1 class="has-text-centered title pt-5 pb-5">
      People who
      trusted us
    </h1>
    <ul class="columns container mt-6">
      <li class="column has-text-centered" v-for="brand in brandTrustUs" :key="brand.id">
        <img :src="require(`@/assets/img/brand-img/${brand.brandImg}`)" :alt="brand.companyName" />

        <div class="media-content mb-4">
          <p class="title is-4 pt-5">{{brand.name}}</p>
          <p class="subtitle is-5">{{brand.lastName}}</p>
        </div>
        <div class="content pt-5 pb-5">
          {{brand.review}}
          <div class="mt-5">
            <time datetime="2016-1-1">{{brand.date}}</time>
          </div>
          <div class="columns star-position mb-5 mt-5">
            <div v-for="star in Number(brand.rate)" :key="star.rate">
              <StarRate :starColor="brand.starColor" />
              
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// "brandImg":"../brand-img/test.png"
import StarRate from "./Rating/StarRate";
import data from "../assets/db/usersTrustUs.json";
export default {
  components: {
    StarRate
  },
  data() {
    return {
      brandTrustUs: data
    };
  },
  mounted() {
    console.log(this.brandTrustUs[0].brandImg);
  }
};
</script>

<style>
.star-position {
  justify-content: center;
}
</style>