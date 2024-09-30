<script setup>

</script>

<template>
  <div> 
   <header>
      <nav>
        <li>
          <NuxtLink to="/#">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/gallery">Gallery</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/age-of-dinosaurs">Age of Dinosaurs</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/species-of-dinosaur">Species of Dinosaur</NuxtLink>
        </li>
      </nav>
    </header>
    <slot />
  </div>  
</template>
