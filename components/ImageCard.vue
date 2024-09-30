<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="image-card text-center mb-3 align-items-center">
    <img :src="src" :alt="alt" class="img-fluid" />
  </div>
</template>



<style scoped>
.image-card {
  margin-bottom: 20px; /* Adjust as needed */
}
</style>
