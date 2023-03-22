<template>
   <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Title" v-model="newTask">
        <button>Submit</button>
   </form>
</template>

<script setup>
    import { ref } from 'vue'; 
    import { useTaskStore  } from '../stores/TaskStore';
    const task = useTaskStore();
    const newTask = ref('');

    const handleSubmit = () => {
        if(newTask.value.length) {
            task.addTask({
                title: newTask.value,
                isFav: false,
                id: Math.floor(Math.random() * 10000)
            });
            newTask.value = '';
        }
    }
</script>

<style lang="scss" scoped>

</style>