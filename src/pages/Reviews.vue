<template>
  <div class="reviews">
    <v-container class="d-flex">
      <div class="fill-width">
        <h1>Reviews</h1>
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
    </v-container>
  </div>
</template>

<page-query>
  query pageContent{
    body: allPageContent (filter: { fileInfo: {name : { eq: "reviews" }}}){
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
  name: 'Reviews',
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 30) || 'Name must be less than 30 characters',
      v => (v && v.length > 2) || 'Name must be greater than 2 characters'
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

<style lang="scss" scoped>
.reviews {
  height: 100vh;
}
</style>