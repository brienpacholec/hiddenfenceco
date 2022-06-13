<template>
  <Layout>
    <v-container>
      <h1>Contact Us</h1>
      
      <span v-html="this.$page.body.edges[0].node.content"></span>


      <p>Send a message, and we'll reply as soon as possible!</p>

      <v-form ref="form" v-model="valid" lazy-validation name="contact" data-netlify="true" method="POST">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Name"
          required
          autocomplete
        ></v-text-field>

        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              autocomplete
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="subjcet"
              :rules="subjectRules"
              label="Subject"
              required
              autocomplete
            ></v-text-field>
          </v-col>
        </v-row>

        <v-textarea
          v-model="message"
          label="Message"
          rows="1"
          row-height="15"
          required
        ></v-textarea>
        <v-btn
          :disabled="!valid"
          color="success"
          @click="validate"
          required
        >
          Submit
        </v-btn>
      </v-form>
    </v-container>
  </Layout>
</template>

<page-query>
  query pageContent{
    body: allPageContent (filter: { fileInfo: {name : { eq: "contact" }}}){
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
  data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 30) || 'Name must be less than 30 characters',
        v => (v && v.length > 2) || 'Name must be greater than 2 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      subject: '',
      subjectRules: [
        v => !!v || 'Subject is required',
        v => (v && v.length <= 30) || 'Name must be less than 30 characters',
        v => (v && v.length > 2) || 'Subject must be greater than 2 characters'
      ],
      message: '',
      
  }),
  metaInfo: {
    title: 'Contact'
  },
  methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>