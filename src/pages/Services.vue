<template>
  <Layout>
    <v-container>
      <h1>Services</h1>
      <span v-html="this.$page.body.edges[0].node.content"></span>
    </v-container>
  </Layout>
</template>

<page-query>
  query pageContent{
    body: allPageContent (filter: { fileInfo: {name : { eq: "services" }}}){
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