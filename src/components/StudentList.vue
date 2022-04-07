<template>
  <div>
    <table>
      <thead>
        Liste Eleve
      </thead>
      <tr>
        <th>nom</th>
        <th>prenom</th>
        <th>sexe</th>
        <th>email</th>
        <th>classe</th>
      </tr>
      <tr v-for="student in studentStore.students" :key="student['@id']">
        <td>
          {{ student.lastname }}
        </td>
        <td>{{ student.firstname }}</td>
        <td>
          {{ student.sexe }}
        </td>
        <td>{{ student.email }}</td>
        <td>
          {{ student.classe }}
        </td>
        <td>
          <button>Modify</button>
        </td>
        <td>
          <button class="redbutton">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useTokenStore } from "@/stores/token";
import { useStudentStore } from "@/stores/students";
import axios from "axios";
// import axios from "axios";

const store = useTokenStore();
const studentStore = useStudentStore();

onMounted(() => {
  fetchStudents();
});

async function fetchStudents() {
  let response = await fetch("http://127.0.0.1:8000/api/students", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${store.token}`,
    },
  })
    .then((promise) => promise.json())
    .catch((e) => console.log(e));
  if (response) {
    studentStore.students = response["hydra:member"];
  }
}

// async function fetchClasses() {
//     let r = await axios.get("")
// }
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  padding: 5px;
}

table {
  margin: auto;
  margin-top: 200px;
  padding: 30px;
  width: 50%;
}

td button {
  width: 100%;
  height: 30px;
}

.redbutton {
  background-color:#C82333;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}
</style>
