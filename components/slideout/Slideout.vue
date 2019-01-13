<template>
  <div>
    <transition name="fade">
      <div v-if="isSlideoutOpen">
        <trap-focus :disabled="!isSlideoutOpen">
          <div
            :aria-hidden="!isSlideoutOpen"
            class="c-slideout">
            <Btn
              class="c-slideout__close-btn"
              icon="window-close"
              :iconBefore="true"
              @on-button-clicked="toggleSlideout(false)"
              label="Close menu" />
            <div class="c-slideout__content">
              <slot></slot>
            </div>
          </div>
        </trap-focus>
      </div>
    </transition>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator";

import Btn from "~/components/btn/Btn.vue";

@Component({ components: { Btn } })
export default class Slideout extends Vue {
  @Prop({ type: Boolean, default: false }) isSlideoutOpen;
  @Prop({ type: Boolean, default: false }) disableEsc;
  @Prop({ type: Boolean, default: true }) disableDocumentClick;

  toggleSlideout(newVal) {
    this.$emit("slideout-toggled", newVal);
  }

  closeSlideoutOnEsc(e) {
    if (this.isSlideoutOpen && (e.key === 'Escape' || e.keyCode === 27)) {
      document.body.style.backgroundColor = 'inherit';
      this.toggleSlideout(false);
    }
  }

  documentClick(e) {
    let openSlideoutButton = document.querySelector('.c-slideout__open-btn');
    let actualTarget = e.target;
    if (actualTarget !== openSlideoutButton  && this.isSlideoutOpen) {
        this.toggleSlideout(false);
    }
  }

  mounted() {
    if (!this.disableEsc) {
      document.addEventListener('keyup', this.closeSlideoutOnEsc);
    }
  }

  created() {
    if (!this.disableDocumentClick) {
    document.addEventListener('click', this.documentClick);
    }
  }

  destroyed() {
    document.removeEventListener('keyup', this.closeSlideoutOnEsc);
    document.removeEventListener('click', this.documentClick);
  }
}
</script>
