<template>
<div class="cadastro m-6">
  <h1 class="is-size-2 my-2">Perfil</h1>
  <div class="field">
    <label class="label">Nome</label>
    <div class="control">
      <input class="input" type="text" :placeholder="egresso.nome" disabled>
    </div>
  </div>
  <div class="field">
    <label class="label">E-mail</label>
    <div class="control">
      <input class="input" type="text" :placeholder="egresso.email" disabled>
    </div>
  </div>
  <div class="field">
    <label class="label">CPF</label>
    <div class="control">
      <input class="input" type="text" :placeholder="egresso.cpf" disabled>
    </div>
  </div>
  <div class="field">
    <label class="label">Profissão</label>
    <div class="control">
      <input class="input" type="text" :placeholder="egresso.profissao" disabled>
    </div>
  </div>
  <div class="field">
    <label class="label">Cargo</label>
    <div class="control">
      <input class="input" type="text" :placeholder="egresso.cargo" disabled>
    </div>
  </div>
  <div class="field">
    <label class="label">Curso</label>
    <div class="control">
      <input class="input" type="text" :placeholder="egresso.curso" disabled>
    </div>
  </div>
  <div class="field">
    <label class="label">Contato</label>
    <div class="control">
      <input class="input" type="text" :placeholder="egresso.contato" disabled>
    </div>
  </div>
</div>

</template>

<script setup>
const egresso = {
  nome: 'Nome',
  email: 'nome@email.com',
  cpf: '000.000.000-00',
  profissao: 'Profissão',
  cargo: 'Cargo',
  curso: 'Curso',
  contato: '(00) 0000-0000'
};
</script>

<style scoped>

</style>
