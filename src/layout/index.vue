<template>
  <v-app>
    <app-bar />
    <sidebar />
    <v-main>
      <app-main />
    </v-main>
  </v-app>
</template>

<script>
import { Sidebar, AppMain, AppBar } from './components'
export default {
  components: {
    Sidebar,
    AppMain,
    AppBar
  }
};
</script>
