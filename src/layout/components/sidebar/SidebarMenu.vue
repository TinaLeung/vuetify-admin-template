<template>
  <menu-item
    v-if="hasNoShowingChildren(route) && route.meta"
    :path="resolvePath(route.path)"
    :icon="route.meta.icon"
    :title="route.meta.title"
  ></menu-item>

  <v-list-group
    v-else
    :group="basePath"
    :prepend-icon="route.meta ? route.meta.icon : ''"
    color="#E3F2FD"
    no-action
    :sub-group="isSubGroup"
  >
    <template #activator>
      <v-list-item-content>
        <v-list-item-title v-text="route.meta ? route.meta.title : ''"></v-list-item-title>
      </v-list-item-content>
    </template>

    <template v-for="(subRoute) in route.children">
      <sidebar-menu :key="subRoute.path" :route="subRoute" :isSubGroup="true" :basePath="resolvePath(route.path)"></sidebar-menu>
    </template>
  </v-list-group>
</template>

<script>
import MenuItem from './SidebarMenuItem';
import path from 'path'
import { isExternal } from '@/utils/validate'

export default {
  name: "SidebarMenu",
  props: {
    route: null,
    isSubGroup: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  methods: {
    hasNoShowingChildren(parent) {
      if (!parent.children || parent.children.length === 0) {
        return true;
      }
      const showingChildren = parent.children.filter(
        (item) => !item.hidden && item.path !== "" && item.path !== "/"
      );

      return showingChildren.length === 0;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    }
  },
  components: {
    MenuItem
  }
};
</script>