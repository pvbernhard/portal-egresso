<template>
  <div class="card">
    <div v-if="img" class="img">{{ img }}</div>
    <div class="wrapper">
      <div class="nome">{{ nome }}</div>
      <div class="resumo">{{ resumo }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  img?: string,
  nome: string,
  resumo: string
}>();
</script>

<style scoped>
.card {
  border-radius: 1rem;
  border: 2px solid var(--cor-primaria-dark);
  padding: 1rem;
  margin: 0.5rem;
  display: flex;
}

.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.img {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: var(--cor-primaria-dark);
  color: var(--cor-primaria-dark);
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
}

.nome {
  font-size: larger;
}
</style>
