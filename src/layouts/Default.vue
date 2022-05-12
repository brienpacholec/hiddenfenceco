<template>
  <v-app>
    <Header />
    <Navbar />
    <Hero v-if="isHome" />
    <v-container fill-height class="d-sm-none d-md-flex">
      <slot />
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

export default {
  components: {
    Header,
    Navbar,
    Hero,
    Footer,
  },
  computed: {
    isHome() {
      return this.$route.path === "/"
    },
  },
}
</script>

<style></style>
