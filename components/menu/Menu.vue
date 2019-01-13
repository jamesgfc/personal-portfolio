<template>
<nav class="c-site-header__menu-button-container">
  <div class="o-grid o-grid--has-3-cols">
      <menu-item route="skills" icon="laptop-code" label="Skills"></menu-item>
      <menu-item route="experience" icon="briefcase" label="Experience"></menu-item>
    </div>
    </nav>
</template>


<script>
import { Component, Vue } from "nuxt-property-decorator";
import {State, Mutation, namespace} from "vuex-class";

import menuItem from "~/components/menu/menuItem.vue";

const APP_MODULE = namespace("app");

@Component( {components: { menuItem } })
export default class Menu extends Vue {

  @APP_MODULE.Mutation setSlideoutOpen;

  closeOverlay() {
    console.log("INNNN")
    this.setSlideoutOpen(false);
  }
}
</script>
