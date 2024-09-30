<script setup>
import AccordionDinos from "~/components/AccordionDinos.vue";

const dinosaurData = [
  {
    header: 'Mesozoic Era',
    content: 'The Mesozoic Era, often called the "Age of Dinosaurs," lasted from about 252 to 66 million years ago. It is divided into three periods: the Triassic, Jurassic, and Cretaceous. This era witnessed the rise and fall of dinosaurs, with each period showing different stages of dinosaur evolution and diversity. The Mesozoic Era was characterized by a variety of ecosystems, ranging from dense forests to arid deserts, providing habitats for numerous dinosaur species. Additionally, this era saw the emergence of the first birds and mammals, setting the stage for the future evolution of life on Earth.'
  },
  {
    header: 'Triassic Period',
    content: 'The Triassic Period, from about 252 to 201 million years ago, marks the beginning of the Mesozoic Era. Early dinosaurs such as Coelophysis and Plateosaurus appeared during this time. The Triassic was a period of rapid evolutionary change and adaptation, setting the stage for the diversity of dinosaurs that followed. The climate was predominantly warm and dry, featuring vast deserts and seasonal rains that influenced species evolution. By the end of the Triassic, the groundwork was laid for the Jurassic Period, when dinosaurs would rise to dominance as the primary terrestrial vertebrates.'
  },
  {
    header: 'Jurassic Period',
    content: 'The Jurassic Period, spanning from 201 to 145 million years ago, is known for the flourishing of dinosaurs like Allosaurus and Brachiosaurus. This era witnessed significant diversification, leading to the emergence of new species and even the first birds. The warm and wet climate fostered lush vegetation, creating abundant habitats for both herbivores and predators. As dinosaurs thrived, ecosystems became increasingly complex, with diverse flora and fauna coexisting in dynamic environments. This rich biodiversity laid the foundation for the even more varied life forms that would arise in the subsequent Cretaceous Period.'
  },
  {
    header: 'Cretaceous Period',
    content: 'The Cretaceous Period, lasting from 145 to 66 million years ago, was the final period of the Mesozoic Era. Iconic dinosaurs like Tyrannosaurus rex and Triceratops roamed the Earth during this time, showcasing remarkable adaptations and diversity. The climate varied, leading to diverse ecosystems filled with both flowering plants and a rich array of animal life, creating a vibrant tapestry of prehistoric life. However, this period came to a dramatic close with a mass extinction event that wiped out most dinosaurs and many other species, primarily attributed to a catastrophic asteroid impact that reshaped the planet and marked the end of their reign on Earth.',
    image: {
      src: '/images/asteroid-1280.jpg', 
      alt: 'Asteroid Impact', 
      class: 'img-fluid mt-3 w-50', 
    }
  }
];
</script>

<template>
  <main class="container mt-4 flex-grow-1">
    <h1>Age of Dinosaurs</h1>
    <AccordionDinos :sections="dinosaurData" />
  </main>
</template>

<style scoped>

</style>
