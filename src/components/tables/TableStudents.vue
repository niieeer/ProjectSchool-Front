<template>
  <table>
      <thead>
        Liste Eleves
      </thead>
      <tr>
        <th>nom</th>
        <th>prenom</th>
        <th>sexe</th>
        <th>email</th>
        <th>classe</th>
      </tr>
      <tr v-for="student in studentStore.students" :key="student['@id']">
        <td>{{ student.lastname }}</td>
        <td>{{ student.firstname }}</td>
        <td>{{ student.sexe }}</td>
        <td>{{ student.email }}</td>
        <td>
          {{ student.classename }}
        </td>
        <td>
          <router-link :to="{ name: 'modify', params: { id: student.id } }">
          <button>Modify</button>
          </router-link>
          </td>
        <td>
          <button @click="$emit('deletee', student)">
            Delete
          </button>
        </td>
      </tr>
    </table>
</template>

<script setup>
import { useStudentStore } from "../../stores/students";
const studentStore = useStudentStore();
</script>

<style>
table {
  border: 1px solid black;
  width: 50%;
  height: 500px;
  padding: 20px;
  max-height: 500px;
  gap:20px;
};
table th{
  border: 1px solid black;
  padding: 20px;
  width:20px;
  
}
table td {
  border: 1px solid black;
  padding: 10px;
  width:20px;
  height: 20px;
  max-height: 500px;
  
}
table tr {
  overflow: scroll;
  height: 100px;
  max-height: 100px;
}
</style>
