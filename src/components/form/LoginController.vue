<template>
  <div>
    <form @submit.prevent="login">
      <h1>Connexion</h1>
      <div>
        <label for="">Email</label>
        <input
          type="email"
          name="email"
          v-model="user.email"
          placeholder="Type your email"
        />
      </div>
      <div>
        <label for="">Password</label>
        <input
          type="password"
          v-model="user.password"
          placeholder="Type your password"
        />
      </div>
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { useTokenStore } from "@/stores/token";
// User bind avec les champs du form
const user = {
  email: "",
  password: "",
};

const store = useTokenStore();

// Vérification des données (pas fini) et lancement de la fonction handleSubmit si valide
function login() {
  if (user.email !== "" && user.password !== "") {
    handleSubmit(user);
  } else {
    console.log("Il faut remplir tout les champs");
  }
}

async function handleSubmit(user: object) {
  const response = await axios
    .post("http://127.0.0.1:8000/api/login_check", user)
    .then((r) => {
      return r.data;
    })
    .catch((err) => console.log(err));
  if (response.token && response.refresh_token) {
    store.token = response.token;
    store.refresh_token = response.refresh_token;
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 25%;
  min-width: 300px;
  background-color: rgb(255, 255, 255);
  padding: 10px 40px 40px 40px;
  border-radius: 10px;
  gap: 40px;
  box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.081);
  margin: auto;
}
form input {
  padding: 15px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.447);
}

form div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
textarea:focus,
input:focus {
  outline: none;
}
form h1 {
  text-align: center;
}

form input[type="submit"] {
  background-color: #628bc2;
  color: white;
  border-radius: 20px;
  margin-top: 3%;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

form input[type="submit"]:hover {
  background-color: rgba(151, 111, 74, 0.897);
}
</style>
