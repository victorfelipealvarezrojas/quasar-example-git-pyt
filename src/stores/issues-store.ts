import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useIssuesStore = defineStore('counter', () => {
  const state = ref('');
  const labels = ref<string[]>([]);

  return {
    // state
    state,
    labels,
    // getters
    // setters
    // actions
    toggleLabel(labelName: string) {
      throw new Error('No Implement' + labelName);
    },
  };
});
