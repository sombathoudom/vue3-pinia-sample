import { defineStore } from "pinia";
import { useArrayFilter, useArrayFind, useArrayReduce } from '@vueuse/core';



export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks : [
            {id:1, title:'Change web design', isFav: false},
            {id:2, title:'Bug problem on wallet', isFav: true},
            {id:3, title:'Change docker', isFav: false},
            {id:4, title:'Fix logic on web', isFav: true},
        ]
    }),
    getters: {
        favs() {
            const result = useArrayFilter(this.tasks, t => t.isFav)
            return result.value;
        },
        favCount() {
            //sum = prev value
            //val = current value
            const sum = useArrayReduce(this.tasks, (sum,val) => val.isFav ? sum + 1 : sum,0);
            return sum.value
        },
        totalCount: (state) => {
            return state.tasks.length;
        }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task);
        },
        removeTask(id) {
            const result = useArrayFilter(this.tasks, t => t.id !== id);
            return  this.tasks = result.value;
        },
        toggleFav(id) {
            const result = useArrayFind(this.tasks, t => t.id === id);
            return result.value.isFav = !result.value.isFav;
        }
    }
});