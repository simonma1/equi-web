<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Centre Equestre</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="navbar-nav mr-auto d-flex  w-75 ml-5">
      <router-link class="nav-item mx-3"  to="/">Home</router-link>
      <router-link class="nav-item mx-3" to="/about">About</router-link>
      <router-link class="nav-item mx-3" to="/nos-chevaux">Nos chevaux</router-link>
      <router-link class="nav-item mx-3" to="/contact">Contact</router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>

</style>