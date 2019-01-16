<template>
  <div>
    <div v-if="isOverlayOpen">
      <trap-focus :disabled="!isOverlayOpen">
        <div
          :aria-hidden="!isOverlayOpen"
          class="c-overlay">
          <btn
            class="c-overlay__close-btn"
            icon="window-close"
            :iconBefore="true"
            @on-button-clicked="toggleOverlay(false)"
            label="Close menu" />
          <div class="c-overlay__content">
            <slot></slot>
          </div>
        </div>
      </trap-focus>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator";

import Btn from "~/components/btn/Btn.vue";

@Component({ components: { Btn } })
export default class Overlay extends Vue {
  @Prop({ type: Boolean, default: false }) isOverlayOpen;
  @Prop({ type: Boolean, default: false }) disableEsc;

  toggleOverlay(newVal) {
    this.$emit("overlay-toggled", newVal);
  }

  closeOverlayOnEsc(e) {
    if (this.isOverlayOpen && (e.key === 'Escape' || e.keyCode === 27)) {
      this.toggleOverlay(false);
    }
  }

  mounted() {
    if (!this.disableEsc) {
      document.addEventListener('keyup', this.closeOverlayOnEsc);
    }
  }

  destroyed() {
    document.removeEventListener('keyup', this.closeOverlayOnEsc);
  }
}
</script>
