<template>
  <div class="hero">
    <v-img height="100%" max-height="900px" :src="this.$static.heroData.edges[0].node.thumbnail" class="d-flex justify-center align-center" >
      <v-row align="center" justify="center" class="mx-2">
        <div class="light-text-bg pa-2 text-center">
          <h1>{{this.$static.heroData.edges[0].node.title}}</h1>
          <p>{{this.$static.heroData.edges[0].node.subtitle}}</p>
        </div>
      </v-row>
    </v-img>
  </div>
</template>

<static-query>
  query {
    heroData: allPageContent (filter: { fileInfo: {name : { eq: "hero_data" }}}){
      edges {
        node {
          thumbnail
          title
          subtitle
        }
      }
    }
  }
</static-query>

<script>
export default {
  name: 'Hero',
}
</script>

<style lang="scss" scope>
.hero {
  z-index: 9999;

  h1, p {
    color: white !important;
    margin: 0 !important;
    line-height: 120%;
  }

  h1 {
    font-size: 3rem;
    @media screen and (max-width: 960px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 20px;
    font-weight: 100 !important;
    @media screen and (max-width: 960px) {
      font-size: 15px;
    }
  }

}
</style>