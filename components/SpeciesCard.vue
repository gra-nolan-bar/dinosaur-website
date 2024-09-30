<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  description: String,
  imageSrc: String,
  imageAlt: String,
});
</script>

<template>
  <div class="card">
    <img :src="imageSrc" class="card-img-top" :alt="imageAlt" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>



<style scoped>

</style>
