<template>
  <table>
      <thead>
        Liste Professeurs
      </thead>
      <tr>
        <th>nom</th>
        <th>prenom</th>
        <th>email</th>
        <th>salary</th>
        <th>seniority</th>
        <th>age</th>
        <th>classe</th>
      </tr>
      <tr v-for="professor in professorStore.professors" :key="professor['@id']">
        <td>{{ professor.lastname }}</td>
        <td>{{ professor.firstname }}</td>
        <td>{{ professor.email }}</td>
        <td>{{ professor.salary }}</td>
        <td>{{ professor.seniority }}</td>
        <td>{{ professor.age }}</td>
        <td>
          la classe du prof
        </td>
        <td><router-link :to="{ name: 'modify', params: { id: professor.id } }">Modify</router-link></td>
        <td>
          <button @click="$emit('deleteprof', professor)" class="redbutton">
            Delete
          </button>
        </td>
      </tr>
    </table>
</template>

<script setup>
import {useProfessorStore} from '@/stores/professors';
const professorStore = useProfessorStore();
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