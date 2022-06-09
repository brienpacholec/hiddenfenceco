<template>
  <Layout>
    <span v-html="this.$page.body.edges[0].node.content"></span>
  </Layout>
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
</script>

<style></style>
