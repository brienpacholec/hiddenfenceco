<template>
  <div class="navbar">
    <nav class="raleway">
      <v-toolbar
        :elevate-on-scroll="true"
        :hide-on-scroll="false"
        dark
        class="d-flex justify-center align-center overflow-hidden"
        :height="75"
      >
        <v-app-bar-nav-icon
          class="d-sm-none d-flex"
          @click="toggle"
        ></v-app-bar-nav-icon>

        <v-toolbar-items class="d-none d-sm-flex shrink">
          <v-btn
            v-for="item in items"
            :to="item.path"
            v-bind:key="item.title"
            text
          >
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-navigation-drawer
        absolute
        temporary
        v-model="collapse"
        :mini-variant.sync="mini"
        class="d-sm-none d-flex navigation-drawer"
      >
        <v-list-item>
          <v-list-item-avatar>
            <g-image src="~/favicon.png"></g-image>
          </v-list-item-avatar>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :href="item.path"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      collapse: false,
      items: [
        { title: 'Home', icon: 'fa-home', path: '/' },
        { title: 'About Us', icon: 'fa-user-astronaut', path: '/about' },
        { title: 'Our Services', icon: 'fa-newspaper', path: '/services' },
        { title: 'Reviews', icon: 'fa-newspaper', path: '/reviews' },
        { title: 'Contact Us', icon: 'fa-envelope', path: '/contact' }
      ],
      mini: false
    }
  },
  methods: {
    toggle() {
      this.collapse = !this.collapse
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  left:0;
  right: 0;
  width: 100%;
  z-index: 9999;

  .shrink {
    height: 40px;
  }
}

</style>
