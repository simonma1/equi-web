<template>
  <div class="home">
    <div>
      <img class="img-accueil" alt="Vue logo" src="https://images.unsplash.com/photo-1547581849-38ba650ad0de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
    </div>
    <div class="container">
      <p>
        Bienvenue au Centre Équestre Fleurie! Une écurie chaleureuse où les chevaux y sont traités aux
        petits soins. Plusieurs services y sont offerts, entre autres pension intérieure et extérieure,
        cours, entraînements et plusieurs autres. Venez visiter nos installations et vous serez charmé
        par l’ambiance.
      </p>
    </div>  
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped>
.img-accueil{
  width: 100%;
  height: 40vh;
  object-fit: cover;
}
</style>
