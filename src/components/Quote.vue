<template>
  <div class="quote">
    <v-btn
      elevation="2"
      rounded
      color="complement"
      class="white--text"
      href="https://hiddenfenceny.fencrm.com/#/user"
    >
      Free Quote &nbsp;
      <v-icon class="shake">mdi-comment-quote</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Quote'
}
</script>

<style lang="scss" scope>
.quote {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
}
</style>