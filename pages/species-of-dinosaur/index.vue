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
  <header>
    <h1>Welcome to the Species of Dinosaur Page</h1>
  </header>
  <main>
    <section class="container mt-5">
      <div class="row">
        <!-- Triceratops Horridus Card -->
        <article class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img
              src="@/assets/triceratops-skull.jpg"
              class="card-img-top"
              alt="Triceratops Skull"
            />
            <div class="card-body">
              <h5 class="card-title">Triceratops Horridus</h5>
              <p class="card-text">
                <strong>Triceratops horridus</strong> was a large herbivorous
                dinosaur that lived in the late Cretaceous period. Its name
                means 'three-horned face,' which is fitting because it had three
                distinct facial horns. These dinosaurs were quite large,
                reaching up to 9 meters in length. They were known for their
                impressive frills and horns, which likely played a role in
                defense and display.
              </p>
            </div>
          </div>
        </article>

        <!-- Tyrannosaurus Rex Card -->
        <article class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img
              src="@/assets/tyrannosaurus-rex.jpg"
              class="card-img-top"
              alt="Tyrannosaurus Rex"
            />
            <div class="card-body">
              <h5 class="card-title">Tyrannosaurus Rex</h5>
              <p class="card-text">
                <strong>Tyrannosaurus Rex</strong>, often abbreviated as T. rex,
                is one of the most famous dinosaurs. It lived during the late
                Cretaceous period and was a fierce predator. T. rex had large,
                serrated teeth and powerful jaws, which made it a top predator
                in its ecosystem. It could grow up to 12 meters in length and
                weigh up to 8 tons.
              </p>
            </div>
          </div>
        </article>

        <!-- Brachiosaurus Altithorax Card -->
        <article class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img
              src="@/assets/brachiosaurus.jpg"
              class="card-img-top"
              alt="Brachiosaurus"
            />
            <div class="card-body">
              <h5 class="card-title">Brachiosaurus Altithorax</h5>
              <p class="card-text">
                <strong>Brachiosaurus altithorax</strong> was a large,
                long-necked dinosaur that lived in the late Jurassic period. It
                was characterized by its long neck, which allowed it to reach
                high vegetation. Unlike many other sauropods, Brachiosaurus had
                longer front legs than back legs, giving it a unique posture
                among dinosaurs. It could grow up to 25 meters long and weighed
                around 50 tons.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="container mt-5">
      <h2>Here are 3 random dinosaur facts</h2>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(dino, index) in dinosaurs"
          :key="index"
        >
          <Card :Name="dino.Name" :Description="dino.Description" />
        </li>
      </ul>
    </section>
  </main>
</template>


<style scoped>

</style>