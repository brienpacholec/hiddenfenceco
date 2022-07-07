<template>
  <div class="reviews">
    <v-container fill-height class="d-flex">
      <h1>Reviews</h1>
      <span v-html="this.$page.body.edges[0].node.content"></span>
    </v-container>
  </div>
</template>

<page-query>
  query pageContent{
    body: allPageContent (filter: { fileInfo: {name : { eq: "reviews" }}}){
      edges {
        node {
          id
          content
        }
      }
    }
  }
</page-query>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.reviews {
  height: 100vh;
}
</style>