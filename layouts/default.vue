<script setup>

</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
      <div class="container-fluid">
        <NuxtLink to="/" class="navbar-brand text-white">
          <img
            src="@/assets/pterodactyl.svg"
            alt="Brand Logo"
            width="50"
            height="50"
            class="d-inline-block"
          />Dinosaurs</NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link text-white">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/gallery" class="nav-link text-white">Images</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/age-of-dinosaurs" class="nav-link text-white">Age of Dinosaurs</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/species-of-dinosaur" class="nav-link text-white">Species of Dinosaur</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="flex-grow-1">
      <slot />
    </div>
    <footer class="bg-success text-white mt-5">
      <div class="container py-3 d-flex justify-content-between align-items-center">
        <img src="../assets/pterodactyl.svg" alt="Brand Logo" width="50" height="50" class="d-inline-block align-text-top" />
        <span>&copy; 2024 Dinosaurs. All rights reserved.</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.nav-link {
  align-items: right;
}
</style>