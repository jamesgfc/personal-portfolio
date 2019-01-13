<template>
  <div>
    <no-ssr>
      <Overlay
        :is-overlay-open="overlayOpen"
        @overlay-toggled="onOverlayToggle">
        <Menu></Menu>
      </Overlay>
    </no-ssr>

    <main class="c-app">
      <Site-Header :is-overlay-open="overlayOpen" @menu-clicked="onOverlayToggle" />
      <nuxt/>
    </main>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import {State, Mutation, namespace} from "vuex-class";

import SiteHeader from "~/components/siteHeader/SiteHeader.vue";
import Overlay from "~/components/overlay/Overlay.vue";
import Menu from "~/components/menu/Menu.vue";

const APP_MODULE = namespace("app");

@Component({
  components: {
    SiteHeader,
    Overlay,
    Menu,
  }
})
export default class Default extends Vue {
  overlayOpen = false;
  onOverlayToggle(isOpen) {
    this.overlayOpen = isOpen;
  }
}
</script>
