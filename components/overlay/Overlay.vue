<template>
  <div>
      <div v-if="isOverlayOpen">
        <trap-focus :disabled="!isOverlayOpen">
          <div
            :aria-hidden="!isOverlayOpen"
            class="c-overlay">
            <Btn
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
  @Prop({ type: Boolean, default: false }) disableDocumentClick;

  toggleOverlay(newVal) {
    this.$emit("overlay-toggled", newVal);
  }

  closeOverlayOnEsc(e) {
    if (this.isOverlayOpen && (e.key === 'Escape' || e.keyCode === 27)) {
      document.body.style.backgroundColor = 'inherit';
      this.toggleOverlay(false);
    }
  }

  documentClick(e) {
    let openOverlayButton = document.querySelector('.c-overlay__open-btn');
    let actualTarget = e.target;
    if (actualTarget !== openOverlayButton  && this.isOverlayOpen) {
        this.toggleOverlay(false);
    }
  }

  mounted() {
    if (!this.disableEsc) {
      document.addEventListener('keyup', this.closeOverlayOnEsc);
    }
  }

  created() {
    if (!this.disableDocumentClick) {
      document.addEventListener('click', this.documentClick);
    }
  }

  destroyed() {
    document.removeEventListener('keyup', this.closeOverlayOnEsc);
    document.removeEventListener('click', this.documentClick);
  }
}
</script>
