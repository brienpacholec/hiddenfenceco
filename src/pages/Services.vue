<template>
  <div class="services">
    <v-container fill-height class="d-flex">
      <v-container>
        <span v-html="this.$page.body.edges[0].node.content" class="html-content"></span>
      </v-container>
    </v-container>
  </div>
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
  name: 'Services',
}
</script>

<style lang="scss">
.services {

}
</style>