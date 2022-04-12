<template>
  <div>
    <form @submit.prevent="verifDatas">
      <label for="lastname">Nom</label>
      <input
        type="text"
        name="lastname"
        v-model="newStudent.lastname"
        placeholder="LastName"
      />
      <label for="firstname">Prenom</label>
      <input
        type="text"
        name="firstname"
        v-model="newStudent.firstname"
        placeholder="FirstName"
      />
      <label for="sexe">Sexe</label>
      <select name="sexe" id="sexe" v-model="newStudent.sexe">
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        v-model="newStudent.email"
        placeholder="Email"
      />
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        v-model="newStudent.password"
        placeholder="Password"
      />
      <label for="classe">Classe</label>
      <select
        name="classe-select"
        id="classe-select"
        v-model="newStudent.classe"
      >
        <option
          v-for="classe in storeClasse.classes"
          :key="classe.id"
          :value="classe['@id']"
        >
          {{ classe.name }}
        </option>
      </select>
      <input type="submit" value="ADD STUDENT" />
      <p class="red" v-if="studentStore.error !== ''">{{ studentStore.error }}</p>
    </form>
  </div>
</template>

<script setup>
import { useClasseStore } from "../../stores/classes";
import { useTokenStore } from "@/stores/token";
import { useStudentStore } from "@/stores/students";
import axios from "axios";
const studentStore = useStudentStore();
const store = useTokenStore();
const storeClasse = useClasseStore();
const newStudent = {
  sexe: "",
  classe: "",
  email: "",
  roles: ["Student"],
  password: "",
  lastname: "",
  firstname: "",
};
const verifDatas = () => {
  if (
    (newStudent.lastname,
    newStudent.firstname,
    newStudent.email,
    newStudent.password !== "")
  ) {
    return addStudent();
  } else studentStore.error = "Certains champs sont vides";
};

async function addStudent() {
  let r = await axios
    .post("http://127.0.0.1:8000/api/students", newStudent, {
      headers: {
        "Content-Type": "application/ld+json",
        Authorization: `Bearer ${store.token}`,
      },
    })
    .then((resp) => {
      return resp
    })
    .catch((e) => console.log(e));

  if (r.status == 201) {
    studentStore.error = "Ajout remine ";
  }

  if (r.status == 400) {
    studentStore.error = "Champs invalide";
  }

  if (r.status == 422) {
    studentStore.error = "Unprocessable entity";
  }
}
</script>

<style scoped>
.red {
  color: red;
}

form {
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 50px;
}
form input {
  padding: 20px;
}
</style>
