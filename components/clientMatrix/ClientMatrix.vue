<template>
  <section class="u-margin-bottom-l">
    <h1
      v-once
      class="c-title c-title--is-xl">
      {{ title }}
    </h1>
    <div class="o-grid o-grid--has-1-cols">
      <div
        v-for="(partner, index) in partners"
        v-once
        :key="index"
        class="o-grid__item">
        <img
          class="u-margin-bottom-s"
          :style="{ maxWidth: partner.maxLogoWidth }"
          :src="partner.logo"
          :alt="partner.description" />
        <h2 class="u-is-sr-only">{{ partner.description }}</h2>
        <div>
        </div>
      </div>
    </div>
    <div class="o-grid__item o-grid__item--is-flexible">
        <Btn @on-button-clicked="navigateToExperience" label="View all clients and employers" />
      </div>
  </section>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";
import { State, namespace } from "vuex-class";

import Btn from "~/components/btn/Btn.vue";

@Component({ components: {
  Btn,
}})
export default class ClientMatrix extends Vue {
  @Prop({ type: String }) title;
  @Prop({ type: Array }) partners;

  navigateToExperience() {
    this.$router.push("experience");
  }

}
</script>
