<template>
  <div class="about">
    <v-container fill-height class="d-flex">
      <v-container>
        <span v-html="this.$page.body.edges[0].node.content" class="html-content"></span>
      </v-container>

      <v-container fluid>
        <v-row
          style="text-align: -webkit-center;"
        >
          <v-col
            v-for="member in team"
            :key="member.title"
          >
            <v-card
              max-width="300px"
            >
              <v-img
                :src="member.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                max-height="100%"
              >
                <v-card-title v-text="member.role"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-card-subtitle v-text="member.name" color="red"></v-card-subtitle>
                <v-spacer></v-spacer>
                <v-btn v-if="member.phone" icon :href="`tel:${member.phone}`">
                  <v-icon>mdi-cellphone</v-icon>
                </v-btn>
                <v-btn v-if="member.email" icon :href="`mailto:${member.email}`">
                  <v-icon>mdi-email</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<page-query>
  query pageContent{
    body: allPageContent (filter: { fileInfo: {name : { eq: "about" }}}){
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
import Timeline from '../components/Timeline'
import Chart from '../components/Chart'

export default {
  name: 'About',
  components: {
    Timeline,
    Chart
  },
  data() {
    return {
      team: [
        {
          name: 'Steve & Amy Bronson',
          role: 'Owners',
          src: '/uploads/owners.webp',
          email: 'info@hiddenfenceco.com',
          phone: null
        },
        {
          name: 'Ryan Bronson',
          role: 'Manager',
          src: '/uploads/manager.webp',
          email: 'ryanbronson@hiddenfenceco.com',
          phone: 'null'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.about {
  .v-card {
    img {
      width: 100%;
      height: auto;
    }
  }

}
</style>
