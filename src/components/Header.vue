<template>
  <nav id="nav" class="navbar navbar-expand-md navbar-light bg-light">
    <img class="icone" src='../../public/centre_equestre.jpg' />
    <a class="navbar-brand mx-md-2 d-none d-sm-flex" href="#">Centre Équestre Fleurie</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="navbar-nav mr-auto d-flex  w-75 ml-5">
      <router-link class="nav-item mx-3"  to="/">Home</router-link>
      <router-link class="nav-item mx-3" to="/services">Services</router-link>
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

.icone{
  height: 5rem;
  width: 5rem;
}

@media (max-width: 576px) { 
  #nav a{
    font-size: 2rem;
  } 
}


</style>