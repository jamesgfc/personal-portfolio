<template functional>
  <div class="c-menu-item">
    <nuxt-link
      :to="props.route"
      class="c-link c-link--is-on-dark c-menu-item__link"
      active-class="c-menu__link--is-active"
      exact>
      {{ props.label }}
    </nuxt-link>
    <nuxt-link :to="props.route" exact>
    <i class="c-link c-link--is-on-dark c-menu-item__link c-menu-item__icon">
      <font-awesome-icon :icon="props.icon" aria-hidden="true" />
    </i>
    </nuxt-link>
  </div>
</template>
