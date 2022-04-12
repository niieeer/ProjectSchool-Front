import { defineStore } from "pinia";
import { useClasseStore } from "./classes";
const classeStore = useClasseStore();
export const useStudentStore = defineStore({
  id: "students",
  state: () => ({
    students: [],
    name: [],
    error: '',
  }),
  persist: true,
  getters: {
    getStudents: (state) => state.students.map((student: studentType) => {
      classeStore.classes.map((classe: classeType) => {
        if (student.classe == classe['@id']) {
          student.classename = classe.name
        }
      })
    }),
  },
  actions: {},
});
type studentType = {'classe': String, 'classename'?: String}
type classeType = {'name': String, '@id': String}