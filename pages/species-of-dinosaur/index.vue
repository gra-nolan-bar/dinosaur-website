<script setup>
import { ref, onMounted } from "vue";
import SpeciesCard from "@/components/SpeciesCard.vue";
import { useHead } from '@unhead/vue';

useHead({
  title: 'Species of Dinosaur - Dinosaur Website',
  meta: [
    {
      key: 'description',
      name: 'description',
      content: 'Discover various dinosaur species, from the iconic Tyrannosaurus rex to the gentle Brachiosaurus. Explore detailed descriptions and fascinating facts about these magnificent creatures from the Mesozoic Era.'
    },
    {
      key: 'keywords',
      name: 'keywords',
      content: 'dinosaur species, Triceratops, Tyrannosaurus rex, Brachiosaurus, prehistoric life, Mesozoic Era, dinosaur facts'
    },
    {
      key: 'og:title',
      property: 'og:title',
      content: 'Species of Dinosaur - Dinosaur Website'
    },
    {
      key: 'og:description',
      property: 'og:description',
      content: 'Explore an array of dinosaur species, learn about their characteristics, and uncover intriguing facts about these fascinating creatures that roamed the Earth millions of years ago.'
    },
    {
      key: 'og:image',
      property: 'og:image',
      content: '/images/pterodactyl.svg' 
    }
  ]
});
const dinosaurs = ref([]);

// Function to fetch random dinosaur facts from the API
async function fetchRandomDinosaurFacts() {
  try {
    const response = await fetch(
      "https://dinosaur-facts-api.shultzlab.com/dinosaurs"
    );
    const data = await response.json();
    // Select 3 random dinosaurs from the array
    const shuffledData = shuffleArray(data);
    dinosaurs.value = shuffledData.slice(0, 3);
    console.log(dinosaurs.value);
  } catch (error) {
    console.error(error);
  }
}

// Function to randomize array - found the "Fisher-Yates Shuffle" method
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}

// Call the fetch function when the component mounts
onMounted(() => {
  fetchRandomDinosaurFacts();
});

// Static dinosaur data for pre-defined cards
const staticDinosaurs = [
  {
    name: "Triceratops Horridus",
    description:
      "Triceratops horridus was a large herbivorous dinosaur that lived in the late Cretaceous period. Its name means 'three-horned face,' which is fitting because it had three distinct facial horns. These dinosaurs were quite large, reaching up to 9 meters in length. They were known for their impressive frills and horns, which likely played a role in defense and display.",
    imageSrc: "/images/triceratops-skull.jpg",
    imageAlt: "Triceratops Skull",
  },
  {
    name: "Tyrannosaurus Rex",
    description:
      "Tyrannosaurus Rex, often abbreviated as T. rex, is one of the most famous dinosaurs. It lived during the late Cretaceous period and was a fierce predator. T. rex had large, serrated teeth and powerful jaws, which made it a top predator in its ecosystem. It could grow up to 12 meters in length and weigh up to 8 tons. Learn more about Tyrannosaurus rex at the",
    imageSrc: "/images/tyrannosaurus-rex.jpg",
    imageAlt: "Tyrannosaurus Rex",
  },
  {
    name: "Brachiosaurus Altithorax",
    description:
      "Brachiosaurus altithorax was a large, long-necked dinosaur that lived in the late Jurassic period. It was characterized by its long neck, which allowed it to reach high vegetation. Unlike many other sauropods, Brachiosaurus had longer front legs than back legs, giving it a unique posture among dinosaurs. It could grow up to 25 meters long and weighed around 50 tons.",
    imageSrc: "/images/brachiosaurus.jpg",
    imageAlt: "Brachiosaurus",
  },
  {
    name: "Baryonyx",
    description:
      "Baryonyx is a fascinating theropod dinosaur that lived during the Early Cretaceous period, around 130 million years ago. It was characterized by its elongated, crocodile-like snout and large claws, particularly on its first fingers. Baryonyx could grow up to 30 feet long and is believed to have primarily fed on fish, using its unique adaptations to hunt in aquatic environments. Its name means 'heavy claw,' reflecting its impressive physical features.",
    imageSrc: "/images/baryonyx.jpg",
    imageAlt: "Baryonyx",
  },
  {
    name: "Thalassodromeus",
    description:
      "Thalassodromeus is an impressive pterosaur that lived during the Early Cretaceous period, approximately 110 million years ago. This giant flying reptile is notable for its long, slender cranial crest and elongated jaw, which were likely adaptations for catching fish in coastal waters. With a wingspan reaching up to 33 feet, Thalassodromeus was one of the largest pterosaurs, showcasing remarkable gliding abilities. Its name means 'sea runner,' reflecting its specialized lifestyle as a predator in marine environments.",
    imageSrc: "/images/thalassodromeus.jpg",
    imageAlt: "Thalassodromeus",
  },
  {
    name: "Stegosaurus",
    description:
      "Stegosaurus is one of the most recognizable dinosaurs, known for its distinctive double row of large, bony plates along its back and its spiked tail, or thagomizer, used for defense. This herbivorous dinosaur lived during the Late Jurassic period, approximately 155 to 150 million years ago. Stegosaurus was relatively slow-moving, reaching lengths of about 9 meters (30 feet) and weighing up to 2 tons. Its unique anatomy suggests that it had a small brain relative to its body size, but it was likely well-adapted to its environment, feeding on low-lying plants.",
    imageSrc: "/images/stegosaurus.jpg",
    imageAlt: "Stegosaurus",
  },
];
</script>

<template>
  <main class="container mt-4 flex-grow-1">
    <h1>Species of Dinosaur</h1>
    <section class="container mt-5">
      <div class="row">
        <!-- Static Dinosaur Cards -->
        <article
          class="col-12 col-md-6 col-lg-4 mb-4"
          v-for="(staticDino, index) in staticDinosaurs"
          :key="index"
        >
          <SpeciesCard
            :name="staticDino.name"
            :description="staticDino.description"
            :imageSrc="staticDino.imageSrc"
            :imageAlt="staticDino.imageAlt"
          />
        </article>
      </div>
    </section>

    <section class="container mt-5">
      <h3 class="text-center mb-4">Here are 3 random dinosaur facts</h3>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item d-flex align-items-start mb-3"
          v-for="(dino, index) in dinosaurs"
          :key="index"
        >
          <Card :Name="dino.Name" :Description="dino.Description" />
        </li>
      </ul>
      <div class="text-center">
        <button
          @click="fetchRandomDinosaurFacts"
          class="btn mb-4"
          id="randomize"
        >
          Get 3 More Facts
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
#randomize {
  background-color: black;
  color: white;
  box-shadow: -10px 10px 20px rgb(0, 50, 0);
}
</style>
