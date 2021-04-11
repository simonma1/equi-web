<template>
  <div class="container mb-5">
      <h1>Pensions</h1>
      <div class="row justify-content-center pension-content">
          <div v-for="(pension, idx) in pensions" :key="idx" class="col-12 col-md-4 mb-4 d-flex">
            <div class="card text-center">
                <div class="card-header">
                    <div><img :src="require('@/assets/' + pension.icon)" class="pension-icon"></div>
                    <div class="pension-title">{{pension.title}}</div>
                    <div class="img-ref">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
                <div class="card-body">
                    <h3 class="card-title">{{pension.price}}</h3>
                    <ul>
                        <li v-for="(content, idx) in pension.content" :key="idx" class="text-left">{{content}}</li>
                    </ul>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Pensions",
    data() {
        return {
            pensions: [
                {
                    title: "Pension extérieure",
                    icon: "land.svg",
                    price: "325$ / mois",
                    content: [
                        "Quantité de foin à volonté (balles rondes)",
                        "Vitamines fournies",
                        "Boxe disponible en cas de besoin"
                    ]
                },
                {
                    title: "Pension intérieure",
                    icon: "barn.svg",
                    price: "475$ / mois",
                    content: [
                        "4 repas de foin par jour",
                        "2 repas de moulée par jour",
                        "Chevaux sortis tous les jours en petits groupes le plus longtemps selon la météo"
                    ]
                },
                
            ]
        }
       
    }
}
</script>

<style>

.pension-content{
    color: black;
}

.pension-title{
    font-size: 1.5rem;
    font-weight: bold;
}

.pension-icon{
    height:2rem;
}

</style>