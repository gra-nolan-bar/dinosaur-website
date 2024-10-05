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
      <h3 class="card-title">{{ name }}</h3>
      <p class="card-text">
        {{ description }}
        <!-- Conditionally render the link for Tyrannosaurus Rex -->
        <span v-if="name === 'Tyrannosaurus Rex'">
          <a 
            href="https://www.amnh.org/exhibitions/permanent/saurischian-dinosaurs/tyrannosaurus-rex" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            American Museum of Natural History
          </a>
        </span>
      </p>
    </div>
  </div>
</template>



<style scoped>

</style>
