<template>
   <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>
    <!-- new task form -->
    <div class="new-task-form">
        <TaskForm />
    </div>
    <!-- filter -->
      <nav class="filter">
        <button @click="filter = 'all'">All Tasks</button>
        <button @click="filter = 'fav'">Fav Tasks</button>
      </nav>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ tasks.totalCount }} left to do</p>
        <div  v-for="task in tasks.tasks" :key="task.id">
          <TaskDetails :task="task"/>
        </div>
    </div>
    <div class="task-list" v-if="filter === 'fav'">
      <p>You have {{ tasks.favCount }} favs left to do</p>
        <div  v-for="task in favs" :key="task.id">
          <TaskDetails :task="task"/>
        </div>
    </div>

    <button @click="tasks.$reset">Reset</button>
</template>

<script setup>
  import { useTaskStore } from './stores/TaskStore';
  import TaskDetails  from './components/TaskDetails.vue';
  import TaskForm from './components/TaskForm.vue';
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';

  const tasks = useTaskStore();
  const { favs } = storeToRefs(tasks);
  const filter = ref('all');

</script>

