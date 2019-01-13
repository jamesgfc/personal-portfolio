<template>
  <div>
    <page-intro/>
    <div class="c-site-content">
      <div class="c-page">
        <div class="c-page__inner">
          <article>
          <h2 class="c-title--is-xl">Recent experience</h2>
          <stint-list :stintListData="stints" />

          <section>
            <h2 class="title title--secondary">Previous experience</h2>
            <p>Ministry of Defence, Cabinet Office & HM Treasury 2004 - 2006</p>
          </section>

        </article>
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

import StintList from "~/components/stintList/stintList.vue";
import PageIntro from "~/components/pageIntro/pageIntro.vue";
import SiteFooter from "~/components/siteFooter/siteFooter.vue";

let StintsStore = namespace("stints");
let PartnersStore = namespace("partners");

@Component({
  components: {
    StintList,
    PageIntro,
    SiteFooter,
  },
  head () {
    return {
      title: "Technical and professional skills | James Wright",
      meta: [
        { hid: 'description', name: 'description', content: 'Technical and prefessional skills of James Wright, user interface specialist and web developer based in South East England and London' }
      ]
    }
  }
})
export default class ExperienceView extends Vue {
  @StintsStore.State("data") stints;
  @PartnersStore.State("data") partners;

  async fetch({ store, params }) {
      await store.dispatch("stints/getStints");
      await store.dispatch("partners/getPartners");
  }
}
</script>

