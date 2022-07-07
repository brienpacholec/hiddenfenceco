<template>
  <v-app>
    <top></top>
    <hero v-if="isHome"></hero>
    <navbar></navbar>
    <transition name="fade">
      <router-view />
    </transition>
    <bottom></bottom>
    <quote></quote>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>

import Top from '~/layouts/Top.vue'
import Hero from '~/components/Hero.vue'
import Navbar from '~/layouts/Navbar.vue'
import Bottom from '~/layouts/Bottom.vue'
import Quote from '~/components/Quote.vue'

export default {
  components: {
    Top,
    Hero,
    Navbar,
    Bottom,
    Quote
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
  computed: {
    isHome() {
      return this.$route.path === '/'
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave {
    opacity: 0;
}

</style>
