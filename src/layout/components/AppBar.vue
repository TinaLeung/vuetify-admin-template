<template>
  <v-app-bar dense flat elevate-on-scroll app>
    <v-app-bar-nav-icon @click.stop="toggleSidebar()"></v-app-bar-nav-icon>
    <v-breadcrumbs :items="routes" large>
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
      <!-- <template v-slot:item="item">
        <router-link :to="item.item.to">{{ item.item.text }}</router-link>
      </template> -->
    </v-breadcrumbs>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    routes() {
      console.log(this.$route.matched)
      return this.$route.matched.map(r => ({ to: {path: r.path}, text: r.meta ? r.meta.title : '' }))
    }
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('app/toggleSidebar')
    }
  }
};
</script>
