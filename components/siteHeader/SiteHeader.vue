<template>
  <div class="c-site-header">
    <div class="c-site-header__items">
      <div class="c-site-header__logo-container">
        <nuxt-link to="/">
          <h1 class="c-title c-title--is-light c-title--is-m c-title--is-margin-bottomless">James Wright: User interface specialist</h1>
        </nuxt-link>
      </div>
      <button
        class="u-naked-button"
        @click="toggleSlideout()"
        aria-label="toggle menu">
        Menu <font-awesome-icon icon="bars" />
    </button>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";
import { State, namespace } from "vuex-class";

import Btn from "~/components/btn/Btn.vue";
import Menu from "~/components/menu/Menu.vue";

@Component({
  components: {
    Btn,
    Menu
  }
})
export default class SiteHeader extends Vue {
  @Prop({ type: Boolean, default: false }) isSlideoutOpen;

  toggleSlideout(newVal) {
    this.$emit("menu-clicked", !this.isSlideoutOpen);
  }
}
</script>
