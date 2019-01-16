<template>
  <div>
    <no-ssr>
      <Overlay
        :is-overlay-open="overlayOpen"
        @overlay-toggled="onOverlayToggle">
        <menu-list @menu-item-selected="onMenuItemSelected"></menu-list>
      </Overlay>
    </no-ssr>

    <main class="c-app">
      <site-header :is-overlay-open="overlayOpen" @menu-clicked="onOverlayToggle" />
      <nuxt/>
    </main>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import {State, Mutation, namespace} from "vuex-class";

import SiteHeader from "~/components/siteHeader/SiteHeader.vue";
import Overlay from "~/components/overlay/overlay.vue";
import MenuList from "~/components/menu/menuList.vue";

@Component({
  components: {
    SiteHeader,
    Overlay,
    MenuList,
  }
})
export default class Default extends Vue {
  overlayOpen = false;

  onOverlayToggle(isOpen) {
    this.overlayOpen = isOpen;
  }

  onMenuItemSelected() {
    this.overlayOpen = false;
  }
}
</script>
