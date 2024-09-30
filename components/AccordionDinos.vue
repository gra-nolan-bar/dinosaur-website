<script setup>
import { defineProps } from "vue";

const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <main class="container mt-4 flex-grow-1">
    <div class="accordion" id="accordionExample">
      <section
        v-for="(section, index) in sections"
        :key="index"
        class="accordion-item"
      >
        <h3 class="accordion-header" :id="'heading' + index">
          <button
            class="accordion-button bg-success text-white"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + index"
            aria-expanded="false"
            :aria-controls="'collapse' + index"
          >
            {{ section.header }}
          </button>
        </h3>
        <div
          :id="'collapse' + index"
          class="accordion-collapse collapse"
          aria-labelledby="'heading' + index"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            {{ section.content }}
            <!-- Render the image if it exists -->
            <div class="text-center">
              <img
                v-if="section.image"
                :src="section.image.src"
                :alt="section.image.alt"
                :class="section.image.class"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
/* Additional styling can be added if needed */
</style>
