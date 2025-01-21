<template>
  <div>
    <div class="input-container">
      <!-- 2. two-way binding -->
      <input v-model="newTask" placeholder="Unesi zadatak" /> 
      <button class="add" @click="addTask">Dodaj zadatak</button>
      <!-- 1. interpolation/one-way binding -->
      <button class="preview-toggle" @click="togglePreview">
        {{ showPreview ? "Sakrij preview" : "Prikaži preview" }}
      </button>
    </div>

    <div v-if="showPreview" class="task-preview">
      <span class="preview-task">{{ newTask || "Nema unesenog zadatka" }}</span>
    </div>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <span class="task-content" :class="task.status">{{ task.name }}</span>
        <div class="button-container">
          <button class="success" @click="markAsCompleted(index)">Uspješno</button>
          <button class="failed" @click="markAsFailed(index)">Neuspješno</button>
          <button class="delete" @click="deleteTask(index)">Izbriši</button>
        </div>
      </li>
    </ul>

    <p>Preostali zadaci: {{ remainingTasks }}</p>
    <p>Uspješni: {{ successfulTasks }}</p>
    <p>Neuspješni: {{ failedTasks }}</p>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {          // 8. komponenta sa stanjem
    return {
      newTask: "",
      tasks: [],
      showPreview: true,
    };
  },
  computed: {
    // 4. computed properties
    remainingTasks() {
      return this.tasks.filter((task) => task.status !== "completed").length;
    },

    successfulTasks() {
      return this.tasks.filter((task) => task.status === "completed").length;
    },

    failedTasks() {
      return this.tasks.filter((task) => task.status === "failed").length;
    },
  },
  methods: { 
    // 3. methods
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({ name: this.newTask, status: "pending" });
        this.newTask = "";
        this.$emit("update-tasks", this.tasks); // 9. barem jedna komponenta mora emitirati barem jedan event
      }
    },
    togglePreview() {
      this.showPreview = !this.showPreview;
    },
    markAsCompleted(index) {
      this.tasks[index].status = "completed";
      this.$emit("update-tasks", this.tasks);
    },
    markAsFailed(index) {
      this.tasks[index].status = "failed";
      this.$emit("update-tasks", this.tasks);
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.$emit("update-tasks", this.tasks);
    },
  },
  mounted() {
    // 6. lifecycle hook
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  },
  watch: {
    tasks: {
      deep: true,
      handler(newTasks) {
        localStorage.setItem("tasks", JSON.stringify(newTasks));
      },
    },
  },
};
</script>
<style scoped>
.input-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

button {
  padding: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button.add {
  background-color: #2196F3;
}

button.add:hover {
  background-color: #0b7dda;
}

button.success {
  background-color: #4CAF50;
}

button.success:hover {
  background-color: #45a049;
}

button.failed {
  background-color: #f44336;
}

button.failed:hover {
  background-color: #e53935;
}

button.delete {
  background-color: #808080;
}

button.delete:hover {
  background-color: #696969;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

li .task-content {
  flex: 1;
  margin-right: 10px;
}

span.completed {
  text-decoration: line-through;
  color: green;
}

span.failed {
  text-decoration: line-through;
  color: red;
}

li .button-container {
  display: flex;
  gap: 10px;
}

.task-preview {
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.preview-task {
  font-style: italic;
  color: #333;
}

button.preview-toggle {
  background-color: #FF9800;
}

button.preview-toggle:hover {
  background-color: #fb8c00;
}
</style>
