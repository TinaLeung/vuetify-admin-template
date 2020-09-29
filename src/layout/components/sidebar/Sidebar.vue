<template>
  <v-navigation-drawer :mini-variant.sync="miniVariant" app dark>
    <sidebar-logo :collapse="miniVariant"></sidebar-logo>
    <v-divider></v-divider>
    <v-list flat nav dense expand>
      <template v-for="route in routes">
        <sidebar-menu v-if="!route.hidden" :key="route.path" :route="route" :basePath="route.path"></sidebar-menu>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarLogo from "./SidebarLogo"
import SidebarMenu from "./SidebarMenu"

export default {
  props: {
    source: String,
  },
  data: () => ({
    selectedItem: 1
  }),
  computed: {
    ...mapGetters(['sidebar']),
    miniVariant() {
      return this.sidebar.opened ? true : false
    },
    routes() {
      return this.$router.options.routes;
    },
  },
  methods: {},
  components: {
    SidebarLogo,
    SidebarMenu,
  },
};
</script>
