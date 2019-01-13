<template>
  <div>
    <no-ssr>
      <Slideout
        :is-slideout-open="slideoutOpen"
        @slideout-toggled="onSlideoutToggle">
        <Menu></Menu>
      </Slideout>
    </no-ssr>

    <main class="c-app">
      <Site-Header :is-slideout-open="slideoutOpen" @menu-clicked="onSlideoutToggle" />
      <nuxt/>

    </main>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import {State, Mutation, namespace} from "vuex-class";

import SiteHeader from "~/components/siteHeader/SiteHeader.vue";
import Slideout from "~/components/slideout/Slideout.vue";
import Menu from "~/components/menu/Menu.vue";

const APP_MODULE = namespace("app");

@Component({
  components: {
    SiteHeader,
    Slideout,
    Menu,
  }
})
export default class Default extends Vue {
  slideoutOpen = false;
  onSlideoutToggle(isOpen) {
    this.slideoutOpen = isOpen;
  }
}
</script>
