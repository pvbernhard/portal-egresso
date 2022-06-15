<template>
<div class="columns m-5">
  <div class="column p-5 m-2">
    <div class="egressos">
      <EgressosComponente :egressos="[
        {nome: 'Nome 1', curso: 'Curso 1'},
        {nome: 'Nome 2', curso: 'Curso 2'},
        {nome: 'Nome 3', curso: 'Curso 3'},
        {nome: 'Nome 4', curso: 'Curso 4'},
        {nome: 'Nome 5', curso: 'Curso 5'},
      ]" />
    </div>
    <div class="buscar-egressos">
      <BuscarEgressos />
    </div>
  </div>
  <div class="column p-5 m-2">
    <div class="depoimentos">
      <DepoimentosComponentes :depoimentos="[
        {texto: 'Bla bla bla bla bla bla bla bla bla bla', egresso: 'Nome 1'},
        {texto: 'Bla bla bla bla', egresso: 'Nome 2'},
        {texto: 'Bla bla bla bla', egresso: 'Nome 3'},
        {texto: 'Bla bla bla bla', egresso: 'Nome 4'},
      ]" />
    </div>
  </div>
</div>

</template>

<script setup>
import EgressosComponente from '../components/EgressosComponente.vue';
import BuscarEgressos from '../components/BuscarEgressos.vue';
import DepoimentosComponentes from '../components/DepoimentosComponentes.vue';
</script>

<style scoped>
.column {
  background-color: var(--cor-primaria);
  border-radius: 0.5rem;
}
</style>
