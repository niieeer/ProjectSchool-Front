<template>
  <form @submit.prevent="">
      <label for="lastname">Nom</label>
      <input
        type="text"
        name="lastname"
        v-model="newProf.lastname"
        placeholder="LastName"
      />
      <label for="firstname">Prenom</label>
      <input
        type="text"
        name="firstname"
        v-model="newProf.firstname"
        placeholder="FirstName"
      />
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        v-model="newProf.email"
        placeholder="Email"
      />
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        v-model="newProf.password"
        placeholder="Password"
      />
      <label for="classe">Classe</label>
      <select name="classe-select" id="classe-select" v-model="newProf.classe">
        <option
          v-for="classe in storeClasse.classes"
          :key="classe.id"
          :value="classe['@id']"
        >
          {{ classe.name }}
        </option>
      </select>
      <label for="salary">Salary</label>
      <input
        type="number"
        name="salary"
        v-model="newProf.salary"
        placeholder="Salary"
      />
      <label for="seniority">Seniority</label>
      <input
        type="text"
        name="seniority"
        v-model="newProf.seniority"
        placeholder="seniority"
      />
      <label for="age">Age</label>
      <input
        type="number"
        name="age"
        v-model="newProf.age"
        placeholder="age"
      />
      <input type="submit" value="Modifier le professor" />
      <!-- <p class="red" v-if="studentStore.error !== ''">{{ studentStore.error }}</p> -->
    </form>
</template>

<script setup>
import { useClasseStore } from "../../stores/classes";
import { useProfessorStore } from "@/stores/professor";
import { useTokenStore } from "@/stores/token"
import { useRoute } from "vue-router";

import axios from "axios";

const store = useTokenStore();
const storeClasse = useClasseStore();
const route = useRoute();
const storeProfessor = useProfessorStore();
const prof =  professorStore.professors.find((e) => e.id == id);

</script>

<style>

</style>