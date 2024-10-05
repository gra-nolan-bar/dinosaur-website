<!-- <script setup lang="ts">
import { definePageMeta } from 'nuxt/app';

definePageMeta({
  title: 'Home - Dinosaur Website',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'This is the homepage of the Dinosaur Website, where you can find interesting dinosaur facts and images.'
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'dinosaurs, homepage, dinosaur facts'
    }
  ]
});
</script> -->
<script>
export default {
  data() {
    return {
      title: 'Home - Dinosaur Website',
      description: 'This is the homepage of the Dinosaur Website, where you can find interesting dinosaur facts and images.'
    };
  },
  head() {
    return {
      title: this.title, // using the title from data
      meta: [
        {
          hid: 'description', 
          name: 'description',
          content: this.description 
        },
        {
          hid: 'keywords', 
          name: 'keywords',
          content: 'dinosaurs, homepage, dinosaur facts'
        }
      ]
    };
  }
};
</script>


<template>
  <div>
    <!-- Main Content -->
    <main class="container mt-4 flex-grow-1">
      <h1>Welcome to the Dinosaur Page</h1>
      <p>
        Dinosaurs are a diverse group of reptiles that dominated the Earth
        during the Mesozoic Era, living for over 180 million years. They
        exhibited remarkable adaptability and evolved into a myriad of forms,
        ranging from small, bird-like creatures no larger than a chicken to
        colossal giants like the Tyrannosaurus rex, a fearsome predator that
        ruled the land with its powerful jaws and keen senses. Some dinosaurs,
        like the Brachiosaurus, towered above the treetops, reaching heights of
        up to 80 feet, while others, such as the Velociraptor, were nimble
        hunters, known for their agility and intelligence.
      </p>
      <p>
        The age of dinosaurs began in the Triassic Period, around 230 million
        years ago, and flourished through the Jurassic and Cretaceous periods.
        During this time, dinosaurs became the dominant terrestrial vertebrates,
        adapting to a wide range of habitats—from lush forests and arid deserts
        to coastal plains. They developed various feeding strategies; some were
        herbivores, grazing on the abundant vegetation, while others were
        carnivores, preying on smaller dinosaurs and prehistoric creatures. The
        incredible diversity among species, from the armored Stegosaurus to the
        swift Allosaurus, reveals unique adaptations that enabled their survival
        in specific environments.
      </p>
      <p>
        Dinosaurs continue to capture the imagination of people worldwide,
        inspiring countless books, movies, and scientific endeavors. Museums
        display their skeletons, and paleontologists embark on global
        expeditions to unearth new fossils, expanding our knowledge of these
        extraordinary animals. As research advances, we uncover more about their
        mysterious existence, ensuring that the legacy of dinosaurs will
        continue to fascinate generations to come. Get more amazing info from
        the Smithsonian National Museum of Natural History in a new tab
        <a
          href="https://naturalhistory.si.edu/research/paleobiology"
          target="_blank"
          >here</a
        >.
      </p>
      <div class="image-container">
        <img
          class="img-fluid small-image"
          src="/images/dinosaur-icon-spinosaurus-512.png"
          alt="small spinosaurus icon"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
}

.small-image {
  width: 100px;
}
</style>
