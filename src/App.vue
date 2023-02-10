<template>
  <div class="menu">
    <div class="container">
      <h1 class="logo">Logo</h1>
      <nav class="nav">
        <router-link to="/">Головна</router-link>
        <router-link to="/about">Обране</router-link>
      </nav>
    </div>
  </div>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
}

.main {
  position: absolute;
}

h1,
h2,
h3,
h4,
h5,
h6,
div {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

input,
button {
  border: 0;
  background: transparent;
  cursor: pointer;
  overflow: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  padding-top: 150px;
}

.menu {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  right: 0;
  left: 0;
  z-index: 100;
}

.logo {
  margin: 10px;
  text-align: center;
  text-align: center;
  font-size: 30px;
  color: #ecf0f1;
  text-shadow: 2px 2px 4px #000000;
  font-family: 'Cherry Swash', cursive;
}

.nav {
  padding: 10px;
}

.nav a {
  font-weight: bold;
  padding: 10px;
  color: rgba(255, 255, 255, 0.25);
  font-size: 20px;
  text-shadow: 3px 6px rgb(0 0 0 / 25%);
}

.nav a:first-child {
  padding-left: 0;
}

.nav a:last-child {
  padding-right: 0;
}

.nav a.router-link-exact-active {
  color: #fff;
  font-size: 20px;
}
</style>
