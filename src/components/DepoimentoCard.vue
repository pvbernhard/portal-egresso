<template>
  <div class="card">
    <div class="wrapper">
      <div class="resumo">{{ resumo }}</div>
    </div>
    <div class="wrapper-img">
      <div class="nome">Por: {{ nome }}</div>
      <div v-if="img" class="img">{{ img }}</div>
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
  flex-direction: column;
}

.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.wrapper-img {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
}

.nome {
  font-size: larger;
  font-style: italic;
}
</style>
