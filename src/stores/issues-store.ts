import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useIssuesStore = defineStore('counter', () => {
  const state = ref<string[]>([]);
  const labels = ref<string[]>([]);

  return {
    // state
    state,
    labels,
    // getters
    // setters
    // actions
    toggleLabel(labelName: string) {
      if (labels.value.includes(labelName)) {
        labels.value = labels.value.filter((label) => label !== labelName);
        return;
      }

      labels.value.push(labelName);
    },
  };
});
