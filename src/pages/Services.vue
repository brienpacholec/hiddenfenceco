<template>
  <Layout>
    <div class="hfc-services">
    <v-container>
      <span v-html="this.$page.body.edges[0].node.content" class="html-content"></span>
    </v-container>
    </div>
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

<style lang="scss">
.hfc-services {

  .html-content {
    h1 {
      text-align: -webkit-center;
    }
    p {
      text-align: -webkit-center;
        img {
          width: 100%;
          max-width: 700px !important;
          height: auto;
      }
    }
  }
  
}
</style>