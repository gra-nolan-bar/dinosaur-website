<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Home - Dinosaur Website',
  meta: [
    {
      key: 'description', // Acts similarly to hid, uniquely identifies this meta tag for Nuxt 3
      name: 'description',
      content: 'Explore the fascinating world of dinosaurs! Learn about the diverse species that roamed the Earth during the Mesozoic Era, from the mighty T-Rex to the towering Brachiosaurus.'
    },
    {
      key: 'keywords', 
      name: 'keywords',
      content: 'dinosaurs, Mesozoic Era, Tyrannosaurus rex, Brachiosaurus, Velociraptor, dinosaur facts, prehistoric animals'
    },
    {
      key: 'og:title', // Open Graph title for better social sharing
      property: 'og:title',
      content: 'Home - Dinosaur Website'
    },
    {
      key: 'og:description', 
      property: 'og:description',
      content: 'Discover the incredible world of dinosaurs, from fearsome predators to gentle giants, and learn how these remarkable creatures adapted to rule the Earth for millions of years.'
    },
    {
      key: 'og:image', // Open Graph image for social media preview
      property: 'og:image',
      content: '/images/pterodactyl.svg'
    }
  ]
});
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
          rel="noopener noreferrer"
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
