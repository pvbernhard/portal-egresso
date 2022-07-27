<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MenuItem from './components/MenuItem.vue'
import IconEgressos from './components/icons/IconEgressos.vue'
import IconDepoimentos from './components/icons/IconDepoimentos.vue'
import IconEstatisticas from './components/icons/IconEstatisticas.vue'
import IconLogin from './components/icons/IconLogin.vue'
</script>

<template>
  <nav>
    <div class="titulo">
      <RouterLink to="/">Portal do <strong>Egresso</strong></RouterLink>
    </div>
    <div class="menu">
      <MenuItem to="/egressos" :icon="IconEgressos" text="Egressos" />
      <MenuItem to="/depoimentos" :icon="IconDepoimentos" text="Depoimentos" />
      <MenuItem to="/" :icon="IconEstatisticas" text="Estatísticas" />
      <MenuItem to="/login" :icon="IconLogin" text="Login" />
    </div>
  </nav>
  <div class="page">
    <RouterView />
  </div>
  <div class="footer">
    Portal do Egresso
  </div>
</template>

<style scoped>
nav {
  grid-column: 1 / 4 !important;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--cor-primaria);
  color: var(--cor-primaria-texto);
  fill: var(--cor-primaria-texto);
  border-bottom: 3px solid var(--cor-primaria-dark);
}

.titulo {
  display: flex;
  align-items: center;
  font-size: xx-large;
  height: 5ch;
}

.titulo strong {
  font-weight: bold;
}

.menu {
  display: flex;
  column-gap: 2.5rem;
}

.page {
  grid-column: 1 / 4 !important;
}

.footer {
  grid-column: 1 / 4 !important;
  background-color: var(--cor-primaria);
  color: var(--cor-primaria-texto);
  font-size: large;
  text-align: center;
  padding: 3rem;
}
</style>
