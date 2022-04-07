<script setup lang="ts">
import LoginController from "../components/form/LoginController.vue";
import { useTokenStore } from "@/stores/token";

const store = useTokenStore();
</script>

<template>
  <main>
    <LoginController class="loginController" v-if="store.token == ''" />
  </main>
</template>

<style scoped>
.loginController {
  margin-top: 10%;
}
body {
  background: url(https://images.adsttc.com/media/images/5e67/f394/b357/658e/fb00/036b/large_jpg/03_brenas_doucerain%C2%A9_Studio_Erick_Saillet.jpg?1583870856)
    no-repeat fixed center;
  background-size: cover;
}
</style>
