<template>
  <!-- Eleve nom prenom classe -->
  <form @submit.prevent="addNote">
    <label for="subject">Matière</label>
    <select name="subject-select" id="subject-select" v-model="newNote.subject">
      <option
        v-for="subject in subjectStore.subjects"
        :key="subject.id"
        :value="subject['@id']"
      >
        {{ subject.name }}
      </option>
    </select>
    <label for="note">Note</label>
    <input type="number" name="note" id="note" v-model="newNote.note" />
    <input type="submit" value="Ajouter la note" />
  </form>
</template>

<script setup>
import { useSubjectStore } from "@/stores/subjects";
import { useStudentStore } from "@/stores/students";
import { useTokenStore } from "@/stores/token";
import axios from "axios";

const subjectStore = useSubjectStore();
const studentStore = useStudentStore();
const store = useTokenStore();
const newNote = {
  subject: "",
  note: 0,
};

async function addNote() {
  let r = await axios.post("http://127.0.0.1:8000/api/subjects", newNote, {
    headers: {
      "Content-Type": "application/ld+json",
      Authorization: `Bearer ${store.token}`,
    },
  })
  .then((resp) => {
      return resp;
  })
  .catch((e) => console.log(e));
  console.log(r);
}
</script>

<style></style>
