<script setup>
import AccordionDinos from "~/components/AccordionDinos.vue";
import asteroidPhoto from "@/assets/asteroid-1280.jpg"

const dinosaurData = [
  {
    header: 'Mesozoic Era',
    content: 'The Mesozoic Era, often called the "Age of Dinosaurs," lasted from about 252 to 66 million years ago. It is divided into three periods: the Triassic, Jurassic, and Cretaceous. This era witnessed the rise and fall of dinosaurs, with each period showing different stages of dinosaur evolution and diversity.'
  },
  {
    header: 'Triassic Period',
    content: 'The Triassic Period, from about 252 to 201 million years ago, marks the beginning of the Mesozoic Era. Early dinosaurs such as Coelophysis and Plateosaurus appeared during this time. The Triassic was a period of rapid evolutionary change and adaptation, setting the stage for the diversity of dinosaurs that followed.'
  },
  {
    header: 'Jurassic Period',
    content: 'The Jurassic Period, spanning from 201 to 145 million years ago, is known for the flourishing of dinosaurs like Allosaurus and Brachiosaurus. This period saw the diversification of dinosaurs into various forms, including the first birds. The Jurassic climate was warm and wet, providing ideal conditions for the growth of lush vegetation.'
  },
  {
    header: 'Cretaceous Period',
    content: 'The Cretaceous Period, lasting from 145 to 66 million years ago, was the final period of the Mesozoic Era. Iconic dinosaurs like Tyrannosaurus rex and Triceratops roamed the Earth during this time. This period ended with a mass extinction event, wiping out most of the dinosaurs and marking the end of their reign on Earth.',
    image: {
      src: asteroidPhoto, // Image source
      alt: 'Asteroid Impact', // Alternative text
      class: 'img-fluid mt-3 w-50', // Bootstrap classes for styling
    }
  }
];
</script>

<template>
  <div>
    <h1>Age of Dinosaurs</h1>
    <AccordionDinos :sections="dinosaurData" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 20px;
}
</style>
