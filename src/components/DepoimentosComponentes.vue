<template>
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
    <div class="box depoimento depoimento-dados has-shadow m-2 mais">Ver mais...</div>
  </div>

</div>
</template>

<script setup>
defineProps({
  depoimentos: {
    type: Array,
    required: true,
  },
});

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
</style>
