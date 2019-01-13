<template>
  <highlighted-area :title="stint.role">
    <div class="o-flex">
      <div class="o-flex__row o-flex__row--can-wrap">
        <div class="o-flex__item o-flex__item--12 o-flex__item--4@gt-blueberry">{{ stint.startDate | date('MMMM YYYY') }}</div>
        <div class="o-flex__item o-flex__item--12 o-flex__item--8@gt-blueberry">
          <h2 class="c-title c-title--is-m">
            {{ stint.client }}  ({{ stint.startDate | date('MMMM YYYY') }}
              <span v-if="stint.endDate"> - {{ stint.endDate | date('MMMM YYYY') }}</span>
              <span v-else>to present</span>)
          </h2>
          <p>{{ stint.description }}</p>
          <ul v-if="stint.highlights">
            <li
              v-for="(highlight, index) in stint.highlights"
              :key="index">
              <!-- <a
                v-if="highlight.link"
                :href="highlight.link.path"
                :target="highlight.link.external ? '_blank' : '_self'">{{ highlight.description }}</a> -->
              <span>{{ highlight }}</span>
            </li>
          </ul>
          <ul v-if="stint.links">
            <li
              v-for="(link, index) in stint.links"
              :key="index">
              <a
                class="c-highlighted-area__link"
                :href="link.url"
                :target="link.external ? '_blank' : '_self'">
                {{ link.description }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </highlighted-area>
</template>


<script>
import Vue from "vue";
import { Component, Prop } from "nuxt-property-decorator";

import HighlightedArea from "~/components/highlightedArea/HighlightedArea.vue";

@Component({ components: { HighlightedArea } })
export default class Stint extends Vue {
  @Prop({ type: Object }) stint;
}
</script>
