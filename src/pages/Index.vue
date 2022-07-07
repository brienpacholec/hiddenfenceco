<template>
  <div class="index">
    <v-container class="d-flex flex-wrap justify-center">
      <span v-html="this.$page.body.edges[0].node.content"></span>
    </v-container>
    <timeline
      :steps="whyUs"
    >
    </timeline>
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

import Timeline from '../components/Timeline'

export default {
  name: 'Home',
  components: {
    Timeline
  },
  data: () => ({
    whyUs: [
      {
        title: 'Because we rock!',
        src: 'https://caninesafety.com/wp-content/uploads/2021/04/B-Graphic100.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat, nulla vitae dictum fringilla, nunc arcu euismod quam, at sagittis mauris ante eget velit. Praesent dignissim enim mauris, vulputate condimentum dolor pretium eu.'
      },
      {
        title: 'I said so',
        src: 'https://caninesafety.com/wp-content/uploads/2021/04/I-Graphic100.png',
        description: 'Mauris tempus erat nisl, sed faucibus libero placerat a. Proin vel justo id leo sodales finibus quis sed enim.'
      },
      {
        title: 'This is getting old',
        src: 'https://caninesafety.com/wp-content/uploads/2021/04/T-Graphic100.png',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras malesuada lectus dui, in iaculis arcu congue eu. Proin eu purus nec nulla egestas pulvinar.'
      },
      {
        title: 'Even if you don\'t need a fence, you need one',
        src: 'https://caninesafety.com/wp-content/uploads/2021/04/E-Graphic100.png',
        description: 'Vivamus molestie, sem a posuere maximus, libero ipsum tempus eros, et dictum purus turpis sit amet mauris. Aliquam rhoncus dignissim ante quis maximus. Praesent nulla nibh, suscipit accumsan volutpat eu, euismod id justo. Phasellus rhoncus lacus nec mi sodales malesuada. Vivamus turpis libero, luctus eu libero non, blandit pulvinar ipsum. Duis lobortis purus nisl, nec blandit dui posuere et. Nulla in malesuada lacus, vitae dictum tortor.'
      },
      {
        title: 'Sorry, we\'re actually sold out',
        src: 'https://caninesafety.com/wp-content/uploads/2021/04/S-Graphic100.png',
        description: 'Cras et arcu id metus interdum dictum vitae et lectus. Suspendisse potenti. Cras faucibus felis nec dolor facilisis fringilla. Quisque ac dui at lectus lobortis posuere sit amet quis lectus. Proin eu molestie lectus, a volutpat leo.'
      },
    ]
  })
}

</script>

<style></style>
