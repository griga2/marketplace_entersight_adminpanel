import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore('globalStore', () => {
    const user = ref({
        name: ''
    });

    return {
        user
    }
})