<template>
<div class="cadastro m-6">
  <h1 class="is-size-2 my-2">Login</h1>
  <div class="field">
    <label class="label">E-mail</label>
    <div class="control">
      <input class="input" type="text" placeholder="nome@email.com">
    </div>
  </div>
  <div class="field">
    <label class="label">Senha</label>
    <div class="control">
      <input class="input" type="password">
    </div>
  </div>
  <div class="control">
    <RouterLink to="/perfil" class="button is-info">Entrar</RouterLink>
  </div>
</div>

</template>

<script setup>

</script>

<style scoped>

</style>
