<template>
  <div class="hero">
    <SectionEarth />
    <Testimonials />
  </div>
</template>

<script>
// @ is an alias to /src
// import Earth from "@/components/Earth";

import SectionEarth from "@/components/SectionEarth";
import Testimonials from "@/components/Testimonials";
export default {
  components: {
    SectionEarth,
    Testimonials
  }
};
</script>
