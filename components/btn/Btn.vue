<template>
  <button v-bind="$attrs" class="c-btn" @click="emitClick">
    <font-awesome-icon
      v-if="iconBefore"
      :icon="icon"
      class="c-btn__icon"
      :class="{ 'c-btn__icon--is-before': iconBefore }"
       />
    <span class="c-btn__content">
      {{ label }}
    </span>
  <font-awesome-icon v-if="!iconBefore" :icon="icon" class="c-btn__icon" />
  </button>
</template>


<script>
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";
import { State, namespace } from "vuex-class";

@Component()
export default class Btn extends Vue {
  @Prop({ type: String }) label;
  @Prop({ type: String, default: "angle-right" }) icon;
  @Prop({ type: Boolean, default: false }) iconBefore;

  emitClick(e) {
    this.$emit("on-button-clicked", e);
  }
}
</script>
