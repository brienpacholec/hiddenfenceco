<template>
  <div class="quote">
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            elevation="2"
            rounded
            color="contrast lighten-1"
            class="white--text"
            v-bind="attrs"
            v-on="on"
          >
            Free Quote &nbsp;
            <v-icon class="shake">mdi-comment-quote</v-icon>
          </v-btn>
        </template>
        <v-card class="dialog">
          <v-toolbar
            dark
            color="primary"
          >
            <v-btn
              icon
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Get a Quote Today</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <iframe

            onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' style="height:100vh;width:100%;border:none;overflow:hidden;"
            src="https://hiddenfenceny.fencrm.com/#/user"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Quote',
  data: function() {
    return {
      dialog: false
    }
  },
}
</script>

<style lang="scss" scope>
.quote {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    .dialog {
      z-index: 9999;
    }
}
</style>