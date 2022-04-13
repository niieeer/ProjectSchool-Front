<template>
 <Navigation />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { useTokenStore } from "@/stores/token";
import Navigation from "./components/essential/Navigation.vue";
const store = useTokenStore();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
