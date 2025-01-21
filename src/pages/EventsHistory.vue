<template>
  <div>
    <h1>Povijest zadataka</h1>
    <TaskHistory :tasks="tasks" />
  </div>
</template>

<script>
import TaskHistory from '@/components/TaskHistory.vue';

export default {
  name: 'EventsHistory',
  components: {
    TaskHistory,
  },
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin-bottom: 30px;
}
</style>
