<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img class="logo-ufma" src="@/assets/brasao-ufma.png" />
        <p class="nome-portal navbar-item is-size-3">
          <span>Portal</span>
          <span>do</span>
          <span>Egresso</span>
        </p>
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <RouterLink to="/" class="navbar-item"> Home </RouterLink>
        <RouterLink to="/egressos" class="navbar-item"> Egressos </RouterLink>
        <RouterLink to="/depoimentos" class="navbar-item"> Depoimentos </RouterLink>
        <!-- <a class="navbar-item"> Dados </a> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <RouterLink to="/cadastro" class="button is-info">
              <strong>Cadastrar</strong>
            </RouterLink>
            <RouterLink to="/login" class="button is-light"> Entrar </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Passion+One&display=swap');
.logo-ufma {
  height: 5rem;
  width: 5rem;
}

.navbar-brand .navbar-item img {
  max-height: unset;
  min-height: unset;
}

.nome-portal {
  display: flex;
  flex-direction: column;
  font-family: 'Passion One', cursive;
  line-height: 1.5rem;
}

.is-info {
  background-color: var(--cor-primaria) !important;
}

.is-info:hover {
  background-color: var(--cor-primaria-dark) !important;
}

.navbar-start .navbar-item:hover {
  color: var(--cor-primaria) !important;
  background-color: var(--cor-primaria-light) !important;
}
</style>
