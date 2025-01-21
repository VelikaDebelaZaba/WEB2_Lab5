<template>
  <div>
    <h1>TO-DO LISTA</h1>

    <!-- 9. barem jedna komponenta mora emitirati barem jedan event -->
    <TaskList @update-tasks="updateTasks" :tasks="tasks" />
  </div>
</template>

<script>
import TaskList from "../components/TaskList.vue";

export default {
  name: "HomePage",
  components: {
    TaskList,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    updateTasks(newTasks) {
      this.tasks = newTasks;
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    },
  },
  mounted() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  },
};
</script>

<style scoped>
/* 5. scoped style */
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
