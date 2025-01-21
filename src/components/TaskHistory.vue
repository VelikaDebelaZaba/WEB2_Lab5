<template>
  <div>
    <div class="task-column">
      <h3>Uspješni zadaci</h3>
      <ul>
        <li v-for="task in successfulTasks" :key="task.name">{{ task.name }}</li>
      </ul>
    </div>

    <div class="task-column">
      <h3>Neuspješni zadaci</h3>
      <ul>
        <li v-for="task in failedTasks" :key="task.name">{{ task.name }}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TaskHistory',
  props: {
    tasks: Array,  // 8. komponenta bez stanja, koristiti properties
  },
  computed: {
    successfulTasks() {
      return this.tasks.filter(task => task.status === 'completed');
    },
    failedTasks() {
      return this.tasks.filter(task => task.status === 'failed');
    },
  },
};
</script>

<style scoped>
.task-column {
  width: 30%;
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>
