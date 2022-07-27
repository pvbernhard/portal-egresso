<template>
  <RouterLink :to="to">
    <div class="wrapper">
      <div class="icon">
        <component :is="icon" />
      </div>
      <div class="text">{{ text }}</div>
    </div>
  </RouterLink>
</template>

<script lang="ts" setup>
defineProps<{
  icon?: unknown,
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
}

.wrapper:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
