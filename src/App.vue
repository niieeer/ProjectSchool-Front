<template>
  <header>
    <img src="src\assets\logo.png" alt="bk_logo" />
    <nav class="wrapper">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink v-if="store.token == ''" to="/login">Login</RouterLink>
      <RouterLink v-if="store.token" to="/students">List</RouterLink>
      <RouterLink v-if="store.token" to="/addstudent">Add Student</RouterLink>
      <RouterLink v-if="store.token" to="/addprof">Add Professor</RouterLink>
      <RouterLink v-if="store.token" to="/logout">Logout</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import isLog from "@/plugins/loginCheck";
import { useTokenStore } from "@/stores/token";
const store = useTokenStore();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

.wrapper {
  display: flex;
  gap: 20px;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  height: 100px;
  padding: 20px;
}
.wrapper a {
  text-decoration: none;
  color: black;
  font-weight: 600;
  text-decoration: underline rgba(255, 255, 255, 0);
  font-size: 20px;
  transition: 0.4s;
}

.wrapper a:hover {
  text-decoration: underline;
}

.wrapper {
  display: flex;
  gap: 50px;
}
header img {
  height: 100%;
}
body,
html {
  font-family: "Open Sans", sans-serif;
  padding: 0;
  margin: 0;
  background-color: rgb(228, 231, 232);
  height: 100vh;
}
</style>
