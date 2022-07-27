<template>
  <div class="titulo">Depoimentos</div>
  <ContainerDiv class="container">
    <DepoimentoCard nome="Nome" resumo="Resumo" />
    <DepoimentoCard img="Teste" nome="Nome" resumo="Resumo" />
    <DepoimentoCard nome="Nome" resumo="Resumo" />
  </ContainerDiv>
</template>

<script lang="ts" setup>
import ContainerDiv from "../components/ContainerDiv.vue";
import DepoimentoCard from "../components/DepoimentoCard.vue";

</script>

<style scoped>
.titulo {
  font-size: xx-large;
  text-align: center;
  margin-bottom: 1rem;
}

.container-msg {
  padding: 2rem;
  background-color: var(--cor-terciaria);
}

.msg {
  display: flex;
  column-gap: 2rem;
}

img {
  width: 10rem;
  height: 10rem;
}

.texto {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  font-size: medium;
}

.texto>input {
  margin-bottom: 1rem;
  border-radius: 1rem;
  padding: 0.5rem;
  border: 3px solid var(--cor-primaria-dark);
  font-size: large;
}

.botao {
  width: fit-content;
  display: flex;
  column-gap: 1rem;
  width: 100%;
}
</style>
