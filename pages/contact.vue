<template>
  <div>
    <page-intro title-light="Contact" title-strong="James...">
    </page-intro>
    <div class="c-site-content">
      <div class="c-page">
        fggf
        <div class="c-page__inner">
          <form
            ref="form"
            action="/"
            @submit="handleSubmit"
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            netlify
            novalidate
            class="o-form-layout">
            <input type="hidden" name="form-name" value="contact" />
            <p class="u-display-none">
              <label>Don’t fill this out: <input name="bot-field"></label>
            </p>
            <div class="o-form-layout__label-container">
              <label for="name">Your Name: (*) </label>
            </div>
            <div class="o-form-layout__element-container">
              <input
                required
                type="text"
                name="name"
                id="name"
                v-model="form.name" />
              <alert-box alertType="warn" v-if="!isNameValid && formSubmitAttempted">Name cannot be empty</alert-box>
            </div>

            <div class="o-form-layout__label-container">
              <label for="email">Email: (*)</label>
            </div>
            <div class="o-form-layout__element-container">
              <input
                required
                type="email"
                name="email"
                id="email"
                v-model="form.email" />
              <alert-box alertType="warn" v-if="!isEmailValid && formSubmitAttempted">Email must be formatted correctly</alert-box>
            </div>
            <div class="o-form-layout__label-container">
              <label for="message">Message: (*)</label>
            </div>
            <div class="o-form-layout__element-container">
              <textarea
                required
                name="message"
                id="message"
                v-model="form.message"/>
              <alert-box alertType="warn" v-if="!isMessageValid && formSubmitAttempted">Message cannot be empty</alert-box>
            </div>
            <div class="o-form-layout__label-container">
              <span>(*) required</span>
            </div>
            <div class="o-form-layout__element-container o-form-layout__element-container--has-content-justified-right">
              <btn label="Submit form" type="Send message" :disabled="isSubmitDisabled"/>
            </div>
          </form>
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
import axios from "axios";

import PageIntro from "~/components/pageIntro/pageIntro.vue";
import Btn from "~/components/btn/Btn.vue";
import SiteFooter from "~/components/siteFooter/siteFooter.vue";
import AlertBox from "~/components/alertBox/alertBox.vue";

@Component({
  components: {
    PageIntro,
    Btn,
    SiteFooter,
    AlertBox,
  }
})
export default class Contact extends Vue {

  form = {
    name: null,
    email: null,
    message: null,
  };
  formSubmitAttempted = false;

  get isEmailValid() {
    const EMAIL_REGEX =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return EMAIL_REGEX.test(String(this.form.email).toLowerCase());
  }

  get isNameValid() {
    return !!this.form.name && this.form.name.length >= 1;
  }

  get isMessageValid() {
    return !!this.form.message && this.form.message.length >= 1;
  }

  get isSubmitDisabled() {
    return this.formSubmitAttempted && (!this.isNameValid || !this.isEmailValid || !this.isMessageValid);
  }

  handleSubmit(e) {

    this.formSubmitAttempted = true;
    if (!this.isEmailValid || !this.isNameValid || !this.isMessageValid) {
      e.preventDefault();
      return false;
    }
}


  //   else {
  //     fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: this.encode({
  //         "form-name": "contact",
  //         ...this.form
  //       })
  //     })
  //     .then(() => this.$router.push("thanks"))
  //     .catch(() => this.$router.push("404"));
  //   }
  // };
}
</script>
