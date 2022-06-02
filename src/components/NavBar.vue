<template>
  <nav class="navbar">
    <div class="logo">
      <router-link :to="{name: 'home'}">WeatherApp</router-link>
    </div>
    <ul class="nav-links">
      <input type="checkbox" id="checkbox_toggle">
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>
      <div class="menu">
        <li>
          <router-link :to="{name: 'home'}">Home</router-link>
        </li>




        <li>
          <router-link :to="{name: 'sports'}">sports</router-link>
        </li>


      </div>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "NavBar",

}
</script>

<style>
@import '../assets/Navbar.scss';
</style>