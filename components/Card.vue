
<script setup>
import {defineProps} from "vue";

const props = defineProps({
  Name: String,
  Description: String
})
</script>

<template>
  <div class="card">
    <h3>{{ props.Name }}</h3>
    <p>{{ props.Description }}</p>
  </div>
</template>

<style scoped>
  .card {
    border-style: solid;
    margin: 1px;
  }
</style>