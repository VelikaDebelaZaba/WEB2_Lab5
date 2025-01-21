<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Početna</router-link>
        <router-link to="/history">Povijest</router-link>
        <router-link to="/stats">Statistika</router-link>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f4f4f4;
  height: 100vh;
}

header {
  background-color: #333;
  padding: 10px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 15px;
}

a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

a.router-link-active {
  text-decoration: underline;
}
</style>
