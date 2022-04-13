<template>
  <header>
    <img
      src="https://imgs.search.brave.com/QnGPl54HOvgbg_cv1p9eFKidgEQrXluzz_n_X8UztHw/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5z/cG9ydHNibG9jay5u/ZXQvdXBsb2Fkcy8x/LzEvMC8zLzExMDM1/NTk0L2hvbGx5X3Nw/cmluZ19oaWdoX3Nj/aG9vbF9sb2dvLnBu/Zw"
      alt="bk_logo"
    />
    <nav class="wrapper">
      <RouterLink to="/">Home</RouterLink>
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
import { useTokenStore } from "@/stores/token";
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
.wrapper {
  display: flex;
  gap: 20px;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(230, 230, 230);
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
a.router-link-active {
  color: white;
  background-color: black;
  padding: 10px;
}
.wrapper {
  display: flex;
  gap: 50px;
}
header img {
  height: 100%;
}
</style>
