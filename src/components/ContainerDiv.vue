<template>
  <div class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns:
    1fr min(65ch, 100%) 1fr;
  row-gap: 1rem;
}

.wrapper>* {
  grid-column: 2 !important;
}
</style>
