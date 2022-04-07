<script setup lang="ts">
import LoginController from "../components/form/LoginController.vue";
import { useTokenStore } from "@/stores/token";

const store = useTokenStore();

</script>

<template>
  <main>
    <h1>Accueil</h1>
    <LoginController class="loginController" v-if="store.token == ''" />
  </main>
</template>

<style>
h1 {
  text-align: center;
}
.loginController {
  margin-top: 100px;
}
</style>
