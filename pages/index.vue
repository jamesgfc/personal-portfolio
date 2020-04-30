<template>
  <div>
    <page-intro title-light="Hi, I'm" title-strong="James...">
      I'm an experienced web development specialist based in Kent and London, with experience across the whole project lifecycle. Coupling extensive experience in traditional front end development roles with leading agile development teams / mentoring / line managing, I can thrive in challenging environments and love working in an iterable and collaborative manner.  Currently working for popular Fintech P2P platform Kuflink, I am a user interface expert who understands the merits of 'done' and ‘perfect’!
    </page-intro>
    <div class="c-site-content">
      <div class="c-page">
        <section class="c-page__notification">
          <p>Currently available to consider new permanent and contract opportunities.</p> 
          <Btn @on-button-clicked="navigateToContact" label="Contact me today" />
        </section>
        <div class="c-page__inner">
          <client-matrix title="Featured clients and employers" :partners="featuredPartners"></client-matrix>
          <h1 class="c-title c-title--is-xl">Featured technical skills</h1>
          <skills-matrix :skills="featuredSkills" />
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

import PageIntro from "~/components/pageIntro/pageIntro.vue";
import ClientMatrix from "~/components/clientMatrix/ClientMatrix.vue";
import SkillsMatrix from "~/components/skillsMatrix/SkillsMatrix.vue";
import SiteFooter from "~/components/siteFooter/siteFooter.vue";
import Btn from "~/components/btn/Btn.vue";

let StintsStore = namespace("stints");
let PartnersStore = namespace("partners");
let SkillsStore = namespace("skills");

@Component({
  components: {
    PageIntro,
    ClientMatrix,
    SiteFooter,
    SkillsMatrix,
    Btn
  }
})
export default class Index extends Vue {
  @StintsStore.State("data") stints;
  @SkillsStore.Getter("featuredSkills") featuredSkills;
  @PartnersStore.State("data") partners;
  @SkillsStore.State("data") skills;

  get featuredPartners() {
    // todo: move to store getter.
    return this.partners.filter(s => s.featured);
  }

  async fetch({ store, params }) {
      await store.dispatch("stints/getStints");
      await store.dispatch("partners/getPartners");
      await store.dispatch("skills/getSkills");
  }

  open() {
    console.log("opened");
  }

  navigateToContact() {
    this.$router.push("contact");
  }
}
</script>
