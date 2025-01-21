<template>
  <div>
    <h1>Statistika zadataka</h1>
    <p>Postotak uspješno obavljenih zadataka: {{ successRate }}%</p>
    <p>Postotak neuspješno obavljenih zadataka: {{ failureRate }}%</p>
    <p>Postotak zadataka koji nisu obavljeni: {{ pendingRate }}%</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    successRate() {
      const total = this.tasks.length;
      if (total === 0) return 0;
      const successful = this.tasks.filter(task => task.status === "completed").length;
      return Math.round((successful / total) * 100);
    },
    failureRate() {
      const total = this.tasks.length;
      if (total === 0) return 0;
      const failed = this.tasks.filter(task => task.status === "failed").length;
      return Math.round((failed / total) * 100);
    },
    pendingRate() {
      const total = this.tasks.length;
      if (total === 0) return 0;
      const pending = this.tasks.filter(task => task.status === "pending").length;
      return Math.round((pending / total) * 100);
    },
  },
  mounted() {
    // Pretpostavljam da zadaci imaju strukturu { title, status: "completed" | "failed" | "pending" }
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  },
};
</script>
