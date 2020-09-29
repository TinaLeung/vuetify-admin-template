<template>
  <v-list-item active-class="primary white--text" :to="path">
    <v-list-item-icon v-if="icon">
      <v-icon v-text="icon"></v-icon>
    </v-list-item-icon>
    <v-list-item-content v-if="title">
      <v-list-item-title v-text="title"></v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
  }
};
</script>