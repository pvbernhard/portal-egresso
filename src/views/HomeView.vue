<template>
  <ContainerDiv class="container-msg">
    <div class="msg">
      <div class="img"><img src="@/assets/study.svg" /></div>
      <div class="texto">
        <div>Bem-vindo ao Portal do Egresso</div>
        <div>Você pode se cadastrar no botão abaixo</div>
        <div class="botao">
          <BotaoBase class="botao" to="/cadastrar" text="Cadastrar" />
        </div>
      </div>
    </div>
  </ContainerDiv>
</template>

<script lang="ts" setup>
import ContainerDiv from "../components/ContainerDiv.vue";
import BotaoBase from "../components/BotaoBase.vue";

</script>

<style scoped>
.container-msg {
  padding: 2rem;
  font-size: x-large;
  background-color: var(--cor-terciaria);
}

.msg {
  display: flex;
  align-items: center;
  column-gap: 2rem;
}

img {
  width: 10rem;
  height: 10rem;
}

.texto {
  flex-grow: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
}

.botao {
  width: fit-content;
}
</style>
