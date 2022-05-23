<template>
  <nav class="navbar">
    <div class="logo">WeatherApp</div>
    <ul class="nav-links">
      <input type="checkbox" id="checkbox_toggle">
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>
      <div class="menu">
        <li><a href="/">Home</a></li>
        <li><router-link to="test"><a href="/">Test</a></router-link></li>
        <li class="services">
          <a href="/">Services</a>

          <ul class="dropdown">
            <li><a href="/first">First</a></li>
            <li><a href="/first">Second</a></li>
            <li><a href="/">About 3</a></li>
            <li><a href="/">About 4</a></li>
            <li><a href="/">About 5</a></li>
          </ul>
        </li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">Contact</a></li>
      </div>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "NavBar"
}
</script>

<style>
@import '../assets/Navbar.scss'
</style>