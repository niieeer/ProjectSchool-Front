import { defineStore } from "pinia";

export const useStudentStore = defineStore({
  id: "students",
  state: () => ({
    students: [],
  }),
  persist: true,
  getters: {
    getStudents: (state) => state.students,
  },
  actions: {},
});
