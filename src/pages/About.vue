<template>
  <Layout>
    <div class="hfc-about">
    <v-container class="text-center">
      <span v-html="this.$page.body.edges[0].node.content" class="html"></span>
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
    
    <!-- <v-container>
      <v-row
        no-gutters
        justify="space-around"
      >
        <v-col
          sm="4"
        >
          <v-card
            class="pa-2"
            color="primary"
          >
            <g-image src="~/images/owners.webp"/>
            <h2>Steve & Amy Bronson</h2>
            <h3>Owners</h3>
          </v-card>
        </v-col>
        <v-col
          sm="4"
        >
          <v-card
            class="pa-2"
            color="primary"
          >
            <g-image src="~/images/manager.webp"/>
            <h2>Ryan Bronson</h2>
            <h3>Manager</h3>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
    </div>
  </Layout>
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
import Timeline from "../components/Timeline";
import Chart from "../components/Chart";

export default {
  components: {
    Timeline,
    Chart
  },
  data() {
    return {
      team: [
        {
          name: "Steve & Amy Bronson",
          role: "Owners",
          src: "/uploads/owners.webp",
          email: "info@hiddenfenceco.com",
          phone: null
        },
        {
          name: "Ryan Bronson",
          role: "Manager",
          src: "/uploads/manager.webp",
          email: "ryanbronson@hiddenfenceco.com",
          phone: "null"
        }
      ]
    }
  }
};
</script>

<style lang="scss">
.hfc-about {
    img {
      width: 100%;
      max-width: 700px;
      height: auto;
    }

  .v-card {
    img {
      width: 100%;
      height: auto;
    }
  }
  
}
</style>
