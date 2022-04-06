<template>
  <div>
    <form @submit.prevent="login">
      <h1>Connexion</h1>
      <label for="">Email</label>
      <input type="email" name="email" v-model="user.email" />
      <label for="">Password</label>
      <input type="password" v-model="user.password" />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
// User bind avec les champs du formq
const user = {
  email: "",
  password: "",
};

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
    .post("http://127.0.0.1:8000", user)
    .then((r) => {
      return r;
    })
    .catch((err) => console.log(err));
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: rgba(135, 155, 199, 0.507);
  padding: 20px;
  border-radius: 10px;
  gap: 10px;
}
form input {
  padding: 10px;
}
form h1 {
  text-align: center;
}

form input[type="submit"] {
  background-color: rgb(136, 156, 211);
  margin-top: 2%;
  border: none;
  cursor: pointer;
}

form input[type="submit"]:hover {
  background-color: rgb(130, 161, 246);
}
</style>
