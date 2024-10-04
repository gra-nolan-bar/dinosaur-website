<script setup>
import { ref } from "vue";
import ImageCard from "~/components/ImageCard.vue";

const images = [
  {
    src: "/images/dinosaur-t-rex-1280.jpg",
    alt: "T-Rex dinosaur in a forest",
  },
  {
    src: "/images/dinosaur-pterosaur-masosaur-1280.png",
    alt: "Pterosaur flying over the ocean with a masosaur attacking from the water",
  },
  {
    src: "/images/dinosaur-mosasaurus.jpg",
    alt: "Masosaurus swimming underwater",
  },
  {
    src: "/images/brachiosaurus.jpg",
    alt: "Long-necked dinosaur that was very tall, on a white background",
  },
  {
    src: "/images/baryonyx.jpg",
    alt: "Bayonyx on a white background, long face with large teeth",
  },
  {
    src: "/images/triceratops-skull.jpg",
    alt: "A skull of the famous three-horned dino",
  },
  {
    src: "/images/thalassodromeus.jpg",
    alt: "Thalassodromeus, a pterosaur with a long crest",
  },
  {
    src: "/images/stegosaurus.jpg",
    alt: "Stegosaurus, known for its bony plates and spikes",
  },
  {
    src: "/images/asteroid-1280.jpg",
    alt: "Masosaurus swimming underwater",
  }
];
// control the modal visibility and selected image
const modalVisible = ref(false);
const selectedImage = ref({});

// if else function to open modal with selected image
const toggleModal = (image) => {
  if (image) {
    selectedImage.value = image; // Set selected image if provided
  } else {
    selectedImage.value = {}; // Reset to empty when closing
  }
  modalVisible.value = !modalVisible.value; // Toggle modal visibility
};
</script>

<template>
  <main class="container mt-4 flex-grow-1">
    <h1>Gallery</h1>
    <div class="row">
      <ImageCard
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        class="col-sm-12 col-md-6 col-lg-4"
        @click="toggleModal(image)"
      />
    </div>
    <div v-if="modalVisible" class="modal-overlay" @click="toggleModal">
      <div class="modal-content" @click.stop>
        <img
          :src="selectedImage.src"
          :alt="selectedImage.alt"
          class="img-fluid"
        />
        <button class="btn-close" @click="toggleModal">&times;</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  position: relative;
  max-width: 100%;
  max-height: 100%;
}

.img-fluid {
  max-width: 100%; /* Ensure image fits within modal */
  max-height: 90vh; /* Ensure image fits within modal */
  height: auto; /* Maintain aspect ratio */
  width: auto; /* Maintain aspect ratio */
  border-radius: 8px;
  object-fit: contain; /* Make sure the image fits without being stretched */
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(246, 246, 246, 0.125);
  border: none;
  font-size: 2rem;
  color: rgba(180, 232, 182, 0.906);
  cursor: pointer;
}
</style>
