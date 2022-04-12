import { defineStore } from "pinia";

export const useProfessorStore = defineStore({
  id: "professors",
  state: () => ({
    professors: []
  }),
  persist: true,
  getters: {
  },
  actions: {},
});