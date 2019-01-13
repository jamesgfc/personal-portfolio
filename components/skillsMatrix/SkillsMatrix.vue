<template>
  <section class="c-skills-matrix">

    <div class="o-grid o-grid--has-1-cols o-grid--has-2-cols@blueberry-to-kiwi o-grid--has-3-cols@gt-kiwi">
      <div
        v-for="(skill, index) in skills"
        v-once
        :key="index"
        class="o-grid__item o__grid__item--is-flexible-column c-highlighted-area c-highlighted-area--is-style-1">
        <img
          v-once
          v-if="skill.identifier"
          class="c-skills-matrix__image"
          :src="getSkillIcon(skill.identifier)"
          :alt="skill.name">
        <div>
          <h2 class="c-title--is-l c-title--is-light">{{ skill.name }}</h2>
        </div>
      </div>
      <div class="o-grid__item o-grid__item--is-flexible">
        <Btn @on-button-clicked="navigateToSkills" label="View all skills" />
      </div>
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
export default class SkillsMatrix extends Vue {
  @Prop({ type: String }) title;
  @Prop({ type: Array }) skills;

  getSkillIcon(skillIdentifier) {
    if (skillIdentifier) {
      return `/${skillIdentifier}.svg`;
    }
  }

  navigateToSkills() {
    this.$router.push("skills");
  }
}
</script>
