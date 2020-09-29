<template>
  <v-list dense>
    <v-list-item :class="collapse && 'px-0'">
      <v-list-item-avatar  class="logo" :rounded="false">
        <img :src="logo" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="title">{{ title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    title: "Vuetify Admin",
    logo:
      "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",
  }),
};
</script>

<style lang="scss" scoped>
.logo {
  border-radius: 0;
}
.title {
  font-size: 35px;
}
</style>
