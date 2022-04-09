import { defineStore } from "pinia";

export const useClasseStore = defineStore({
  id: "classes",
  state: () => ({
    classes: [],
  }),
  persist: true,
  getters: {
    getClasses: (state) => state.classes,
  },
  actions: {},
});
