<template>
  <div>
    <page-intro titleLight="Technical and professional" titleStrong="Skills" />
    <div class="c-site-content">
      <div class="c-page">
        <div class="c-page__inner">
          <skill-list :skills="technicalSkills" title="Technical skills" />
          <skill-list :skills="professionalSkills" title="Professional skills" />
        </div>
        <site-footer />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";
import { State, namespace } from "vuex-class";

import SiteFooter from "~/components/siteFooter/siteFooter.vue";
import SkillList from "~/components/skillList/skillList.vue";
import PageIntro from "~/components/pageIntro/pageIntro.vue";
let SkillsStore = namespace("skills");

@Component({
  components: {
    SiteFooter,
    SkillList,
    PageIntro,
  }
})
export default class ExperienceView extends Vue {
  @SkillsStore.Getter("technicalSkills") technicalSkills;
  @SkillsStore.Getter("professionalSkills") professionalSkills;

  async fetch({ store, params }) {
      await store.dispatch("skills/getSkills");
  }
}
</script>

