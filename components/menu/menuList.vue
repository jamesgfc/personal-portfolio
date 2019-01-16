<template>
  <nav>
    <ul class="c-menu">
      <menu-item v-on="$listeners" to="/" icon="home" label="Home" exact></menu-item>
      <menu-item v-on="$listeners" to="skills" icon="laptop-code" label="Skills"></menu-item>
      <menu-item v-on="$listeners" to="experience" icon="briefcase" label="Experience"></menu-item>
    </ul>
  </nav>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

import MenuItem from "~/components/menu/menuItem.vue";

@Component( {components: { MenuItem } })
export default class MenuList extends Vue {}
</script>
