<template>
  <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/book">Add Book</router-link>
        <Genre title="Genre">Genre</Genre>
        <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
import Genre from './Genre'
export default {
  name: 'navbar',
  components: {
    Genre
  },
}
</script>

<style>

nav {
  width: 100vw;
  background-color: #0d0d0e;
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: #FFF;
  /*padding: 25px 40px;*/
  position: relative;
  text-align: center;
  /*border-bottom: solid transparent;*/
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #0d0d0e;
  border-bottom-color: #bb3030;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

nav *{
  margin: 10px;

}


</style>
