<template>
  <div class="bottom">
    <v-footer padless class="mt-5">
      <v-card
        flat
        tile
        class="white--text text-center align-self-md-stretch"
        width="100%"
        color="secondary"
      >
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          info@website.com
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Hidden Fence Company</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  components: {},
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-google-plus',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>

<style lang="scss" scope>
.bottom {
  z-index: 9999;
}
</style>
