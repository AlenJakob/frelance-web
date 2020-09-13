<template>
  <div class="column">
    <img :src="require(`@/assets/img/${starColor}`)" :alt="starColor" />
  </div>
</template>
<script>
export default {
  props: ["starColor"]
};
</script>