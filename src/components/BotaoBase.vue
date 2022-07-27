<template>
  <RouterLink class="wrapper" :to="to">
    <div class="text">{{ text }}</div>
  </RouterLink>
</template>

<script lang="ts" setup>
defineProps<{
  text: string,
  to: string
}>();
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  column-gap: 1rem;
  border-radius: 1rem;
  padding: 1rem;
  border: 3px solid var(--cor-primaria-dark);
  justify-content: center;
}

.wrapper:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
