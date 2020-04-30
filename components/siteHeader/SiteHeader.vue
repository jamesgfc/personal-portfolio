<template>
  <div class="c-site-header">
    <div class="c-site-header__items">
      <button
        class="u-naked-button"
        @click="toggleOverlay()"
        aria-label="toggle menu">
        <font-awesome-icon icon="bars" /> <span class="u-is-sr-only">Menu</span>
    </button>
      <div class="c-site-header__logo-container">
        <nuxt-link to="/">
          <h1 class="c-title c-title--is-light c-title--is-m c-title--is-margin-bottomless">James Wright: User interface specialist</h1>
        </nuxt-link>
      </div>

    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";
import { State, namespace } from "vuex-class";

import Btn from "~/components/btn/Btn.vue";

@Component({
  components: {
    Btn,
  }
})
export default class SiteHeader extends Vue {
  @Prop({ type: Boolean, default: false }) isOverlayOpen;

  toggleOverlay(newVal) {
    this.$emit("menu-clicked", !this.isOverlayOpen);
  }
}
</script>
