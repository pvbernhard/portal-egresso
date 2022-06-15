<template>
<div class="columns m-5">
  <div class="column p-5 m-2">
    <div class="depoimentos-wrapper">
      <p class="is-size-3 titulo">Depoimentos</p>

      <div class="depoimentos-cards">
        <div v-for="(depoimento, index) in depoimentos"
        :key="index"
        class="box depoimento has-shadow m-2">
          <div class="depoimento-dados">
            <div class="depoimento-nome">{{depoimento.texto}}</div>
            <div class="eggresso-curso">{{depoimento.egresso}}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script setup>

const depoimentos = [
  { texto: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla', egresso: 'Nome 1' },
  { texto: 'Bla bla bla bla', egresso: 'Nome 2' },
  { texto: 'Bla bla bla bla', egresso: 'Nome 3' },
  { texto: 'Bla bla bla bla', egresso: 'Nome 4' },
];

</script>

<style scoped>
.depoimentos-wrapper {
  color: white;
}

.depoimentos-cards {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.card {
  width: 25%;
}

.depoimento {
  display: flex;
  align-items: stretch;
}

.depoimento-dados {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 0.9rem;
}

.box.depoimento {
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
