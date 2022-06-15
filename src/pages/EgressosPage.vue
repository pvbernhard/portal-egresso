<template>
<div class="columns m-5">
  <div class="column p-5 m-2">
    <div class="egressos-wrapper">
      <p class="is-size-3 titulo">Egressos</p>

      <div class="egressos-cards">
        <div v-for="(egresso, index) in egressos" :key="index" class="box egresso has-shadow m-2">
          <figure class="image is-96x96 is-rounded">
            <img src="@/assets/test-acc.png" alt="Placeholder image">
          </figure>
          <div class="egresso-dados">
            <div class="egresso-nome">{{egresso.nome}}</div>
            <div class="eggresso-curso">{{egresso.curso}}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script setup>

const egressos = [
  { nome: 'Nome 1', curso: 'Curso 1' },
  { nome: 'Nome 2', curso: 'Curso 2' },
  { nome: 'Nome 3', curso: 'Curso 3' },
  { nome: 'Nome 4', curso: 'Curso 4' },
  { nome: 'Nome 5', curso: 'Curso 5' },
];

</script>

<style scoped>
.egressos-wrapper {
  color: white;
}

.egressos-cards {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.card {
  width: 25%;
}

.egresso {
  display: flex;
  align-items: stretch;
}

.egresso-dados {
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 1.25rem;
}

.box.egresso {
  width: 15rem;
  height: 8rem;
  overflow: hidden;
}

.mais {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  background-color: var(--cor-primaria);
  border-radius: 0.5rem;
}
</style>
