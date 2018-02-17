<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/boards">Boards</router-link>
    </div>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: 100px auto;
  grid-template-areas:
    'nav'
    'main';
  justify-items: center;
}

#nav {
  grid-area: nav;
  padding: 30px;
}

#main {
  grid-area: main;
  width: 100%;
  max-width: 100vw;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
