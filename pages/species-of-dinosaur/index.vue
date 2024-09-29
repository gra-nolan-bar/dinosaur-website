<script setup>
import { ref, onMounted } from "vue";
// import Card from "@/components/Card.vue";

const dinosaurs = ref([])

onMounted(async () => {
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
});

// Function to randomize array - found the "Fisher-Yates Shuffle" method
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}

</script>

<template>
  
  <h1>Welcome to the Species of Dinosaur Page</h1>
  <h2>Here are 3 random dinosaur facts</h2>
  <ul>
    <li v-for="(dino, index) in dinosaurs" :key="index">
      <Card 
        :Name="dino.Name"
        :Description="dino.Description"
      />
    </li>
  </ul>
</template>

<style scoped></style>