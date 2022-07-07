<template>
  <div class="index">
    <v-container class="d-flex flex-wrap justify-center">
      <span v-html="this.$page.body.edges[0].node.content"></span>
    </v-container>
  </div>
</template>

<page-query>
  query pageContent{
    body: allPageContent (filter: { fileInfo: {name : { eq: "home" }}}){
      edges {
        node {
          id
          content
          thumbnail
        }
      }
    }
  }
</page-query>

<script>

export default {
  name: 'Index'
}

</script>

<style></style>
