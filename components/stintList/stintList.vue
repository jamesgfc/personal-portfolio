<template>
  <div>
    <section
      v-for="stint in stintListData"
      :key="stint.id">
      <stint v-if="!stint.legacy" :stint="stint"></stint>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";

import Stint from "~/components/stint/Stint.vue";

@Component({ components: { Stint } })
export default class StintList extends Vue {
  @Prop({ type: Array }) stintListData;
}
</script>
