<template>
  <div class="contact">
    <v-container fill-height class="d-flex">
      <div class="fill-width">
        <h1>Contact Us</h1>

        <span v-html="this.$page.body.edges[0].node.content"></span>

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          name="Contact"
          data-netlify="true"
          method="POST"
          v-on:submit.prevent="handleSubmit"
        >
          <v-text-field
            v-model="formData.name"
            name="name"
            label="Name"
            :rules="nameRules"
            required
            autocomplete
          ></v-text-field>

          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="formData.email"
                name="email"
                label="Email"
                :rules="emailRules"
                required
                autocomplete
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="formData.subject"
                name="subject"
                label="Subject"
                :rules="subjectRules"
                required
                autocomplete
              ></v-text-field>
            </v-col>
          </v-row>

          <v-textarea
            v-model="formData.message"
            name="message"
            label="Message"
            :rules="messageRules"
            rows="3"
            row-height="15"
            clearable
            counter
            required
          ></v-textarea>
          <v-btn
            color="primary"
            type="submit"
            required
            :disabled="!valid"
            @click="validate"
          >
            Submit
          </v-btn>
        </v-form>
      </div>
      <v-snackbar
        v-model="snackbar"
      >
        {{ snackbarText }}
      </v-snackbar>
    </v-container>
  </div>
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
  name: 'Contact',
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 30) || 'Name must be less than 30 characters',
      v => (v && v.length > 2) || 'Name must be greater than 2 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    subjectRules: [
      v => !!v || 'Subject is required',
      v => (v && v.length <= 30) || 'Name must be less than 30 characters',
      v => (v && v.length > 2) || 'Subject must be greater than 2 characters'
    ],
    messageRules: [
      v => !!v || 'A message is required',
      v => (v && v.length > 2) || 'Message must be greater than 10 characters'
    ],
    formData: {},
    snackbar: false,
    snackbarText: null,
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
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      console.log(e.target.getAttribute('name'))
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => {
          this.snackbar = true
          this.snackbarText = 'Successfully submitted contact form.'
          this.reset()
        })
        .catch(error => {
          this.snackbar = true
          this.snackbarText = 'There was an error submitting your form.'
        })
    }
  },
}
</script>

<style lang="scss">
.contact {

}
</style>