<script setup>
import { RouterView } from 'vue-router';
import CabecalhoPrincipal from './components/CabecalhoPrincipal.vue';
</script>

<template>
<div>
  <CabecalhoPrincipal />
  <RouterView />
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Portal do Egresso</strong>
      </p>
    </div>
  </footer>
</div>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css");

:root {
  --cor-primaria: #F66B8C;
  --cor-primaria-dark: #d65d79;
  --cor-primaria-light: #f7f0f2;
}

</style>
