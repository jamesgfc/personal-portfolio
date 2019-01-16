<template>
  <li class="c-menu__item">
    <nuxt-link
      v-bind="$attrs"
      @click.native="onClickMenuItem()"
      class="c-link c-link--is-on-dark c-menu__link"
      active-class="c-menu__link--is-active">
      {{ label }}
    </nuxt-link>
    <i class="c-link c-link--is-on-dark c-menu__link c-menu__item-icon">
      <font-awesome-icon :icon="icon" aria-hidden="true" />
    </i>
  </li>
</template>

<script>
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component( {})
export default class MenuItem extends Vue {
  @Prop({ type: String }) label;
  @Prop({ type: String }) icon;

  onClickMenuItem() {
    this.$emit("menu-item-selected", false);
  }
}
</script>
