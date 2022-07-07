<template>
  <div class="hero">
    <v-parallax height="600" :src="this.$static.heroData.edges[0].node.thumbnail">
      <v-row align="center" justify="center">
        <div class="light-text-bg px-4">
          <h1 class="display-2 font-weight-thin text-center">{{this.$static.heroData.edges[0].node.title}}</h1>
          <h4 class="subheading text-center">{{this.$static.heroData.edges[0].node.subtitle}}</h4>
        </div>
      </v-row>
    </v-parallax>
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
  created() {
    console.log(this.$static)

  }
}
</script>

<style lang="scss" scope>
.hero {
  z-index: 9999;
}
</style>